import React from 'react';
import { makeStyles, Theme, createStyles, Typography } from '@material-ui/core';
import PlaceIcon from '@material-ui/icons/Place';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    
    root: {
      display: "flex",
      color: "#a6a6a6",
      marginLeft: theme.spacing(2)
    },
    text: {
      color: "#37474f",
    }
    
  }),
);


export default function MemberLocation() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <PlaceIcon />
            <Typography variant="subtitle1">
                PRAGUE
            </Typography>
        </div>
    )
}
