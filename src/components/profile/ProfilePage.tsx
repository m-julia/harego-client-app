import { Container, createStyles, Grid, makeStyles, Theme } from "@material-ui/core";
import React from "react";
import CreateAdv from "../common/CreateAdv";
import MemberDetails from "../member/MemberDetails";


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
  root: {
    maxWidth: "100%",
    display: "flex",
    alignItems: "center",
    margin: 0,
  }
 
}));

const ProfilePage = () => {
    const classes = useStyles();
    
    return (
        <Container className={classes.root} >
            <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={6} lg={12}>
                    <MemberDetails />
                </Grid>
               
                
            </Grid>
        </Container>
    ) 
}

export default ProfilePage;