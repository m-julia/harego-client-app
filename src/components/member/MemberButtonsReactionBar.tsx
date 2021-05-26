import { Button, createStyles, makeStyles, Theme } from '@material-ui/core';
import React from 'react';
import MessageIcon from '@material-ui/icons/Message';
import RateReviewIcon from '@material-ui/icons/RateReview';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
      root: {
        display: "flex",
        alignItems: "left",
        textAlign: "center",
        color: "#a6a6a6"
      },
    buttonYellow: {
        background: 'linear-gradient(3deg, #ffcc23 20%, #ffc920 95%)',
        borderRadius: 50,
        border: 2,
        borderColor: 'white',
        color:'#37474f',
        height: 42,
        width: 200,
        margin: theme.spacing(5, 5, 5, 0),
        padding: '0 30px',
        boxShadow: '0 3px 5px 2px rgba(255, 135, 0, .3)',
  },
    buttonGray: {
        background: 'linear-gradient(3deg, #a6a6a6 20%, #a6a6a6 95%)',
        borderRadius: 50,
        border: 2,
        borderColor: 'white',
        color:'#37474f',
        height: 42,
        width: 200,
        margin: theme.spacing(5, 5, 5, 0),
        padding: '0 30px',
        boxShadow: '0 3px 5px 2px rgba(0, 0, 0, .2)',
},
}));

export default function MemberButtonsReactionBar() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Button className={classes.buttonYellow}>
               <MessageIcon /> Send message                
            </Button>
            <Button className={classes.buttonGray}>
               <RateReviewIcon /> Add Review               
            </Button>
        </div>
    )
}
