import { Container, createStyles, makeStyles, Theme } from "@material-ui/core";
import React from "react";
import CityForm from "../common/CityForm";
import CustomButton from "../common/CustomButton";
import DatePicker from "../common/DatePicker";
import WeightForm from "../common/WeightForm";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
  
  container: {
    marginTop : "3%",
    display: 'flex'
  }
  
}));

const SearchBar = () => {
    const classes = useStyles();

    return (
        <Container >
            <Container className={classes.container}>
                <CityForm label="From" />
                <CityForm label="To" />
                <DatePicker label="From" />
                <DatePicker label="To" />
                <WeightForm />
                <CustomButton title="Search"/>
            </Container>
        </Container>
    )
    

}

export default SearchBar;