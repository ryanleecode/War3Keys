import {
  IconButton,
  Toolbar as ToolbarComponent,
  Typography,
  Theme,
  makeStyles,
  Button,
} from '@material-ui/core';
import { default as MenuIcon } from '@material-ui/icons/Menu';
import * as React from 'react';

const useStyles = makeStyles(({ spacing, breakpoints }: Theme) => ({
  flex: {
    padding: spacing(2),
    flex: 5,
    [breakpoints.down('lg')]: {
      flex: 8,
    },
    [breakpoints.down('md')]: {
      flex: 7,
    },
    [breakpoints.down('sm')]: {
      flex: 5,
    },
    [breakpoints.down('xs')]: {
      flex: 3,
    },
  },
  button: {
    color: '#FCD211',
    backgroundColor: '#0E306C',
    paddingTop: '0.75rem',
    paddingBottom: '0.75rem',
    paddingLeft: '1.25rem',
    paddingRight: '1.25rem',
    borderRadius: '0.25rem',
    border: '1px solid #679BF2',
    boxShadow: 'inset 0 0 4px rgba(117, 167, 255, 1.0)',
    fontWeight: 'bold',
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    lineHeight: 'none',
    letterSpacing: '0',
    [breakpoints.down('lg')]: {
      marginRight: '1rem',
    },
  },
  buttons: {
    display: 'flex',
    flex: 1,
    [breakpoints.down('lg')]: {
      flex: 2,
    },
    [breakpoints.down('md')]: {
      flex: 3,
    },
    [breakpoints.down('sm')]: {
      flex: 4,
    },
    [breakpoints.down('xs')]: {
      flex: 5,
    },
    justifyContent: 'space-evenly',
  },
}));

export interface ToolbarProps {
  iconButton?: JSX.Element;
  logo?: JSX.Element;
  title?: string;
  onExport: () => void;
  onImport: () => void;
}

const Toolbar = ({
  iconButton,
  logo,
  title,
  onExport,
  onImport,
}: ToolbarProps) => {
  const classes = useStyles();

  return (
    <ToolbarComponent disableGutters={true}>
      {iconButton || (
        <IconButton color="inherit" aria-label="Menu">
          <MenuIcon />
        </IconButton>
      )}
      {logo && logo}
      {title && (
        <Typography className={classes.flex} variant="h6" color="inherit">
          {title}
        </Typography>
      )}
      <div className={classes.buttons}>
        <Button className={classes.button} onClick={onImport}>
          IMPORT
        </Button>
        <Button className={classes.button} onClick={onExport}>
          EXPORT
        </Button>
      </div>
    </ToolbarComponent>
  );
};

export default Toolbar;
