import { createStyles, makeStyles, Theme, Typography } from '@material-ui/core'
import React from 'react';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    
    root: {
      display: "flex",
      alignItems: "center",
      textAlign: "center",
      color: "#37474f",
      paddingTop: theme.spacing(2)
      
    },
    text: {
        color: "#a6a6a6",
        marginLeft: theme.spacing(3),
        
    },

    
  }),
);

export default function MemberLanguages() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Typography variant="subtitle1">
                LANGUAGES:
            </Typography>
            <Typography variant="subtitle1"  className={classes.text}>
                ENGLISH, RUSSIAN
            </Typography>
        </div>
    )
}
