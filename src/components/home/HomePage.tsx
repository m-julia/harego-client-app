import { Container, createStyles, Grid, makeStyles, Theme, Typography} from "@material-ui/core";
import React from "react";
import { NavLink } from "react-router-dom";
import SendIcon from '@material-ui/icons/Send';
import FlightTakeoffIcon from '@material-ui/icons/FlightTakeoff';

import CustomButton from "../common/CustomButton";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
  root: {
    backgroundColor: '#37474f',
    maxWidth: '100%',
    height: '100vh',
    margin: 0,
    paddingTop: 220
  },
  container: {
    paddingBottom: 60,
    margin: "auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
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
          <Typography variant="h3" className={classes.title}>
            HAREGO is....
          </Typography>
          <Container className={classes.container} >
          <Grid container  
                direction="row"
                justify="center"
                alignItems="center" spacing={1}>
            <Grid item xs={12} sm={6} md={3} lg={3}>
              <NavLink to="/registration">
                <CustomButton title="Deliver" icon={<FlightTakeoffIcon />}/>
              </NavLink>
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={3}>
              <NavLink to="/search">
                  <CustomButton title="Send" icon={<SendIcon />}/>
              </NavLink>
            </Grid>
          </Grid>
          </Container>
        </Container>
    )
}

export default HomePage;