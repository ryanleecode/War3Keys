import { default as gql } from 'graphql-tag';

export const getHotkeyByAbilityId = gql`
  query($abilityId: String!) {
    getHotkeyByAbilityId(abilityId: $abilityId) {
      items {
        id
        abilityId
        hotkey
        userId
      }
    }
  }
`;

export const createHotkeyMutation = gql`
  mutation($abilityId: String!, $hotkey: String!, $userId: String) {
    createHotkey(input: {
      abilityId: $abilityId,
      hotkey: $hotkey,
      userId: $userId
    }) {
      id
      abilityId
      hotkey
      userId
    }
  }
`;

export const updateHotkeyMutation = gql`
  mutation($id: ID!, $abilityId: String, $hotkey: String, $userId: String) {
    updateHotkey(input: {
      id: $id,
      abilityId: $abilityId,
      hotkey: $hotkey,
      userId: $userId
    }) {
      id
      abilityId
      hotkey
      userId
    }
  }
`;

export const deleteHotkeyMutation = gql`
  mutation($id: ID!) {
    deleteHotkey(input: {
      id: $id
    }) {
      id
    }
  }
`;

export const onCreateHotkeySubscription = gql`
  subscription {
    onCreateHotkey {
      id,
      abilityId,
      hotkey
    }
  }
`;
