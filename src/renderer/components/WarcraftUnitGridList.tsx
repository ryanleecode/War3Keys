import {
  createStyles, GridList, GridListTile, withStyles, WithStyles,
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
  tile: {
    minWidth: '166.66px',
    minHeight: '166.66px',
    maxHeight: '200px',
    maxWidth: '200px',
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
          {units.map((unit) => {
            const { title } = unit;
            return (
              <GridListTile key={title} className={classes.tile}>
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
