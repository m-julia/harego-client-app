import { Card, createStyles, Grid, makeStyles, TextField, Theme, Typography } from "@material-ui/core";
import React from "react";
import CityForm from "./CityForm";
import CustomButton from "./CustomButton";
import DatePicker from "./DatePicker";
import WeightForm from "./WeightForm";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      margin: theme.spacing(8, "auto", 2),
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center"
  },
  form: {
    width: "100%", 
    marginTop: theme.spacing(2)
  },
  textField: {
      margin: theme.spacing(2)
  },
  text: {
      width: "80%"
  },
  margin: {
      marginLeft: theme.spacing(2)
  }
  
}));

const CreateAdv = () => {
    const classes = useStyles();
    const [value, setValue] = React.useState('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };


    return (
      <Card className={classes.root}>
        <form className={classes.form} >
         <Grid container spacing={2}>
            <Grid item xs={12} >
                <Typography component="h1" variant="h5">
                    Create advertisement
                </Typography>
            </Grid>
            <Grid item xs={12} sm={6} >
            <TextField
                autoComplete="fcity"
                name="cityFrom"
                variant="standard"
                required
                id="cityFrom"
                label="From"
                className={classes.textField}
              />
            </Grid>
            <Grid item xs={12} sm={6} >
            <TextField
                autoComplete="fcity"
                name="cityTo"
                variant="standard"
                required
                id="cityTo"
                label="To"
                className={classes.textField}
              />
            </Grid>
            <Grid item xs={12} sm={12} >
              <WeightForm />
            </Grid>
            <Grid item xs={12} sm={12}>
              <DatePicker label="Trip date" />
            </Grid>
            <Grid item xs={12} sm={12} >
                <TextField
                id="standard-textarea"
                label="Description"
                multiline
                rowsMax={10}
                className={classes.text}
                value={value}
                onChange={handleChange}
                />
            </Grid>
            
            <Grid item xs={12} >
              <CustomButton title="Create"/>
            </Grid>
          </Grid>
          </form>
      </Card>
       
    )
    

}

export default CreateAdv;