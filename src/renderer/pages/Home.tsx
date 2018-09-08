import * as React from 'react';
import {
  connect,
} from 'react-redux';
import WarcraftUnitGridList from '../components/WarcraftUnitGridList';
import { WarcraftUnit } from 'warcraft3-unit-data';
import { withAuthenticator } from 'aws-amplify-react';
import { RootState, unitsSelector } from '@renderer/store';

function mapStateToProps(state: RootState, props) {
  return {
    units: unitsSelector(state),
    ...props,
  };
}

interface Props {
  units: WarcraftUnit[];
}

class Home extends React.Component<Props> {
  public render() {
    const { units } = this.props;

    return (
      <WarcraftUnitGridList units={units} />
    );
  }
}

export default withAuthenticator(connect(mapStateToProps)(Home));
