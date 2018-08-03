import {
  createStyles, GridList, GridListTile, ListSubheader, Typography, withStyles, WithStyles,
} from '@material-ui/core';
import withWidth, { isWidthUp, WithWidthProps } from '@material-ui/core/withWidth';
import * as React from 'react';
import WarcraftUnitGridListTile from './WarcraftUnitGridListTile';
import { WarcraftUnit } from 'warcraft3-unit-data';

const styles = createStyles({
  root: {
    flexGrow: 1,
  },
  flex: {
    display: 'flex',
    flexGrow: 1,
  },
});

interface Props extends WithStyles<typeof styles>, WithWidthProps {
  units: WarcraftUnit[];
}

interface State {
  anchorElement: HTMLElement | undefined;
}
class WarcraftUnitGridList extends React.Component<Props, State> {
  public render() {
    const { width, classes, units } = this.props;

    const cols = mapWidthToCols(width);

    return (
      <div className={classes.root}>
        <GridList cols={cols} cellHeight="auto" className={classes.flex}>
          <GridListTile key="Subheader" cols={cols} style={{ height: 'auto' }}>
            <ListSubheader component="div">
              <Typography variant="title" color="inherit">
                Human
              </Typography>
            </ListSubheader>
          </GridListTile>
          {units.map((unit) => {
            const { title } = unit;
            return (
              <GridListTile key={title}>
                <WarcraftUnitGridListTile warcraftUnit={unit} />
              </GridListTile>
            );
          })}
        </GridList>
      </div>
    );
  }
}

function mapWidthToCols(width): number {
  if (isWidthUp('xl', width)) return 7;
  if (isWidthUp('lg', width)) return 6;
  if (isWidthUp('md', width)) return 5;
  if (isWidthUp('sm', width)) return 4;
  if (isWidthUp('xs', width)) return 3;

  return -1;
}

const withWidthOptions = {
  resizeInterval: 16,
};
export default withStyles(styles)(withWidth(withWidthOptions)(WarcraftUnitGridList));
