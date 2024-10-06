import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { FloodAlertContext } from "../graphql/context.js"
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Date: { input: string; output: string; }
  DateTime: { input: string; output: string; }
};

export type AddAlertInput = {
  category: Scalars['String']['input'];
  measurement: Scalars['String']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  siteId: Scalars['ID']['input'];
  threshold: Scalars['Float']['input'];
  unit: Scalars['String']['input'];
};

export type AddSiteInput = {
  /** The county FIPS code of the site */
  countyCode: Scalars['String']['input'];
  id: Scalars['ID']['input'];
  /** The latitude of the site */
  latitude: Scalars['String']['input'];
  /** The longitude of the site */
  longitude: Scalars['String']['input'];
  /** The name of the site */
  name: Scalars['String']['input'];
  /** The state FIPS code of the site */
  stateCode: Scalars['String']['input'];
};

/** An alert that is triggered when a measurement exceeds a threshold */
export type Alert = {
  __typename?: 'Alert';
  /** The risk category of the alert */
  category: Scalars['String']['output'];
  /** The creation timestamp of the alert */
  createdAt: Scalars['DateTime']['output'];
  /** The unique identifier for the alert */
  id: Scalars['ID']['output'];
  /** The name of the measurement that alert is for */
  measurement: Scalars['String']['output'];
  /** The name of the alert */
  name?: Maybe<Scalars['String']['output']>;
  /** The ordinal of the station's alert in the user's list of alerts */
  ordinal: Scalars['Int']['output'];
  /** The site that this alert is for */
  site: Site;
  /** The value of the measurement that will trigger the alert */
  threshold: Scalars['Float']['output'];
  /** The unit of the measurement that alert is for */
  unit: Scalars['String']['output'];
};

/** A site that a user has bookmarked */
export type Bookmark = {
  __typename?: 'Bookmark';
  /** The date and time the bookmark was created */
  createdAt: Scalars['DateTime']['output'];
  /** The ordinal of the bookmark in the user's list of bookmarks */
  ordinal: Scalars['Int']['output'];
  /** The bookmarked site */
  site: Site;
};

/** County data from the US Census Bureau */
export type County = {
  __typename?: 'County';
  countyFIPSCode: Scalars['String']['output'];
  name: Scalars['String']['output'];
  state: Scalars['String']['output'];
  stateFIPSCode: Scalars['String']['output'];
};

export type CreateUserInput = {
  displayName?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  givenName?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  photoUrl?: InputMaybe<Scalars['String']['input']>;
  surname?: InputMaybe<Scalars['String']['input']>;
};

export type EditAlertInput = {
  category?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  threshold?: InputMaybe<Scalars['Float']['input']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Add an alert to a user's account */
  addAlert: MutationResponse;
  /** Add a site to a user's bookmarks */
  addBookmarkedSite: MutationResponse;
  /** Add a USGS station site to the database */
  addSite: MutationResponse;
  /** Change the ordinal of an site ID in a user's list of alerts */
  changeAlertOrdinalForSite: MutationResponse;
  /** Change the ordinal of a bookmark in a user's list of bookmarks */
  changeBookmarkOrdinal: MutationResponse;
  /** Add a new user to the database */
  createUser: MutationResponse;
  /** Edit an alert in a user's account */
  editAlert: MutationResponse;
  /** Increment totalAlertlistAdditions by 1 */
  incrementTotalAlertlistAdditions: MutationResponse;
  /** Increment totalSuccessfulSharingEvents by 1 */
  incrementTotalSuccessfulSharingEvents: MutationResponse;
  /** Increment totalWatchlistAdditions by 1 */
  incrementTotalWatchlistAdditions: MutationResponse;
  /** Remove an alert from a user's account */
  removeAlert: MutationResponse;
  /** Remove a site from a user's bookmarks */
  removeBookmarkedSite: MutationResponse;
  /** Update a user's details */
  updateUser: MutationResponse;
  /** Update the user payment tier */
  updateUserTier: MutationResponse;
};


export type MutationAddAlertArgs = {
  alert: AddAlertInput;
  id: Scalars['ID']['input'];
};


export type MutationAddBookmarkedSiteArgs = {
  id: Scalars['ID']['input'];
  siteId: Scalars['ID']['input'];
};


export type MutationAddSiteArgs = {
  site: AddSiteInput;
};


export type MutationChangeAlertOrdinalForSiteArgs = {
  id: Scalars['ID']['input'];
  ordinal: Scalars['Int']['input'];
  siteId: Scalars['ID']['input'];
};


export type MutationChangeBookmarkOrdinalArgs = {
  id: Scalars['ID']['input'];
  ordinal: Scalars['Int']['input'];
  siteId: Scalars['ID']['input'];
};


export type MutationCreateUserArgs = {
  createUserInput: CreateUserInput;
};


export type MutationEditAlertArgs = {
  alert: EditAlertInput;
  id: Scalars['ID']['input'];
};


export type MutationIncrementTotalAlertlistAdditionsArgs = {
  id: Scalars['ID']['input'];
};


export type MutationIncrementTotalSuccessfulSharingEventsArgs = {
  id: Scalars['ID']['input'];
};


export type MutationIncrementTotalWatchlistAdditionsArgs = {
  id: Scalars['ID']['input'];
};


export type MutationRemoveAlertArgs = {
  alertId: Scalars['ID']['input'];
  id: Scalars['ID']['input'];
};


export type MutationRemoveBookmarkedSiteArgs = {
  id: Scalars['ID']['input'];
  siteId: Scalars['ID']['input'];
};


export type MutationUpdateUserArgs = {
  updateUserInput: UpdateUserInput;
};


export type MutationUpdateUserTierArgs = {
  id: Scalars['ID']['input'];
  premium: Scalars['Boolean']['input'];
};

export type MutationResponse = {
  __typename?: 'MutationResponse';
  error?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
};

export type PremiumUserInput = {
  premium?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Query = {
  __typename?: 'Query';
  /** Get all USGS station sites which have been added to the database */
  allSites: Array<Site>;
  /** Get a list of all counties in a state */
  countiesInState: Array<Maybe<County>>;
  /** Search for a county by name */
  countySearch: Array<Maybe<County>>;
  /** Get a USGS station site by its ID */
  site?: Maybe<Site>;
  /** Search for USGS station sites by name or ID */
  siteSearch: Array<Site>;
  /** Get summary statistics for a type of measurement at a station */
  summaryStatisticsForMeasurement?: Maybe<SummaryStatisticsForMeasurementResponse>;
  /** Get a user by their ID */
  user?: Maybe<User>;
  userStatistic?: Maybe<UserStatistic>;
};


export type QueryCountiesInStateArgs = {
  stateAbbreviation: Scalars['String']['input'];
};


export type QueryCountySearchArgs = {
  name: Scalars['String']['input'];
};


export type QuerySiteArgs = {
  id: Scalars['ID']['input'];
};


export type QuerySiteSearchArgs = {
  searchText: Scalars['String']['input'];
};


export type QuerySummaryStatisticsForMeasurementArgs = {
  input: SummaryStatisticsForMeasurementInput;
};


export type QueryUserArgs = {
  id: Scalars['ID']['input'];
};


export type QueryUserStatisticArgs = {
  id: Scalars['ID']['input'];
};

/** A USGS station site */
export type Site = {
  __typename?: 'Site';
  /** The agency that manages the site */
  agency?: Maybe<Scalars['String']['output']>;
  /** The altitude of the site */
  altitude?: Maybe<Scalars['Float']['output']>;
  /** The site's ID in the form of `AGENCY_CODE:SITE_ID` */
  id: Scalars['ID']['output'];
  /** The latitude of the site */
  latitude: Scalars['String']['output'];
  /** The longitude of the site */
  longitude: Scalars['String']['output'];
  /** The name of the site */
  name: Scalars['String']['output'];
};

export type SummaryStatistics = {
  __typename?: 'SummaryStatistics';
  max: Scalars['Float']['output'];
  mean: Scalars['Float']['output'];
  min: Scalars['Float']['output'];
  /** The first quartile */
  q1: Scalars['Float']['output'];
  /** The second quartile (median) */
  q2: Scalars['Float']['output'];
  /** The third quartile */
  q3: Scalars['Float']['output'];
  standardDeviation: Scalars['Float']['output'];
  variance: Scalars['Float']['output'];
};

export type SummaryStatisticsForMeasurement = {
  __typename?: 'SummaryStatisticsForMeasurement';
  endDate: Scalars['DateTime']['output'];
  startDate: Scalars['DateTime']['output'];
  summaryStatistics: SummaryStatistics;
};

export type SummaryStatisticsForMeasurementInput = {
  /** The number of months to get statistics for */
  numberOfMonths: Scalars['Int']['input'];
  /** The UTC offset to use for the start and end dates */
  offset?: InputMaybe<Scalars['Int']['input']>;
  /** The parameter code of the measurement */
  parameterCode: Scalars['String']['input'];
  /** The USGS station ID */
  stationId: Scalars['String']['input'];
};

export type SummaryStatisticsForMeasurementResponse = {
  __typename?: 'SummaryStatisticsForMeasurementResponse';
  /** The parameter code of the measurement */
  parameterCode: Scalars['String']['output'];
  /** The USGS station ID */
  stationId: Scalars['String']['output'];
  /** The summary statistics for each month */
  summaryStatisticsByMonth: Array<SummaryStatisticsForMeasurement>;
  /** The summary statistics for the entire period */
  summaryStatisticsForPeriod: SummaryStatisticsForMeasurement;
};

export type UpdateUserInput = {
  displayName?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  givenName?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  photoUrl?: InputMaybe<Scalars['String']['input']>;
  surname?: InputMaybe<Scalars['String']['input']>;
};

export type User = {
  __typename?: 'User';
  /** The user's alerts */
  alerts: Array<Alert>;
  /** The user's bookmarked sites */
  bookmarks: Array<Bookmark>;
  /** The user's display name */
  displayName?: Maybe<Scalars['String']['output']>;
  /** The user's email address */
  email?: Maybe<Scalars['String']['output']>;
  /** The user's given name */
  givenName?: Maybe<Scalars['String']['output']>;
  /** The user's GUID. It is generated by an external service. The client should not generate this value. */
  id: Scalars['ID']['output'];
  /** The user's avatar URL */
  photoUrl?: Maybe<Scalars['String']['output']>;
  /** The user's current payment tier */
  premium: Scalars['Boolean']['output'];
  /** The user's surname */
  surname?: Maybe<Scalars['String']['output']>;
};

export type UserStatistic = {
  __typename?: 'UserStatistic';
  /** The user's GUID. It is generated by an external service. The client should not generate this value. */
  id: Scalars['ID']['output'];
  /** Track user new alert additions */
  totalAlertlistAdditions: Scalars['Int']['output'];
  /** Track user successful sharing events */
  totalSuccessfulSharingEvents: Scalars['Int']['output'];
  /** Track user new watchlist additions */
  totalWatchlistAdditions: Scalars['Int']['output'];
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  AddAlertInput: ResolverTypeWrapper<Partial<AddAlertInput>>;
  AddSiteInput: ResolverTypeWrapper<Partial<AddSiteInput>>;
  Alert: ResolverTypeWrapper<Partial<Alert>>;
  Bookmark: ResolverTypeWrapper<Partial<Bookmark>>;
  Boolean: ResolverTypeWrapper<Partial<Scalars['Boolean']['output']>>;
  County: ResolverTypeWrapper<Partial<County>>;
  CreateUserInput: ResolverTypeWrapper<Partial<CreateUserInput>>;
  Date: ResolverTypeWrapper<Partial<Scalars['Date']['output']>>;
  DateTime: ResolverTypeWrapper<Partial<Scalars['DateTime']['output']>>;
  EditAlertInput: ResolverTypeWrapper<Partial<EditAlertInput>>;
  Float: ResolverTypeWrapper<Partial<Scalars['Float']['output']>>;
  ID: ResolverTypeWrapper<Partial<Scalars['ID']['output']>>;
  Int: ResolverTypeWrapper<Partial<Scalars['Int']['output']>>;
  Mutation: ResolverTypeWrapper<{}>;
  MutationResponse: ResolverTypeWrapper<Partial<MutationResponse>>;
  PremiumUserInput: ResolverTypeWrapper<Partial<PremiumUserInput>>;
  Query: ResolverTypeWrapper<{}>;
  Site: ResolverTypeWrapper<Partial<Site>>;
  String: ResolverTypeWrapper<Partial<Scalars['String']['output']>>;
  SummaryStatistics: ResolverTypeWrapper<Partial<SummaryStatistics>>;
  SummaryStatisticsForMeasurement: ResolverTypeWrapper<Partial<SummaryStatisticsForMeasurement>>;
  SummaryStatisticsForMeasurementInput: ResolverTypeWrapper<Partial<SummaryStatisticsForMeasurementInput>>;
  SummaryStatisticsForMeasurementResponse: ResolverTypeWrapper<Partial<SummaryStatisticsForMeasurementResponse>>;
  UpdateUserInput: ResolverTypeWrapper<Partial<UpdateUserInput>>;
  User: ResolverTypeWrapper<Partial<User>>;
  UserStatistic: ResolverTypeWrapper<Partial<UserStatistic>>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  AddAlertInput: Partial<AddAlertInput>;
  AddSiteInput: Partial<AddSiteInput>;
  Alert: Partial<Alert>;
  Bookmark: Partial<Bookmark>;
  Boolean: Partial<Scalars['Boolean']['output']>;
  County: Partial<County>;
  CreateUserInput: Partial<CreateUserInput>;
  Date: Partial<Scalars['Date']['output']>;
  DateTime: Partial<Scalars['DateTime']['output']>;
  EditAlertInput: Partial<EditAlertInput>;
  Float: Partial<Scalars['Float']['output']>;
  ID: Partial<Scalars['ID']['output']>;
  Int: Partial<Scalars['Int']['output']>;
  Mutation: {};
  MutationResponse: Partial<MutationResponse>;
  PremiumUserInput: Partial<PremiumUserInput>;
  Query: {};
  Site: Partial<Site>;
  String: Partial<Scalars['String']['output']>;
  SummaryStatistics: Partial<SummaryStatistics>;
  SummaryStatisticsForMeasurement: Partial<SummaryStatisticsForMeasurement>;
  SummaryStatisticsForMeasurementInput: Partial<SummaryStatisticsForMeasurementInput>;
  SummaryStatisticsForMeasurementResponse: Partial<SummaryStatisticsForMeasurementResponse>;
  UpdateUserInput: Partial<UpdateUserInput>;
  User: Partial<User>;
  UserStatistic: Partial<UserStatistic>;
};

export type AlertResolvers<ContextType = FloodAlertContext, ParentType extends ResolversParentTypes['Alert'] = ResolversParentTypes['Alert']> = {
  category?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  measurement?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  ordinal?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  site?: Resolver<ResolversTypes['Site'], ParentType, ContextType>;
  threshold?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  unit?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BookmarkResolvers<ContextType = FloodAlertContext, ParentType extends ResolversParentTypes['Bookmark'] = ResolversParentTypes['Bookmark']> = {
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  ordinal?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  site?: Resolver<ResolversTypes['Site'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CountyResolvers<ContextType = FloodAlertContext, ParentType extends ResolversParentTypes['County'] = ResolversParentTypes['County']> = {
  countyFIPSCode?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  state?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  stateFIPSCode?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface DateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Date'], any> {
  name: 'Date';
}

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export type MutationResolvers<ContextType = FloodAlertContext, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  addAlert?: Resolver<ResolversTypes['MutationResponse'], ParentType, ContextType, RequireFields<MutationAddAlertArgs, 'alert' | 'id'>>;
  addBookmarkedSite?: Resolver<ResolversTypes['MutationResponse'], ParentType, ContextType, RequireFields<MutationAddBookmarkedSiteArgs, 'id' | 'siteId'>>;
  addSite?: Resolver<ResolversTypes['MutationResponse'], ParentType, ContextType, RequireFields<MutationAddSiteArgs, 'site'>>;
  changeAlertOrdinalForSite?: Resolver<ResolversTypes['MutationResponse'], ParentType, ContextType, RequireFields<MutationChangeAlertOrdinalForSiteArgs, 'id' | 'ordinal' | 'siteId'>>;
  changeBookmarkOrdinal?: Resolver<ResolversTypes['MutationResponse'], ParentType, ContextType, RequireFields<MutationChangeBookmarkOrdinalArgs, 'id' | 'ordinal' | 'siteId'>>;
  createUser?: Resolver<ResolversTypes['MutationResponse'], ParentType, ContextType, RequireFields<MutationCreateUserArgs, 'createUserInput'>>;
  editAlert?: Resolver<ResolversTypes['MutationResponse'], ParentType, ContextType, RequireFields<MutationEditAlertArgs, 'alert' | 'id'>>;
  incrementTotalAlertlistAdditions?: Resolver<ResolversTypes['MutationResponse'], ParentType, ContextType, RequireFields<MutationIncrementTotalAlertlistAdditionsArgs, 'id'>>;
  incrementTotalSuccessfulSharingEvents?: Resolver<ResolversTypes['MutationResponse'], ParentType, ContextType, RequireFields<MutationIncrementTotalSuccessfulSharingEventsArgs, 'id'>>;
  incrementTotalWatchlistAdditions?: Resolver<ResolversTypes['MutationResponse'], ParentType, ContextType, RequireFields<MutationIncrementTotalWatchlistAdditionsArgs, 'id'>>;
  removeAlert?: Resolver<ResolversTypes['MutationResponse'], ParentType, ContextType, RequireFields<MutationRemoveAlertArgs, 'alertId' | 'id'>>;
  removeBookmarkedSite?: Resolver<ResolversTypes['MutationResponse'], ParentType, ContextType, RequireFields<MutationRemoveBookmarkedSiteArgs, 'id' | 'siteId'>>;
  updateUser?: Resolver<ResolversTypes['MutationResponse'], ParentType, ContextType, RequireFields<MutationUpdateUserArgs, 'updateUserInput'>>;
  updateUserTier?: Resolver<ResolversTypes['MutationResponse'], ParentType, ContextType, RequireFields<MutationUpdateUserTierArgs, 'id' | 'premium'>>;
};

export type MutationResponseResolvers<ContextType = FloodAlertContext, ParentType extends ResolversParentTypes['MutationResponse'] = ResolversParentTypes['MutationResponse']> = {
  error?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  ok?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = FloodAlertContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  allSites?: Resolver<Array<ResolversTypes['Site']>, ParentType, ContextType>;
  countiesInState?: Resolver<Array<Maybe<ResolversTypes['County']>>, ParentType, ContextType, RequireFields<QueryCountiesInStateArgs, 'stateAbbreviation'>>;
  countySearch?: Resolver<Array<Maybe<ResolversTypes['County']>>, ParentType, ContextType, RequireFields<QueryCountySearchArgs, 'name'>>;
  site?: Resolver<Maybe<ResolversTypes['Site']>, ParentType, ContextType, RequireFields<QuerySiteArgs, 'id'>>;
  siteSearch?: Resolver<Array<ResolversTypes['Site']>, ParentType, ContextType, RequireFields<QuerySiteSearchArgs, 'searchText'>>;
  summaryStatisticsForMeasurement?: Resolver<Maybe<ResolversTypes['SummaryStatisticsForMeasurementResponse']>, ParentType, ContextType, RequireFields<QuerySummaryStatisticsForMeasurementArgs, 'input'>>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryUserArgs, 'id'>>;
  userStatistic?: Resolver<Maybe<ResolversTypes['UserStatistic']>, ParentType, ContextType, RequireFields<QueryUserStatisticArgs, 'id'>>;
};

export type SiteResolvers<ContextType = FloodAlertContext, ParentType extends ResolversParentTypes['Site'] = ResolversParentTypes['Site']> = {
  agency?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  altitude?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  latitude?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  longitude?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SummaryStatisticsResolvers<ContextType = FloodAlertContext, ParentType extends ResolversParentTypes['SummaryStatistics'] = ResolversParentTypes['SummaryStatistics']> = {
  max?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  mean?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  min?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  q1?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  q2?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  q3?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  standardDeviation?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  variance?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SummaryStatisticsForMeasurementResolvers<ContextType = FloodAlertContext, ParentType extends ResolversParentTypes['SummaryStatisticsForMeasurement'] = ResolversParentTypes['SummaryStatisticsForMeasurement']> = {
  endDate?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  startDate?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  summaryStatistics?: Resolver<ResolversTypes['SummaryStatistics'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SummaryStatisticsForMeasurementResponseResolvers<ContextType = FloodAlertContext, ParentType extends ResolversParentTypes['SummaryStatisticsForMeasurementResponse'] = ResolversParentTypes['SummaryStatisticsForMeasurementResponse']> = {
  parameterCode?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  stationId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  summaryStatisticsByMonth?: Resolver<Array<ResolversTypes['SummaryStatisticsForMeasurement']>, ParentType, ContextType>;
  summaryStatisticsForPeriod?: Resolver<ResolversTypes['SummaryStatisticsForMeasurement'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserResolvers<ContextType = FloodAlertContext, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  alerts?: Resolver<Array<ResolversTypes['Alert']>, ParentType, ContextType>;
  bookmarks?: Resolver<Array<ResolversTypes['Bookmark']>, ParentType, ContextType>;
  displayName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  givenName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  photoUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  premium?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  surname?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserStatisticResolvers<ContextType = FloodAlertContext, ParentType extends ResolversParentTypes['UserStatistic'] = ResolversParentTypes['UserStatistic']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  totalAlertlistAdditions?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  totalSuccessfulSharingEvents?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  totalWatchlistAdditions?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = FloodAlertContext> = {
  Alert?: AlertResolvers<ContextType>;
  Bookmark?: BookmarkResolvers<ContextType>;
  County?: CountyResolvers<ContextType>;
  Date?: GraphQLScalarType;
  DateTime?: GraphQLScalarType;
  Mutation?: MutationResolvers<ContextType>;
  MutationResponse?: MutationResponseResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Site?: SiteResolvers<ContextType>;
  SummaryStatistics?: SummaryStatisticsResolvers<ContextType>;
  SummaryStatisticsForMeasurement?: SummaryStatisticsForMeasurementResolvers<ContextType>;
  SummaryStatisticsForMeasurementResponse?: SummaryStatisticsForMeasurementResponseResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
  UserStatistic?: UserStatisticResolvers<ContextType>;
};

