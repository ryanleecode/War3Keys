import {
  CircularProgress, createStyles, withStyles, WithStyles,
} from '@material-ui/core';
import { defaultTo, isEmpty, isUndefined } from 'lodash';
import * as React from 'react';
import { Query } from 'react-apollo';
import {
  getHotkeyByAbilityId,
  QuerySchema,
  Hotkey,
} from '@renderer/api';

import { SingleCharTextField } from '@renderer/components/widgets';
import {
  default as HotkeyMutationProvider,
  HotkeyMutationConsumer,
} from './HotKeyMutationProvider';

const styles = createStyles({
  input: {
    maxLength: '1',
    width: '64px',
    padding: 0,
    textAlign: 'center',
  },
});

interface Props extends WithStyles<typeof styles> {
  abilityId: string;
  defaultHotkey: string;
}

class AbilityHotkeyTextField extends React.Component<Props> {
  public render() {
    const { classes } = this.props;
    const { abilityId, defaultHotkey } = this.props;

    return (
      <Query query={getHotkeyByAbilityId} variables={{ abilityId }}>
        {({ loading, error, data, refetch }) => {
          if (loading) {
            return (
              <CircularProgress size={20} thickness={1.8} />
            );
          }
          if (error) { return `Error! ${error.message}`; }

          const queryParams = {
            query: getHotkeyByAbilityId,
            variables: { abilityId },
          };

          return (
            <HotkeyMutationProvider queryParams={queryParams}>
              <HotkeyMutationConsumer>
                {(mutations) => {
                  const { createHotkey, updateHotkey, deleteHotkey } = mutations;
                  const { id, hotkey } = this.queryHotkey(data);
                  return (
                    <SingleCharTextField
                      maxLength={1}
                      placeholder={defaultHotkey}
                      value={hotkey}
                      onChange={(e) => {
                        const { value: input } = e.target;
                        const doesHotkeyExistInDB = !isUndefined(id);
                        if (isEmpty(input) && doesHotkeyExistInDB) {
                          deleteHotkey({ variables: { id } });
                        } else if (!isEmpty(input) && doesHotkeyExistInDB) {
                          updateHotkey({
                            variables: { id, hotkey: input },
                          });
                        } else if (!isEmpty(input)) {
                          createHotkey({
                            variables: { abilityId, hotkey: input },
                          });
                        }
                      }}
                      InputProps={{
                        classes: {
                          input: classes.input,
                        },
                      }}
                    />
                  );
                }}
              </HotkeyMutationConsumer>
            </HotkeyMutationProvider>
          );
        }}
      </Query>
    );
  }

  private queryHotkey(schemaQuery: QuerySchema): Partial<Hotkey> {
    const { items } = schemaQuery.getHotkeyByAbilityId!;
    const { abilityId } = this.props;
    return defaultTo(items![0], { abilityId, hotkey: '' });
  }
}

export default withStyles(styles)(AbilityHotkeyTextField);
