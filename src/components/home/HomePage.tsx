import { Container, createStyles, makeStyles, Theme, Typography} from "@material-ui/core";
import React from "react";
import { NavLink } from "react-router-dom";

import CustomButton from "../common/CustomButton";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
  root: {
    backgroundColor: '#37474f',
    maxWidth: '100%',
    height: '100vh',
    margin: 0,
  },
  container: {
    paddingTop: '15%'
  },
  title: {
    flexGrow: 1,
    textAlign: 'center',
    color: 'white',
  },
}));

const HomePage = () => {
    const classes = useStyles();
    return (
        <Container className={classes.root}>
            <Container className={classes.container}> 
                <Typography variant="h3" className={classes.title}>
                    HAREGO is....
                </Typography>
           <CustomButton title="Deliver"/>
           <NavLink to="/search">
                <CustomButton title="Send"/>
           </NavLink>
                </Container>
        </Container>
    )
}

export default HomePage;