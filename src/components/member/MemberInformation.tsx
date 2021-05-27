import { makeStyles, Theme, createStyles, Grid, Typography, Container } from '@material-ui/core';
import React from 'react'
import Rating from '../common/Rating';
import MemberButtonsReactionBar from './MemberButtonsReactionBar';
import MemberLanguages from './MemberLanguages';
import MemberLocation from './MemberLocation';
import MemberScrollableTabs from './MemberScrollableTabs';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      margin: theme.spacing(5, "auto", 2),
    },
    margin: {
      marginLeft: theme.spacing(5),
    }
  }),
);

export default function MemberInformation() {
    const classes = useStyles();
    return (
        <Container className={classes.root}>
            <Grid container className={classes.margin}>
                <Grid item >
                    <Typography variant="h5">
                        Romanov Roman
                    </Typography>
                </Grid>
                    <Grid item >
                        <MemberLocation />
                    </Grid>
            </Grid>
            
            <Grid item xs={12} sm={12} className={classes.margin}>
              <MemberLanguages />
            </Grid>
           
            <Grid item xs={12} sm={12} className={classes.margin}>
              <MemberButtonsReactionBar />
            </Grid>
            <Grid item xs={12} sm={12}>
              <MemberScrollableTabs />
            </Grid>
        </Container>
    )
}
