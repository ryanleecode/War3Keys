import * as React from 'react';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from './containers/Toolbar';
import NavigationList from './containers/NavigationList';
import List from '@material-ui/core/List';
import IconButton from '@material-ui/core/IconButton';
import Hidden from '@material-ui/core/Hidden';
import Divider from '@material-ui/core/Divider';
import { default as MenuIcon } from '@material-ui/icons/Menu';
import { Theme, makeStyles } from '@material-ui/core';
import Home from '@renderer/pages/Home';

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    zIndex: 1,
    overflow: 'scroll',
    position: 'relative',
    display: 'flex',
    width: '100%',
    height: '100vh',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  navIconHide: {
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    backgroundColor: theme.palette.secondary.main,
    width: drawerWidth,
    [theme.breakpoints.up('md')]: {
      position: 'relative',
    },
  },
  drawerRoot: {
    height: '100%',
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
  logo: {
    maxHeight: '4.625rem',
  },
}));

const Shell = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);
  const classes = useStyles();

  const drawer = (
    <React.Fragment>
      <div className={classes.toolbar} />
      <Divider />
      <List>
        <NavigationList />
      </List>
      <Divider />
    </React.Fragment>
  );

  const iconButton = (
    <IconButton
      color="inherit"
      aria-label="Open drawer"
      onClick={handleDrawerToggle}
      className={classes.navIconHide}
    >
      <MenuIcon />
    </IconButton>
  );

  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar}>
        <Toolbar
          title={'War3Keys'}
          logo={
            <img
              className={classes.logo}
              src={'https://file.globalupload.io/uNWcthDhQu.png'}
            />
          }
          iconButton={iconButton}
        />
      </AppBar>
      <Hidden mdUp={true}>
        <Drawer
          variant="temporary"
          anchor={'left'}
          open={mobileOpen}
          onClose={handleDrawerToggle}
          classes={{
            paper: classes.drawerPaper,
            root: classes.drawerRoot,
          }}
          ModalProps={{
            keepMounted: true,
          }}
        >
          {drawer}
        </Drawer>
      </Hidden>
      <Hidden smDown={true} implementation="css">
        <Drawer
          variant="permanent"
          open={true}
          classes={{
            paper: classes.drawerPaper,
            root: classes.drawerRoot,
          }}
        >
          {drawer}
        </Drawer>
      </Hidden>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Home />
      </main>
    </div>
  );
};

export default Shell;
