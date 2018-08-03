import {
  Grid,
  GridListTileBar, IconButton, Popover, createStyles, withStyles, WithStyles,
} from '@material-ui/core';
import { default as InfoIcon } from '@material-ui/icons/Info';
import { default as Image } from 'material-ui-image';
import * as React from 'react';
import WarcraftAbilityBox from './WarcraftAbilityBox';
import { WarcraftUnit } from 'warcraft3-unit-data';

const styles = createStyles({
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
});

interface Props extends WithStyles<typeof styles> {
  warcraftUnit: WarcraftUnit;
}

interface State {
  anchorElement: HTMLElement | undefined;
}

class WarcraftUnitGridListTile extends React.Component<Props, State> {
  public state = {
    anchorElement: undefined,
  };

  public render() {
    const { classes, warcraftUnit: { title, img, spells } } = this.props;
    const { anchorElement } = this.state;
    return (
      <div>
        <Image
          src={img}
        />
        <GridListTileBar
          title={title}

          actionIcon={
            <IconButton onClick={this.handleClick}>
              <InfoIcon className={classes.icon} />
            </IconButton>}
        />
        <Popover
          elevation={8}
          open={Boolean(anchorElement)}
          onClose={this.handleClose}
          anchorEl={anchorElement}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
        >
          <div style={{ padding: 8 }}>
            <Grid container={true} spacing={8} >
              {spells.map((ability) => {
                const { title: abilityTitle } = ability;

                return (
                  <Grid item={true} key={abilityTitle}>
                    <WarcraftAbilityBox
                      ability={ability}
                    />
                  </Grid>
                );
              })}
            </Grid>
          </div>
        </Popover>
      </div>
    );
  }

  private handleClick = (event) => {
    this.setState({
      anchorElement: event.currentTarget,
    });
  }

  private handleClose = () => {
    this.setState({
      anchorElement: undefined,
    });
  }
}

export default withStyles(styles)(WarcraftUnitGridListTile);
