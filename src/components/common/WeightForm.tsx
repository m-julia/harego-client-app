import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& > *": {
        margin: theme.spacing(2),
        width: "25ch"
      }
    }
  })
);

export default function BasicTextFields() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
     <TextField
        id="weight"
        label="Weight"
        color="primary"
        type="number"
        InputProps={{ inputProps: { min: 0, max: 10, step: 0.1 } }}
      />
    </form>
  );
}
