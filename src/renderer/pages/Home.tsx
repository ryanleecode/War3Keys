import * as React from 'react';
import WarcraftUnitGridList from '../components/WarcraftUnitGridList';
import { humanUnits } from 'warcraft3-unit-data';
import { withAuthenticator } from 'aws-amplify-react';

class Home extends React.Component {
  public render() {
    return (
      <div>
        <WarcraftUnitGridList units={humanUnits} />
      </div>
    );
  }
}

export default withAuthenticator(Home);
