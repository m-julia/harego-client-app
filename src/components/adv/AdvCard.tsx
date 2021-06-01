import React, { useEffect } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { connect } from 'react-redux';
import { getAllAdvertisements } from '../../redux/actions/advAction';
import agent from '../../api/agent';



const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: "65%",
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

 function AdvCard(props: any) {
  const classes = useStyles();
  
  let list;
  useEffect(() => {
    agent.Advertisements.list()
    .then((advList) => {
       list = advList
    })
    .catch((err) => console.log(err))
  }, [])

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Romanov Roman"
        subheader="September 14, 2020"
      />
     
      <CardContent>
      <Typography variant="h5" component="h2">
          Praha - Moscow
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          30/05/2021
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          2.0 kg
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        </CardActions >
    </Card>
  );
}

const mapStateToProps = (state : any) => {
  return {
    listAdv: state.advertisements
  }
}

const mapDispatchToProps = (dispatch : any, props : any) => {
  return {
    sendList : () => dispatch(getAllAdvertisements(props.listAdv))
  }
}

export default connect(mapStateToProps)(AdvCard);