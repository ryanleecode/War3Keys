import {
  AppBar, Button, createStyles, Grid, IconButton, Toolbar, Typography, withStyles, WithStyles,
} from '@material-ui/core';
import { SaveAltOutlined } from '@material-ui/icons';
import { default as MenuIcon } from '@material-ui/icons/Menu';
import * as React from 'react';

const styles = theme => createStyles({
  root: {
    flewGrow: 1,
  },
  flex: {
    flex: 1,
  },
  button: {
    margin: theme.spacing.unit,
  },
});

interface Props extends WithStyles<typeof styles> {
}

class War3KeysAppBar extends React.Component<Props> {
  public render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar disableGutters={true}>
            <IconButton color="inherit" aria-label="Menu">
              <MenuIcon />
            </IconButton>
            <Typography className={classes.flex} variant="title" color="inherit">
              War3Keys
            </Typography>
            <Button
              variant="contained"
              color="default"
              className={classes.button}
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
            </Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withStyles(styles)(War3KeysAppBar);
