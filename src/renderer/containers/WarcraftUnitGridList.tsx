import * as React from 'react';
import { default as WarcraftUnitGridListComponent } from '../components/WarcraftUnitGridList';
import { UnitsComponent } from '@renderer/generated/generated';
import RootState from '@renderer/store/RootState';
import { Dispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as store from '@renderer/store';

const mapDispatchToProps = (dispatch: Dispatch) => {
  const {
    actions: {
      overridesActions: { overrideHotkey, overrideUnhotkey },
    },
  } = store;

  return {
    actions: {
      overrideHotkey: bindActionCreators(overrideHotkey, dispatch),
      overrideUnhotkey: bindActionCreators(overrideUnhotkey, dispatch),
    },
  };
};

const mapStateToProps = (rootState: RootState) => ({
  faction: store.factionSelector(rootState),
  overrides: store.overridesSelector(rootState),
});

const WarcraftUnitGridList = ({
  faction,
  overrides,
  actions: { overrideHotkey, overrideUnhotkey },
}: ReturnType<typeof mapDispatchToProps> &
  ReturnType<typeof mapStateToProps>) => {
  const onOverrideHotkey = (abilityId: string, hotkey: string) =>
    overrideHotkey({
      abilityId,
      hotkey,
    });

  const onOverrideUnhotkey = (abilityId: string, unhotkey: string) =>
    overrideUnhotkey({
      abilityId,
      unhotkey,
    });

  return (
    <UnitsComponent variables={{ faction }}>
      {({ loading, error, data }) => {
        if (!data) {
          return null;
        }

        return (
          <WarcraftUnitGridListComponent
            units={data.Units}
            overrides={overrides}
            onOverrideHotkey={onOverrideHotkey}
            onOverrideUnhotkey={onOverrideUnhotkey}
          />
        );
      }}
    </UnitsComponent>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(WarcraftUnitGridList);
