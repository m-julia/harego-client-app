import { Container, createStyles, Grid, makeStyles, Theme } from "@material-ui/core";
import React from "react";
import MemberDetails from "../member/MemberDetails";


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
  root: {
    maxWidth: "100%",
    display: "flex",
    margin: theme.spacing(2, 'auto'),
  }
 
}));

const ProfilePage = () => {
    const classes = useStyles();
    
    return (
        <Container className={classes.root} >
            <Grid container spacing={2} justify="center">
                <Grid item xs={12} sm={12} md={6} lg={10}>
                    <MemberDetails />
                </Grid>
               
                
            </Grid>
        </Container>
    ) 
}

export default ProfilePage;