import React from 'react';
import { createStyles, Grid, makeStyles, Theme, Typography } from '@material-ui/core';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      alignItems: "center",
      textAlign: "left",
      color: "#37474f",
    },
    text: {
        color: "#a6a6a6",
        marginLeft: theme.spacing(5),
        marginTop: theme.spacing(2)
    },
    textHeader: {
        color: "#37474f",
        marginLeft: theme.spacing(5),
        marginTop: theme.spacing(2)
    },
    about: {
        marginLeft: theme.spacing(2)
    },
    hr: {
        width: 570,
        height: 2,
        borderColor: "#ffcc23",
        background: "#ffcc23",
        margin: 0,

    },
    gridBox: {
        width: 180,
    }
  }),
);

export default function MemberAbout() {
    const classes = useStyles();
    return (
        <div>
            <div>
            <Typography variant="subtitle1" gutterBottom className={classes.textHeader}>
                CONTACT INFORMATION
            </Typography> 
            </div>
            <div className={classes.root}>
                <Grid container spacing={2}>
                    <Grid item className={classes.gridBox} >
                        <Typography variant="subtitle2" gutterBottom className={classes.text}>
                            PHONE NUMBER:
                        </Typography>
                    </Grid>
                    <Grid item>
                    <Typography variant="subtitle2" gutterBottom className={classes.text}>
                        +420 777 777 777
                    </Typography>
                    </Grid>
                </Grid>
            </div>
            <div className={classes.root}>
                <Grid container spacing={2}>
                    <Grid item className={classes.gridBox}>
                        <Typography variant="subtitle2" gutterBottom className={classes.text}>
                            EMAIL:
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="subtitle2" gutterBottom className={classes.text} >
                            rororo@gmai.com
                        </Typography>
                    </Grid>
                </Grid>
            
            </div>

            <div>
            <Typography variant="subtitle1" gutterBottom className={classes.textHeader}>
                BASIC INFORMATION
            </Typography> 
            </div>
            <div className={classes.root}>
                <Grid container spacing={2}>
                    <Grid item className={classes.gridBox} >
                        <Typography variant="subtitle2" gutterBottom className={classes.text}>
                           GENDER:
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="subtitle2" gutterBottom className={classes.text}>
                            MALE
                        </Typography>
                    </Grid>
                </Grid>
            </div>
            <div className={classes.root}>
                <Grid container spacing={2}>
                    <Grid item className={classes.gridBox}>
                        <Typography variant="subtitle2" gutterBottom className={classes.text}>
                            BIRTHDAY:
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="subtitle2" gutterBottom className={classes.text} >
                            25/05/1980
                        </Typography>
                    </Grid>
                </Grid>
            
            </div>
        </div>
        
    )
}
