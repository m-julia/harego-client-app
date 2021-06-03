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
          {props.props.fromLocation} - {props.props.toLocation}
      </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {props.props.tripDate}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {props.props.weight} Kg
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {props.props.description}
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

export default AdvCard;


