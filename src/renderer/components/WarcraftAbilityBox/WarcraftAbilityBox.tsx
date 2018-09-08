import {
  createStyles, Grid, withStyles, WithStyles,
} from '@material-ui/core';
import * as React from 'react';
import { default as Img } from 'react-image';
import { WarcraftAbility } from 'warcraft3-unit-data';
import WarcraftAbilityHotkeyTextField from './WarcraftAbilityHotkeyTextField';

const styles = createStyles({
  root: {
    padding: 0,
  },
  grid: {
    flexGrow: 1,
  },
  hotkeyField: {
    textAlign: 'center',
    padding: 0,
  },
  subheader: {
    padding: 0,
    lineHeight: 'inherit',
  },
  input: {
    maxLength: '1',
    width: '64px',
    padding: 0,
    textAlign: 'center',
  },
});

interface Props extends WithStyles<typeof styles> {
  ability: WarcraftAbility;
}

class WarcraftAbilityBox extends React.Component<Props> {
  public render() {
    const { ability: { abilityId, defaultHotkey, img } } = this.props;

    return (
      <Grid container={true} direction="column">
        <Grid item={true}>
          <Img
            src={img}
          />
        </Grid>
        <Grid item={true}>
          <Grid container={true} alignItems="center" justify="center">
            <Grid item={true}>
              <WarcraftAbilityHotkeyTextField
                abilityId={abilityId}
                defaultHotkey={defaultHotkey}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }

}

export default withStyles(styles)(WarcraftAbilityBox);
