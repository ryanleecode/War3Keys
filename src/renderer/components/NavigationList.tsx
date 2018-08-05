import * as React from 'react';
import { List, ListItem, ListItemText } from '@material-ui/core';

export default class NavigationList extends React.Component {
  public render() {
    const routes = ['Human', 'Orc', 'Undead', 'Night Elf', 'Neutral', 'Misc'];
    return (
      <List component="nav">
        {routes.map((route) => {
          return (
            <ListItem button={true} key={route}>
              <ListItemText primary={route} />
            </ListItem>
          );
        })}
      </List>
    );
  }
}
