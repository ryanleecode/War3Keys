import * as React from 'react';
import { HotkeyConsumer } from '@renderer/components/context';
import { Mutation, MutationOptions, OperationVariables } from 'react-apollo';
import { QuerySchema } from '@renderer/api';
import QueryParamProps from './QueryParamProps';

const { Provider, Consumer } = React.createContext(
  (variables: MutationOptions<any, OperationVariables>) => { });

export default class DeleteHotkeyMutation extends React.Component<QueryParamProps> {
  public render() {
    const { queryParams, children } = this.props;
    return (
      <HotkeyConsumer>
        {(schema) => {
          const { deleteHotkey: deleteHotkeyMutation } = schema;
          return (
            <Mutation
              mutation={deleteHotkeyMutation}
              ignoreResults={true}
              update={(cache) => {
                const cacheResult = cache.readQuery(queryParams);
                const {
                  getHotkeyByAbilityId: hotkeyConnection,
                } = cacheResult as QuerySchema;
                hotkeyConnection!.items = [];
                hotkeyConnection!.nextToken = null;
                cache.writeQuery({ ...queryParams, data: cacheResult });
              }}
            >
              {(deleteHotkey) => {
                return (
                  <Provider value={deleteHotkey}>
                    {children}
                  </Provider>
                );
              }}
            </Mutation>
          );
        }}
      </HotkeyConsumer>
    );
  }
}

export { Consumer as DeleteHotkeyConsumer };
