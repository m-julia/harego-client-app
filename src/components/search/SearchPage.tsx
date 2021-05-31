import { Container, createStyles, makeStyles, Theme } from "@material-ui/core";
import React from "react";
import AdvCard from "../adv/AdvCard";
import SearchBar from "../common/SearchBar";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
  root: {
    maxWidth: '100%',
    height: '100vh',
    margin: 0,
  }
 
}));

const SearchPage = () => {
    const classes = useStyles();
    
    return (
        <Container className={classes.root} >
            <SearchBar />
            <AdvCard />
        </Container>
    ) 
}

export default SearchPage;