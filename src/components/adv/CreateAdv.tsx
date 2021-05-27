import { createMuiTheme, createStyles, Grid, makeStyles, TextField, Theme, ThemeProvider, Typography } from "@material-ui/core";
import React from "react";
import CustomButton from "../common/CustomButton";
import DatePicker from "../common/DatePicker";
import WeightForm from "../common/WeightForm";
import CreateIcon from '@material-ui/icons/Create';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: 'a6a6a6',
      main: '#ffcc23',
      dark: '#37474f',
      contrastText: '#fff',
    },
    secondary: {
      light: 'a6a6a6',
      main: '#ffcc23',
      dark: '#37474f',
      contrastText: '#000',
    },
  },
});
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center"
  },
  form: {
    marginTop: theme.spacing(2),
    
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
      <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <form className={classes.form} >
         <Grid container >
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
              <CustomButton title={"Create"} icon={<CreateIcon />}/>
            </Grid>
          </Grid>
          </form>
        </div>
        </ThemeProvider>
       
    )
    

}

export default CreateAdv;