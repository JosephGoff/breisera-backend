import build from "pino-abstract-transport";
import pkg from "sonic-boom";
import { once } from "events";
import { isMainThread } from "worker_threads";
import onExit from "on-exit-leak-free";

const { SonicBoom } = pkg;

const noop = () => {};

const autoEnd = (stream, eventName) => {
  if (stream.destroyed) {
    return;
  }

  if (eventName === "beforeExit") {
    stream.flush();
    stream.on("drain", () => stream.end());
  } else {
    stream.flushSync();
  }
};

export default async function (opts) {
  const destination = new SonicBoom({
    dest: opts.destination ?? 1,
    sync: opts.sync ?? false,
    mkdir: opts.mkdir ?? false,
    flushTimeout: opts.flushTimeout || 30000,
  });

  const filterBrokenPipe = (err) => {
    if (err.code === "EPIPE") {
      destination.write = noop;
      destination.end = noop;
      destination.flushSync = noop;
      destination.destroy = noop;
    }

    destination.removeListener("error", filterBrokenPipe);
    destination.emit("error", err);
  };

  destination.on("error", filterBrokenPipe);

  if (isMainThread) {
    onExit.register(destination, autoEnd);
    destination.on("close", () => onExit.unregister(destination));
  }

  await once(destination, "ready");

  return build(
    async (source) => {
      for await (let obj of source) {
        const toDrain = !destination.write(JSON.stringify(obj) + "\n");
        if (toDrain) {
          await once(destination, "drain");
        }
      }
    },
    {
      close: async (err) => {
        destination.end();
        await once(destination, "close");
      },
    },
  );
}
