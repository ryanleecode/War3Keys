import * as React from 'react';
import { default as ToolbarComponent } from '@renderer/components/Toolbar';
import { Dispatch, bindActionCreators } from 'redux';
import * as store from '@renderer/store';
import { RootState } from '@renderer/store/RootState';
import { connect } from 'react-redux';
import { overridesSelector } from '@renderer/store';
import { remote } from 'electron';
import path from 'path';
import getPath from 'platform-folders';

const mapDispatchToProps = (dispatch: Dispatch) => {
  const {
    actions: {
      overridesActions: { importHotkeys, exportHotkeys },
    },
  } = store;

  return {
    actions: {
      importHotkeys: bindActionCreators(importHotkeys, dispatch),
      exportHotKeys: bindActionCreators(exportHotkeys, dispatch),
    },
  };
};

const mapStateToProps = (rootState: RootState) => ({
  overrides: overridesSelector(rootState),
});

export interface ToolbarProps {
  iconButton?: JSX.Element;
  logo?: JSX.Element;
  title?: string;
}

const Toolbar = ({
  actions: { importHotkeys, exportHotKeys },
  ...props
}: ToolbarProps &
  ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>) => {
  const defaultPath = path.join(
    getPath('documents'),
    'Warcraft III',
    'CustomKeyBindings',
  );
  const onExport = () => {
    remote.dialog.showSaveDialog(
      {
        defaultPath: path.join(defaultPath, 'CustomKeys.txt'),
        filters: [{ name: 'Text Document', extensions: ['txt'] }],
      },
      (filePath) => {
        if (!filePath) {
          return;
        }
        exportHotKeys({ filePath });
      },
    );
  };

  const onImport = () => {
    remote.dialog.showOpenDialog(
      {
        defaultPath,
        filters: [{ name: 'Text Document', extensions: ['txt'] }],
      },
      async (filePaths) => {
        if (!filePaths || filePaths.length === 0) {
          return;
        }
        importHotkeys({ filePath: filePaths[0] });
      },
    );
  };

  return (
    <ToolbarComponent onImport={onImport} onExport={onExport} {...props} />
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Toolbar);
