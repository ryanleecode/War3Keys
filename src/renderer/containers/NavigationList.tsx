import * as React from 'react';
import { FactionsComponent, Faction } from '@renderer/generated/generated';
import { default as NavigationListComponent } from '../components/NavigationList';
import { Dispatch, bindActionCreators } from 'redux';
import * as store from '@renderer/store';
import { connect } from 'react-redux';

const mapDispatchToProps = (dispatch: Dispatch) => {
  const {
    actions: {
      factionActions: { setFaction },
    },
  } = store;

  return {
    actions: {
      setFaction: bindActionCreators(setFaction, dispatch),
    },
  };
};

const mapStateToProps = () => ({});

const NavigationList = ({
  actions: { setFaction },
}: ReturnType<typeof mapDispatchToProps> &
  ReturnType<typeof mapStateToProps>) => {
  const onSelectFaction = (faction: Faction) => setFaction({ faction });

  return (
    <FactionsComponent>
      {({ loading, error, data }) => {
        // TODO: Handle Loading and Error
        return data ? (
          <NavigationListComponent
            factions={data.Factions}
            onSelectFaction={onSelectFaction}
          />
        ) : null;
      }}
    </FactionsComponent>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(NavigationList);
