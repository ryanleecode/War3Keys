import {
  CircularProgress, createStyles, withStyles, WithStyles,
} from '@material-ui/core';
import { defaultTo, isEmpty, isUndefined } from 'lodash';
import * as React from 'react';
import { Mutation, Query } from 'react-apollo';
import {
  createHotkeyMutation, deleteHotkeyMutation, getHotkeyByAbilityId,
  updateHotkeyMutation,
} from '../../api';
import { Hotkey, Mutation as SchemaMutation, Query as SchemaQuery } from '../../api/';
import { SingleCharTextField } from '../widgets';

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
              <CircularProgress />
            );
          }
          if (error) { return `Error! ${error.message}`; }

          const queryParams = {
            query: getHotkeyByAbilityId,
            variables: { abilityId },
          };

          return (
            <Mutation
              mutation={deleteHotkeyMutation}
              ignoreResults={true}
              update={(cache) => {
                const cacheResult = cache.readQuery(queryParams) as SchemaQuery;
                const { getHotkeyByAbilityId: hotkeyConnection } = cacheResult;
                hotkeyConnection!.items = [];
                hotkeyConnection!.nextToken = null;
                cache.writeQuery({ ...queryParams, data: cacheResult });
              }}
            >
              {deleteHotkey =>
                <Mutation
                  mutation={createHotkeyMutation}
                  update={(cache, result) => {
                    const cacheResult = cache.readQuery(queryParams) as SchemaQuery;
                    const { getHotkeyByAbilityId: hotkeyConnection } = cacheResult;
                    const { createHotkey: inputHotkeyPayload }
                      = ((result as any).data as SchemaMutation);
                    hotkeyConnection!.items = [inputHotkeyPayload!];
                    cache.writeQuery({ ...queryParams, data: cacheResult });
                  }}
                >
                  {createHotkey =>
                    <Mutation
                      mutation={updateHotkeyMutation}
                      update={(cache, result) => {
                        const cacheResult = cache.readQuery(queryParams) as SchemaQuery;
                        const { getHotkeyByAbilityId: hotkeyConnection } = cacheResult;
                        const { updateHotkey: inputHotkeyPayload }
                          = ((result as any).data as SchemaMutation);
                        hotkeyConnection!.items = [inputHotkeyPayload!];
                        cache.writeQuery({ ...queryParams, data: cacheResult });
                      }}
                    >
                      {(updateHotkey) => {
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
                              refetch();
                            }}
                            InputProps={{
                              classes: {
                                input: classes.input,
                              },
                            }}
                          />
                        );
                      }}
                    </Mutation>
                  }
                </Mutation>
              }
            </Mutation>
          );
        }}
      </Query>
    );
  }

  private queryHotkey(schemaQuery: SchemaQuery): Partial<Hotkey> {
    const { items } = schemaQuery.getHotkeyByAbilityId!;
    const { abilityId } = this.props;
    return defaultTo(items![0], { abilityId, hotkey: '' });
  }
}

export default withStyles(styles)(AbilityHotkeyTextField);
