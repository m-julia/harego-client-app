import { Container, createStyles, makeStyles, Theme } from "@material-ui/core";
import React from "react";
import AdvCard from "../common/AdvCard";
import SearchBar from "../common/SearchBar";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
  root: {
    backgroundColor: '#37474f',
    maxWidth: '100%',
    height: '100vh',
    margin: 0,
  },
  container: {
    margin: 'auto'
    
  },
  title: {
    flexGrow: 1,
    textAlign: 'center',
    color: 'white',
  },
}));

const SearchPage = () => {
    const classes = useStyles();
    
    return (
        <Container>
            <Container >
                <SearchBar />
            </Container>
            <Container className={classes.container}>
                <AdvCard />
            </Container>
        </Container>
    ) 
}

export default SearchPage;