import { Container, createStyles, makeStyles, Theme } from "@material-ui/core";
import React from "react";
import AdvCard from "../adv/AdvCard";
import SearchBar from "../common/SearchBar";
import { connect } from 'react-redux';
import useFetchAdvList from '../../hooks/useFetchListAdv';
import { Advertisement } from "../../api/models/advertisement";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
  root: {
    maxWidth: '100%',
    height: '100vh',
    margin: 0,
  }
 
}));

const SearchPage = (props: any) => {
    const classes = useStyles();
        
    useFetchAdvList();
   
      if (props.loading) {
      return (
        <Container className={classes.root} >
            <SearchBar />
            <div>Loading...</div> 
        </Container>
      )
    }
    
    return (
        <Container className={classes.root} >
            <SearchBar />
            {props.listAdv.map((adv: Advertisement) => (
              <React.Fragment key={adv.id}>
                  <AdvCard props={adv} />
              </React.Fragment>          
            ))}   
        </Container>
    ) 
}

const mapStateToProps = (state: any) => {
  return {
    listAdv: state.advertisementsList.advertisements,
    loading: state.advertisementsList.loading
  }
}

export default connect(mapStateToProps)(SearchPage);

