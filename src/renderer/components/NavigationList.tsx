import * as React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { List, ListItem, ListItemText } from '@material-ui/core';
import { actions } from '@renderer/store';
import {
  humanUnits,
  miscellaneous,
  nightElfUnits,
  undeadUnits,
  orcUnits,
  neutralUnits,
} from 'warcraft3-unit-data';

import {
  humanSeal,
  undeadSeal,
  orcSeal,
  nightElfSeal,
  neutralSeal,
  miscSeal,
} from '@renderer/resources';

function mapDispatchToProps(dispatch) {
  const {
    unitActions: { setUnits },
  } = actions;

  return {
    actions: {
      setUnits: bindActionCreators(setUnits, dispatch),
    },
  };
}

function mapStateToProps(state, props) {
  return {
    ...props,
  };
}

interface Props extends ReturnType<typeof mapDispatchToProps> {}

const navigationData = [
  { data: humanUnits, name: 'Human', seal: humanSeal },
  { data: orcUnits, name: 'Orc', seal: orcSeal },
  { data: undeadUnits, name: 'Undead', seal: undeadSeal },
  { data: nightElfUnits, name: 'Night Elf', seal: nightElfSeal },
  { data: neutralUnits, name: 'Neutral', seal: neutralSeal },
  { data: miscellaneous, name: 'Misc', seal: miscSeal },
];

class NavigationList extends React.Component<Props> {
  public componentDidMount() {
    const {
      actions: { setUnits },
    } = this.props;
    setUnits(navigationData[0].data);
  }

  public render() {
    const {
      actions: { setUnits },
    } = this.props;
    return (
      <List component="nav">
        {navigationData.map((navData) => {
          const { data, name, seal } = navData;
          return (
            <ListItem button={true} key={name} onClick={() => setUnits(data)}>
              <img src={seal} style={{ width: '4em', height: '4em' }} />
              <ListItemText primary={name} primaryTypographyProps={{ variant: 'subheading' }} />
            </ListItem>
          );
        })}
      </List>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NavigationList);
