/* tslint:disable */
export const typeDefs = ['﻿type Hotkey {\n  abilityId: String!\n  hotkey: String!\n  id: ID!\n  userId: String!\n}\n\ntype HotkeyConnection {\n  items: [Hotkey]\n  nextToken: String\n}\n\ntype Mutation {\n  createHotkey(input: CreateHotkeyInput!): Hotkey\n  deleteHotkey(input: DeleteHotkeyInput!): Hotkey\n  updateHotkey(input: UpdateHotkeyInput!): Hotkey\n}\n\ntype Query {\n  getHotkey(id: ID!): Hotkey\n  getHotkeyByAbilityId(abilityId: String!): HotkeyConnection\n  listHotkeys(filter: TableHotkeyFilterInput, limit: Int, nextToken: String): HotkeyConnection\n  queryHotkeysByUserIdAbilityIdIndex(after: String, first: Int, userId: String!): HotkeyConnection\n}\n\ntype Subscription {\n  onCreateHotkey(abilityId: String, hotkey: String, id: ID, userId: String): Hotkey\n  onDeleteHotkey(abilityId: String, hotkey: String, id: ID, userId: String): Hotkey\n  onUpdateHotkey(abilityId: String, hotkey: String, id: ID, userId: String): Hotkey\n}\n\ninput CreateHotkeyInput {\n  abilityId: String!\n  hotkey: String!\n  userId: String\n}\n\ninput DeleteHotkeyInput {\n  id: ID!\n}\n\ninput TableBooleanFilterInput {\n  eq: Boolean\n  ne: Boolean\n}\n\ninput TableFloatFilterInput {\n  between: [Float]\n  contains: Float\n  eq: Float\n  ge: Float\n  gt: Float\n  le: Float\n  lt: Float\n  ne: Float\n  notContains: Float\n}\n\ninput TableHotkeyFilterInput {\n  abilityId: TableStringFilterInput\n  hotkey: TableStringFilterInput\n  id: TableIDFilterInput\n  userId: TableStringFilterInput\n}\n\ninput TableIDFilterInput {\n  beginsWith: ID\n  between: [ID]\n  contains: ID\n  eq: ID\n  ge: ID\n  gt: ID\n  le: ID\n  lt: ID\n  ne: ID\n  notContains: ID\n}\n\ninput TableIntFilterInput {\n  between: [Int]\n  contains: Int\n  eq: Int\n  ge: Int\n  gt: Int\n  le: Int\n  lt: Int\n  ne: Int\n  notContains: Int\n}\n\ninput TableStringFilterInput {\n  beginsWith: String\n  between: [String]\n  contains: String\n  eq: String\n  ge: String\n  gt: String\n  le: String\n  lt: String\n  ne: String\n  notContains: String\n}\n\ninput UpdateHotkeyInput {\n  abilityId: String\n  hotkey: String\n  id: ID!\n  userId: String\n}\n'];

export interface Query {
  getHotkey: Hotkey | null;
  getHotkeyByAbilityId: HotkeyConnection | null;
  listHotkeys: HotkeyConnection | null;
  queryHotkeysByUserIdAbilityIdIndex: HotkeyConnection | null;
  subscribeToMore: (buildSub: any) => any;
}

export interface GetHotkeyQueryArgs {
  id: string;
}

export interface GetHotkeyByAbilityIdQueryArgs {
  abilityId: string;
}

export interface ListHotkeysQueryArgs {
  filter: TableHotkeyFilterInput | null;
  limit: number | null;
  nextToken: string | null;
}

export interface QueryHotkeysByUserIdAbilityIdIndexQueryArgs {
  after: string | null;
  first: number | null;
  userId: string;
}

export interface Hotkey {
  abilityId: string;
  hotkey: string;
  id: string;
  userId: string;
}

export interface HotkeyConnection {
  items: Array<Hotkey> | null;
  nextToken: string | null;
}

export interface TableHotkeyFilterInput {
  abilityId: TableStringFilterInput | null;
  hotkey: TableStringFilterInput | null;
  id: TableIDFilterInput | null;
  userId: TableStringFilterInput | null;
}

export interface TableStringFilterInput {
  beginsWith: string | null;
  between: Array<string> | null;
  contains: string | null;
  eq: string | null;
  ge: string | null;
  gt: string | null;
  le: string | null;
  lt: string | null;
  ne: string | null;
  notContains: string | null;
}

export interface TableIDFilterInput {
  beginsWith: string | null;
  between: Array<string> | null;
  contains: string | null;
  eq: string | null;
  ge: string | null;
  gt: string | null;
  le: string | null;
  lt: string | null;
  ne: string | null;
  notContains: string | null;
}

export interface Mutation {
  createHotkey: Hotkey | null;
  deleteHotkey: Hotkey | null;
  updateHotkey: Hotkey | null;
}

export interface CreateHotkeyMutationArgs {
  input: CreateHotkeyInput;
}

export interface DeleteHotkeyMutationArgs {
  input: DeleteHotkeyInput;
}

export interface UpdateHotkeyMutationArgs {
  input: UpdateHotkeyInput;
}

export interface CreateHotkeyInput {
  abilityId: string;
  hotkey: string;
  userId: string | null;
}

export interface DeleteHotkeyInput {
  id: string;
}

export interface UpdateHotkeyInput {
  abilityId: string | null;
  hotkey: string | null;
  id: string;
  userId: string | null;
}

export interface Subscription {
  onCreateHotkey: Hotkey | null;
  onDeleteHotkey: Hotkey | null;
  onUpdateHotkey: Hotkey | null;
}

export interface OnCreateHotkeySubscriptionArgs {
  abilityId: string | null;
  hotkey: string | null;
  id: string | null;
  userId: string | null;
}

export interface OnDeleteHotkeySubscriptionArgs {
  abilityId: string | null;
  hotkey: string | null;
  id: string | null;
  userId: string | null;
}

export interface OnUpdateHotkeySubscriptionArgs {
  abilityId: string | null;
  hotkey: string | null;
  id: string | null;
  userId: string | null;
}

export interface TableBooleanFilterInput {
  eq: boolean | null;
  ne: boolean | null;
}

export interface TableFloatFilterInput {
  between: Array<number> | null;
  contains: number | null;
  eq: number | null;
  ge: number | null;
  gt: number | null;
  le: number | null;
  lt: number | null;
  ne: number | null;
  notContains: number | null;
}

export interface TableIntFilterInput {
  between: Array<number> | null;
  contains: number | null;
  eq: number | null;
  ge: number | null;
  gt: number | null;
  le: number | null;
  lt: number | null;
  ne: number | null;
  notContains: number | null;
}
