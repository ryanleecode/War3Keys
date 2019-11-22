import { GridList, GridListTile, makeStyles } from '@material-ui/core';
import withWidth, { isWidthUp, WithWidth } from '@material-ui/core/withWidth';
import * as React from 'react';
import WarcraftUnitGridListTile, {
  WarcraftUnit,
  AbilityOverrides,
} from './WarcraftUnitGridListTile';
import { Breakpoint } from '@material-ui/core/styles/createBreakpoints';
import Fade from 'react-reveal/Fade';

const useStyles = makeStyles(() => ({
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
  },
}));

interface WarcraftUnitGridListProps extends WithWidth {
  units: WarcraftUnit[];
  overrides?: AbilityOverrides;
  onOverrideHotkey: (abilityId: string, hotkey: string) => void;
  onOverrideUnhotkey: (abilityId: string, unhotkey: string) => void;
}

function mapWidthToCols(width: Breakpoint): number {
  if (isWidthUp('xl', width)) return 8;
  if (isWidthUp('lg', width)) return 8;
  if (isWidthUp('md', width)) return 7;
  if (isWidthUp('sm', width)) return 6;
  if (isWidthUp('xs', width)) return 5;

  return -1;
}

const WarcraftUnitGridList = ({
  width,
  units,
  overrides,
  onOverrideHotkey,
  onOverrideUnhotkey,
}: WarcraftUnitGridListProps) => {
  const classes = useStyles();

  const cols = mapWidthToCols(width);

  return (
    <Fade>
      <div className={classes.root}>
        <GridList cols={cols} cellHeight="auto" className={classes.flex}>
          {units.map((unit) => {
            const { name } = unit;
            return (
              <GridListTile key={name} className={classes.tile}>
                <WarcraftUnitGridListTile
                  warcraftUnit={unit}
                  overrides={overrides}
                  onOverrideHotkey={onOverrideHotkey}
                  onOverrideUnhotkey={onOverrideUnhotkey}
                />
              </GridListTile>
            );
          })}
        </GridList>
      </div>
    </Fade>
  );
};

const withWidthOptions = {
  resizeInterval: 16,
};
export default withWidth(withWidthOptions)(WarcraftUnitGridList);
