import * as React from 'react';
import {
  GridList,
  GridListTile,
  Input,
  makeStyles,
  Theme,
} from '@material-ui/core';
import ImageIcon from './ImageIcon';

const useStyles = makeStyles((theme: Theme) => ({
  hotKeyRoot: {
    background: 'rgba(0, 0, 0, 0.5)',
    position: 'absolute',
    left: '50%',
    top: 'calc(50%)',
    height: '100%',
    transform: 'translate(-50%, calc(-50%))',
  },
  hotkeyInput: {
    color: theme.palette.text.secondary,
    textAlign: 'center',
  },
  overrideHotkeyInput: {
    color: '#19FFE4',
    textAlign: 'center',
  },
}));

export interface WarcraftAbility {
  name: string;
  image: string;
  id: string;
  hotkey: string;
}

export interface AbilityOverride {
  hotkey?: string;
  unhotKey?: string;
}

export type AbilityOverrides = Record<string, AbilityOverride>;

export interface AbilitiesGridListProps {
  abilities: WarcraftAbility[];
  unabilities?: WarcraftAbility[];
  overrides?: AbilityOverrides;
  onOverrideHotkey: (abilityId: string, hotkey: string) => void;
  onOverrideUnhotkey: (abilityId: string, unhotkey: string) => void;
}

const AbilitiesGridList = ({
  abilities,
  onOverrideHotkey,
  onOverrideUnhotkey,
  overrides,
  ...props
}: AbilitiesGridListProps) => {
  const classes = useStyles();
  const unabilities = props.unabilities || [];

  return (
    <GridList cols={4} cellHeight="auto">
      {abilities.map((ability) => {
        const override = overrides && overrides[ability.id];
        const isOverriden =
          override !== undefined && override.hotkey !== undefined;

        return (
          <GridListTile key={`1${ability.id}`}>
            <ImageIcon src={ability.image} />
            <Input
              key={ability.id}
              classes={{
                root: classes.hotKeyRoot,
                input: isOverriden
                  ? classes.overrideHotkeyInput
                  : classes.hotkeyInput,
              }}
              value={isOverriden ? override!.hotkey : ability.hotkey}
              fullWidth={true}
              onChange={(e) => {
                onOverrideHotkey(ability.id, e.currentTarget.value);
              }}
            />
          </GridListTile>
        );
      })}
      {unabilities.map((ability) => {
        const override = overrides && overrides[ability.id];
        const isOverriden =
          override !== undefined && override.unhotKey !== undefined;

        return (
          <GridListTile key={`0${ability.id}`}>
            <ImageIcon src={ability.image} />
            <Input
              key={ability.id}
              classes={{
                root: classes.hotKeyRoot,
                input: isOverriden
                  ? classes.overrideHotkeyInput
                  : classes.hotkeyInput,
              }}
              value={isOverriden ? override!.unhotKey : ability.hotkey}
              fullWidth={true}
              onChange={(e) => {
                onOverrideUnhotkey(ability.id, e.currentTarget.value);
              }}
            />
          </GridListTile>
        );
      })}
    </GridList>
  );
};

export default AbilitiesGridList;
