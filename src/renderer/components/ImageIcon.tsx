import * as React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  container: {
    backgroundColor: 'rgb(255, 255, 255)',
    paddingTop: 'calc(100%)',
    position: 'relative',
  },
  img: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: '0px',
    left: '0px',
  },
}));

const ImageIcon = (
  props: React.DetailedHTMLProps<
    React.ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  >,
) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <img className={classes.img} {...props} />
    </div>
  );
};

export default ImageIcon;
