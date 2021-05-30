import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { CardMedia, Grid } from '@material-ui/core';
import ReactComponent  from '../../img/blank-profile-picture-973460_1280.png'
import MemberInformation from './MemberInformation';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      margin: theme.spacing(8, "auto", 2),
      display: "flex"
      
    },
    avatar: {
      backgroundColor: "#ffcc23",
      width: theme.spacing(12),
      height: theme.spacing(12),
    },
    media: {
      height: 150,
      width: 150,
      margin: theme.spacing(5),
      padding: theme.spacing(5), // 16:9
    },
    
  }),
);

export default function MemberDetails() {
  const classes = useStyles();
  
  return (
    <Card className={classes.root}>
      <CardContent>
        <Grid container spacing={3}>
          <Grid item >
              <CardMedia
              className={classes.media}
              image={ReactComponent}
              title="Profile Avatar"
            />
          </Grid>
                 
            <Grid item lg={8} >
             <MemberInformation />
            </Grid>

           
          </Grid>
      </CardContent>
       
       
    </Card>
  );
}
