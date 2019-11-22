import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Ability = {
  __typename?: 'Ability';
  id: Scalars['String'];
  name: Scalars['String'];
  image: Scalars['String'];
  hotkey: Scalars['String'];
};

export enum Faction {
  Human = 'Human',
  Orc = 'Orc',
  Undead = 'Undead',
  NightElf = 'NightElf',
  Neutral = 'Neutral',
  Misc = 'Misc',
}

export type FactionDetails = {
  __typename?: 'FactionDetails';
  name: Faction;
  image: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  Factions: Array<FactionDetails>;
  Units: Array<Unit>;
};

export type QueryUnitsArgs = {
  faction?: Maybe<Faction>;
};

export type UnAbility = {
  __typename?: 'UnAbility';
  id: Scalars['String'];
  name: Scalars['String'];
  image: Scalars['String'];
  hotkey: Scalars['String'];
};

export type Unit = {
  __typename?: 'Unit';
  name: Scalars['String'];
  image: Scalars['String'];
  faction: Faction;
  isHero: Scalars['Boolean'];
  isBuilding: Scalars['Boolean'];
  abilities: Array<Ability>;
  unabilities: Array<UnAbility>;
};

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => Promise<TResult> | TResult;

export type StitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
> {
  subscribe: SubscriptionSubscribeFn<
    { [key in TKey]: TResult },
    TParent,
    TContext,
    TArgs
  >;
  resolve?: SubscriptionResolveFn<
    TResult,
    { [key in TKey]: TResult },
    TContext,
    TArgs
  >;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<
  TResult,
  TKey extends string,
  TParent = {},
  TContext = {},
  TArgs = {}
> =
  | ((
      ...args: any[]
    ) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo,
) => Maybe<TTypes>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<
  TResult = {},
  TParent = {},
  TContext = {},
  TArgs = {}
> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Query: ResolverTypeWrapper<{}>;
  FactionDetails: ResolverTypeWrapper<FactionDetails>;
  Faction: Faction;
  String: ResolverTypeWrapper<Scalars['String']>;
  Unit: ResolverTypeWrapper<Unit>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Ability: ResolverTypeWrapper<Ability>;
  UnAbility: ResolverTypeWrapper<UnAbility>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Query: {};
  FactionDetails: FactionDetails;
  Faction: Faction;
  String: Scalars['String'];
  Unit: Unit;
  Boolean: Scalars['Boolean'];
  Ability: Ability;
  UnAbility: UnAbility;
};

export type AbilityResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Ability'] = ResolversParentTypes['Ability']
> = {
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  image?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  hotkey?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type FactionDetailsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['FactionDetails'] = ResolversParentTypes['FactionDetails']
> = {
  name?: Resolver<ResolversTypes['Faction'], ParentType, ContextType>;
  image?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type QueryResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']
> = {
  Factions?: Resolver<
    Array<ResolversTypes['FactionDetails']>,
    ParentType,
    ContextType
  >;
  Units?: Resolver<
    Array<ResolversTypes['Unit']>,
    ParentType,
    ContextType,
    QueryUnitsArgs
  >;
};

export type UnAbilityResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['UnAbility'] = ResolversParentTypes['UnAbility']
> = {
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  image?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  hotkey?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type UnitResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Unit'] = ResolversParentTypes['Unit']
> = {
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  image?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  faction?: Resolver<ResolversTypes['Faction'], ParentType, ContextType>;
  isHero?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  isBuilding?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  abilities?: Resolver<
    Array<ResolversTypes['Ability']>,
    ParentType,
    ContextType
  >;
  unabilities?: Resolver<
    Array<ResolversTypes['UnAbility']>,
    ParentType,
    ContextType
  >;
};

export type Resolvers<ContextType = any> = {
  Ability?: AbilityResolvers<ContextType>;
  FactionDetails?: FactionDetailsResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  UnAbility?: UnAbilityResolvers<ContextType>;
  Unit?: UnitResolvers<ContextType>;
};

/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
