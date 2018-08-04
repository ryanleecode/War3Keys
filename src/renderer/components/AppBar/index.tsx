import * as React from 'react';
import War3KeysAppBar from './War3KeysAppBar';
import { ExportHotkeysProvider } from './ExportHotkeys';
import {
  createStyles, withStyles, WithStyles,
} from '@material-ui/core';

const styles = theme => createStyles({
  root: {
    display: 'flex',
    flexGrow: 1,
  },
});

interface Props extends WithStyles<typeof styles> {
}

class DecoratedAppBar extends React.Component<Props> {
  public render() {
    return (
      <ExportHotkeysProvider>
        <War3KeysAppBar />
      </ExportHotkeysProvider>
    );
  }
}

export default withStyles(styles)(DecoratedAppBar);
