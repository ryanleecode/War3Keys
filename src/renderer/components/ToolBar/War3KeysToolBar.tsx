import {
  Button, createStyles, Grid, IconButton, Toolbar, Typography, withStyles, WithStyles,
} from '@material-ui/core';
import { SaveAltOutlined } from '@material-ui/icons';
import { default as MenuIcon } from '@material-ui/icons/Menu';
import * as React from 'react';
import { ExportHotkeysConsumer } from './ExportHotkeys';

const styles = ({ spacing }) => createStyles({
  flex: {
    padding: spacing.unit * 2,
    flexGrow: 1,
  },
  button: {
    margin: spacing.unit,
  },
});

interface Props extends WithStyles<typeof styles> {
  iconButton?: JSX.Element;
}

class War3KeysToolBar extends React.Component<Props> {
  public render() {
    const { classes, iconButton } = this.props;

    return (
      <Toolbar disableGutters={true}>
        {iconButton ||
          <IconButton color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>}
        <Typography className={classes.flex} variant="title" color="inherit">
          War3Keys
        </Typography>
        <ExportHotkeysConsumer>
          {exportHotkeys =>
            <Button
              variant="contained"
              color="default"
              className={classes.button}
              onClick={async () => exportHotkeys()}
            >
              <Grid container={true} spacing={8} alignContent="center" alignItems="center">
                <Grid item={true}>
                  <Typography>
                    Export
                      </Typography>
                </Grid>
                <Grid item={true}>
                  <SaveAltOutlined />
                </Grid>
              </Grid>
            </Button>}

        </ExportHotkeysConsumer>
      </Toolbar>
    );
  }
}

export default withStyles(styles)(War3KeysToolBar);
