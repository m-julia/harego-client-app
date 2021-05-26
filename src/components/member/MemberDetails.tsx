import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import { CardMedia, Grid, Typography } from '@material-ui/core';
import ReactComponent  from '../../img/blank-profile-picture-973460_1280.png'
import SvgIcon from '@material-ui/core/SvgIcon';
import PlaceIcon from '@material-ui/icons/Place';
import MemberLocation from './MemberLocation';
import MemberLanguages from './MemberLanguages';
import MemberButtonsReactionBar from './MemberButtonsReactionBar';
import MemberAbout from './MemberAbout';
import MemberInformation from './MemberInformation';
import CreateAdv from '../common/CreateAdv';

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
                 
            <Grid item lg={6} >
             <MemberInformation />
            </Grid>

            <Grid item lg={3} >
             <CreateAdv />
            </Grid>

          </Grid>
      </CardContent>
       
       
    </Card>
  );
}
