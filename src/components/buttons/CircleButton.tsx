import React from 'react';
import Button from '@material-ui/core/Button';
import { createStyles, makeStyles, Theme  } from '@material-ui/core/styles';


interface Props {
  title?: string,
  icon?: object | null,
  onClick: () => void
}

// We can inject some CSS into the DOM.
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
  root: {
    background: 'linear-gradient(3deg, #ffcc23 20%, #ffc920 95%)',
    borderRadius: 50,
    border: 2,
    borderColor: 'white',
    color:'#37474f',
    height: 60,
    width: 50,
    margin: '30px',
    padding: '0',
    boxShadow: '0 3px 5px 2px rgba(255, 135, 0, .3)',
  },
}));

export default function CircleButton(prop: Props) {
  const classes = useStyles();
  const value = prop.title;
  const icon = prop.icon;
  
  return (
    <Button className={classes.root} onClick={prop.onClick}>
      {icon} {value}
    </Button>
  );
}

