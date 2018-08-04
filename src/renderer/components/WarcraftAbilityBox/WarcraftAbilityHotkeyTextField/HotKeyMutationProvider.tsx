import * as React from 'react';
import {
  default as DeleteHotkeyMutation,
  DeleteHotkeyConsumer,
} from './DeleteHotkeyMutation';
import {
  default as CreateHotkeyMutation,
  CreateHotkeyConsumer,
} from './CreateHotkeyMutation';
import {
  default as UpdateHotkeyMutation,
  UpdateHotkeyConsumer,
} from './UpdateHotkeyMutation';
import { MutationOptions, OperationVariables } from 'react-apollo';
import QueryParamProps from './QueryParamProps';

const { Provider, Consumer } = React.createContext({
  createHotkey: (variables: MutationOptions<any, OperationVariables>) => { },
  updateHotkey: (variables: MutationOptions<any, OperationVariables>) => { },
  deleteHotkey: (variables: MutationOptions<any, OperationVariables>) => { },
});

export default class HotkeyMutationProvider extends React.Component<QueryParamProps> {
  public render() {
    const { children, queryParams } = this.props;

    return (
      <DeleteHotkeyMutation queryParams={queryParams}>
        <DeleteHotkeyConsumer>
          {deleteHotkey =>
            <CreateHotkeyMutation queryParams={queryParams}>
              <CreateHotkeyConsumer>
                {createHotkey =>
                  <UpdateHotkeyMutation queryParams={queryParams}>
                    <UpdateHotkeyConsumer>
                      {(updateHotkey) => {
                        return (
                          <Provider
                            value={{
                              createHotkey,
                              updateHotkey,
                              deleteHotkey,
                            }}
                          >
                            {children}
                          </Provider>
                        );
                      }}
                    </UpdateHotkeyConsumer>
                  </UpdateHotkeyMutation>
                }
              </CreateHotkeyConsumer>
            </CreateHotkeyMutation>
          }
        </DeleteHotkeyConsumer>
      </DeleteHotkeyMutation>
    );
  }
}

export { Consumer as HotkeyMutationConsumer };
