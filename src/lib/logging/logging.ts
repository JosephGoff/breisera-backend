import { pino } from "pino";
import path from "path";
import { fileURLToPath } from "url";
import type { TransportTargetOptions } from "pino";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

namespace logging {
  let logger = pino();

  type ConfigOptions = {
    logFilePath?: string;
    level?: pino.Level;
  };

  /**
   * Configures the logger with the given options.
   *
   * @param param - Configuration options for the logger.
   * @param param.logFilePath - The path to the log file. If not provided, logs
   * will be written to stdout.
   * @param param.level - The log level. If not provided, defaults to `info`.
   */
  export const configLogger = ({ logFilePath, level }: ConfigOptions) => {
    const targets: TransportTargetOptions[] = [
      { target: "pino-pretty", level: "info", options: { colorize: true } },
    ];

    if (logFilePath) {
      targets.push({
        target: path.resolve(__dirname, "file-transport.js"),
        options: { destination: logFilePath, mkdir: true },
        level: level ?? "info",
      });
    }

    const transport = pino.transport({
      targets,
    });
    logger = pino(transport);
  };

  /**
   * Sets the log level of the logger.
   *
   * @param level - The log level to set the logger to.
   */
  export const setLevel = (level: pino.Level) => {
    logger.level = level;
  };

  export const log = (...args: Parameters<pino.LogFn>) => {
    logger.info(...args);
  };

  export const info = (...args: Parameters<pino.LogFn>) => {
    logger.info(...args);
  };
  export const warn = (...args: Parameters<pino.LogFn>) => {
    logger.warn(...args);
  };

  export const error = (...args: Parameters<pino.LogFn>) => {
    logger.error(...args);
  };

  export const fatal = (...args: Parameters<pino.LogFn>) => {
    logger.fatal(...args);
  };

  /**
   * Get the logger instance.
   *
   * @returns The logger instance.
   */
  export const getLogger = () => logger;
}

export default logging;
