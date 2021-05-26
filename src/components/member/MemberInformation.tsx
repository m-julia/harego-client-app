import { makeStyles, Theme, createStyles, Grid, Typography } from '@material-ui/core';
import React from 'react'
import MemberAbout from './MemberAbout';
import MemberButtonsReactionBar from './MemberButtonsReactionBar';
import MemberLanguages from './MemberLanguages';
import MemberLocation from './MemberLocation';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      margin: theme.spacing(5, "auto", 2),
    },
  }),
);

export default function MemberInformation() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container>
                <Grid item >
                    <Typography variant="h5">
                        Romanov Roman
                    </Typography>
                </Grid>
                    <Grid item >
                        <MemberLocation />
                    </Grid>
            </Grid>
            
            <Grid item xs={12} sm={12}>
              <MemberLanguages />
            </Grid>
            <Grid item xs={12} sm={12}>
              <MemberButtonsReactionBar />
            </Grid>
            <Grid item xs={12} sm={12}>
              <MemberAbout />
            </Grid>
        </div>
    )
}
