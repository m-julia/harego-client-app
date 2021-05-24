import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      margin: theme.spacing(8, "auto", 2),
      
    },
    avatar: {
      backgroundColor: "#ffcc23",
    },
    pos: {
      marginBottom: 12,
    },
  }),
);

export default function MemberDetails() {
  const classes = useStyles();
  
  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            R
          </Avatar>
        }
       
        title="Romanov Roman"
       
      />
     
        <CardContent>
      
        </CardContent>
        <CardActions disableSpacing>
        
        </CardActions >
       
    </Card>
  );
}
