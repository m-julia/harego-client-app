import { Card,  createStyles, Grid, makeStyles, Theme } from "@material-ui/core";
import React from "react";
import CityForm from "../common/CityForm";
import CustomButton from "../common/CustomButton";
import DatePicker from "../common/DatePicker";
import WeightForm from "../common/WeightForm";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: "85%",
      margin: theme.spacing(4, "auto", 2),
      display: "flex",
      textAlign: "center"
  }
  
}));

const SearchBar = () => {
    const classes = useStyles();

    return (
      <Card className={classes.root}>
         <Grid container spacing={2}>
            <Grid item xs={12} sm={6} lg={2}>
                <CityForm label="From" />
            </Grid>
            <Grid item xs={12} sm={6} lg={2}>
                <CityForm label="To" />
            </Grid>
            <Grid item xs={12} sm={8} lg={2}>
              <WeightForm />
            </Grid>
            <Grid item xs={12} sm={6} lg={2}>
              <DatePicker label="From" />
            </Grid>
            <Grid item xs={12} sm={6} lg={2}>
              <DatePicker label="To" />
            </Grid>
            <Grid item xs={12} sm={8} lg={1}>
              <CustomButton title="Search"/>
            </Grid>
          </Grid>
      </Card>
       
    )
    

}

export default SearchBar;