import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import { Grid, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      margin: theme.spacing(8, "auto", 2),
      
    },
    avatar: {
      backgroundColor: "#ffcc23",
      width: theme.spacing(12),
      height: theme.spacing(12),
    },
    pos: {
      marginBottom: 12,
    }
    
  }),
);

export default function MemberDetails() {
  const classes = useStyles();
  
  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar alt="Remy Sharp"  className={classes.avatar} >
            R
          </Avatar>
        }
        title={
          <Typography variant="h4">
            Romanov Roman
          </Typography>
        }
      />
     
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12}>
              <Typography variant="h5">
                Romanov Roman
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12}>
              <Typography variant="h5">
                Romanov Roman
              </Typography>
            </Grid>
          </Grid>
            
        </CardContent>
       
       
    </Card>
  );
}
