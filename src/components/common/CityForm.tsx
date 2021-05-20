import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

interface Props {
    label: string
  };

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

const CityForm = (props: Props) => {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="on">
      <TextField  label={props.label} />
    </form>
  );
}

export default CityForm;
