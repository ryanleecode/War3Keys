import { GridListTileBar, makeStyles } from '@material-ui/core';
import * as React from 'react';
import AbilitiesGridList, {
  WarcraftAbility,
  AbilityOverrides,
} from './AbilitiesGridList';
import ImageIcon from './ImageIcon';

const useStyles = makeStyles(() => ({
  titleContainer: {
    position: 'relative',
  },
  titleBar: {
    position: 'absolute',
    left: '0%',
    top: 'calc(100%)',
    transform: 'translate(-0%, calc(-100%))',
    width: '100%',
    transformOrigin: 'bottom left',
  },
}));

export interface WarcraftUnit {
  name: string;
  image: string;
  abilities: WarcraftAbility[];
  unabilities: WarcraftAbility[];
}

interface Props {
  warcraftUnit: WarcraftUnit;
  overrides?: AbilityOverrides;
  onOverrideHotkey: (abilityId: string, hotkey: string) => void;
  onOverrideUnhotkey: (abilityId: string, unhotkey: string) => void;
}

const WarcraftUnitGridListTile = ({
  warcraftUnit: { name, image, abilities, unabilities },
  overrides,
  onOverrideHotkey,
  onOverrideUnhotkey,
}: Props) => {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.titleContainer}>
        <ImageIcon src={image} />
        <GridListTileBar className={classes.titleBar} title={name} />
      </div>

      <AbilitiesGridList
        abilities={abilities}
        unabilities={unabilities}
        overrides={overrides}
        onOverrideHotkey={onOverrideHotkey}
        onOverrideUnhotkey={onOverrideUnhotkey}
      />
    </div>
  );
};

export default WarcraftUnitGridListTile;
export { AbilityOverrides };
