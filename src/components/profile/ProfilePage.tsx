import { Container, createStyles, Grid, makeStyles, Theme } from "@material-ui/core";
import React from "react";
import CreateAdv from "../common/CreateAdv";
import MemberDetails from "../common/MemberDetails";


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
  root: {
    maxWidth: "100%",
    display: "flex",
    alignItems: "center",
    margin: 0,
  }
 
}));

const SearchPage = () => {
    const classes = useStyles();
    
    return (
        <Container className={classes.root} >
            <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={6} lg={9}>
                    <MemberDetails />
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={3} >
                    <CreateAdv />
                </Grid>
            </Grid>
        </Container>
    ) 
}

export default SearchPage;