import * as React from 'react';
import War3KeysToolBar from './War3KeysToolBar';
import { ExportHotkeysProvider } from './ExportHotkeys';
import {
  createStyles, withStyles, WithStyles, Theme,
} from '@material-ui/core';

const styles = (theme: Theme) => createStyles({
  root: {
    display: 'flex',
    flexGrow: 1,
  },
});

interface Props extends WithStyles<typeof styles> {
  iconButton?: JSX.Element;
}

class DecoratedToolBar extends React.Component<Props> {
  public render() {
    const { iconButton } = this.props;

    return (
      <ExportHotkeysProvider>
        <War3KeysToolBar iconButton={iconButton} />
      </ExportHotkeysProvider>
    );
  }
}

export default withStyles(styles)(DecoratedToolBar);
