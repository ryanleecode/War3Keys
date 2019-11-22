import * as React from 'react';
import {
  List,
  ListItem,
  ListItemText,
  Theme,
  makeStyles,
} from '@material-ui/core';
import changecase from 'change-case';

import { FactionDetails, Faction } from '@renderer/generated/generated';

const useStyles = makeStyles((theme: Theme) => ({
  img: {
    width: '5rem',
    height: '5rem',
  },
  listItemText: {
    marginLeft: '1rem',
    textAlign: 'center',
  },
}));

export interface NavigationListProps {
  factions: FactionDetails[];
  onSelectFaction: (faction: Faction) => void;
}

const NavigationList = ({ factions, onSelectFaction }: NavigationListProps) => {
  const classes = useStyles();

  return (
    <List component="nav">
      {factions.map((faction) => {
        const { name, image } = faction;
        return (
          <ListItem
            button={true}
            key={name}
            onClick={() => onSelectFaction(faction.name)}
          >
            <img src={image} className={classes.img} />
            <ListItemText
              className={classes.listItemText}
              primary={changecase.sentenceCase(name)}
              primaryTypographyProps={{ variant: 'subtitle1' }}
            />
          </ListItem>
        );
      })}
    </List>
  );
};

export default NavigationList;
