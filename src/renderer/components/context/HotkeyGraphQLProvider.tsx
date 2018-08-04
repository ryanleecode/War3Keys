import * as React from 'react';
import {
  createHotkeyMutation as createHotkey,
  deleteHotkeyMutation as deleteHotkey,
  updateHotkeyMutation as updateHotkey,
  getHotkeyByAbilityId,
} from '@renderer/api';

const schema = {
  createHotkey,
  deleteHotkey,
  updateHotkey,
  getHotkeyByAbilityId,
};

// tslint:disable-next-line:variable-name
const { Provider, Consumer: HotkeyConsumer } = React.createContext(schema);

export default class HotkeyGraphQLProvider extends React.Component {
  public render() {
    const { children } = this.props;

    return (
      <Provider value={schema}>
        {children}
      </Provider>
    );
  }
}
export { HotkeyConsumer };
