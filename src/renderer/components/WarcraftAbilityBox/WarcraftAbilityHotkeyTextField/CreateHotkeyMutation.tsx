import * as React from 'react';
import { HotkeyConsumer } from '@renderer/components/context';
import { Mutation, MutationOptions, OperationVariables } from 'react-apollo';
import { QuerySchema, MutationSchema } from '@renderer/api';
import QueryParamProps from './QueryParamProps';

const { Provider, Consumer } = React.createContext(
  (variables: MutationOptions<any, OperationVariables>) => { });

export default class CreateHotkeyMutation extends React.Component<QueryParamProps> {
  public render() {
    const { queryParams, children } = this.props;
    return (
      <HotkeyConsumer>
        {(schema) => {
          const { updateHotkey: createHotkeyMutation } = schema;
          return (
            <Mutation
              mutation={createHotkeyMutation}
              update={(cache, result) => {
                const cacheResult = cache.readQuery(queryParams) as QuerySchema;
                const { getHotkeyByAbilityId: hotkeyConnection } = cacheResult;
                const { createHotkey: inputHotkeyPayload }
                  = ((result as any).data as MutationSchema);
                hotkeyConnection!.items = [inputHotkeyPayload!];
                cache.writeQuery({ ...queryParams, data: cacheResult });
              }}
            >
              {(createHotkey) => {
                return (
                  <Provider value={createHotkey}>
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

export { Consumer as CreateHotkeyConsumer };
