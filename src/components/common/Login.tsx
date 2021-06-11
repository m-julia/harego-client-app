import React from 'react'
import { Field, FieldsWarnerOrValidator, InjectedFormProps, reduxForm } from 'redux-form'
import TextField from '@material-ui/core/TextField'
import FormHelperText from '@material-ui/core/FormHelperText'
import { Button, Checkbox, createMuiTheme, FormControlLabel, Grid, makeStyles, ThemeProvider } from '@material-ui/core'

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
const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: "#ffcc23"
    },
    form: {
      width: "100%", // Fix IE 11 issue.
      marginTop: theme.spacing(3)
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
      background: 'linear-gradient(3deg, #ffcc23 20%, #ffc920 95%)',
      borderRadius: 50 
    },
    link: {
      color: '#37474f',
      textDecoration: 'none',
    }
  }));
  
const validate = values => {
  const errors = {}
  const requiredFields = [
    'email',
    'password'
  ]
  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = 'Required'
    }
  })
  if (
    values.email &&
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
  ) {
    errors.email = 'Invalid email address'
  }
  return errors
}

const renderTextField = ({
  label,
  variant,
  input,
  autoComplete,
  meta: { touched, invalid, error },
  ...custom
}) => (
  <TextField
    label={label}
    placeholder={label}
    variant={variant}
    autoComplete={autoComplete}
    error={touched && invalid}
    helperText={touched && error}
    {...input}
    {...custom}
  />
)

const renderCheckbox = ({ input, label }) => (
    <div>
      <FormControlLabel
        control={
          <Checkbox
            checked={input.value ? true : false}
            onChange={input.onChange}
          />
        }
        label={label}
      />
    </div>
  )
const renderFromHelper = ({ touched, error }: InjectedFormProps) => {
    if (!(touched && error)) {
      return
    } else {
      return <FormHelperText>{touched && error}</FormHelperText>
    }
  }

  const Login = (props: InjectedFormProps) => {
    const { handleSubmit, pristine, reset, submitting} = props
    const classes = useStyles();
    return (
        <ThemeProvider theme={theme}>
        <form className={classes.form} onSubmit={handleSubmit}>
            <Grid container spacing={2}>
                <Field
                    name="email"
                    component={renderTextField}
                    label="Email Address"
                    variant="standard"
                    fullWidth
                    autoComplete="email"
                />
            </Grid>
            <Grid container spacing={2}>
                <Field
                    name="password"
                    component={renderTextField}
                    label="Password"
                    variant="standard"
                    fullWidth
                    autoComplete="password"
                />
            </Grid>

            <Grid item xs={12}>
                <Field  
                    name="employed" 
                    component={renderCheckbox}                 
                    label="Remember me"
                />
            </Grid>
            <Button
                type="submit"
                fullWidth
                variant="contained"
                disabled={pristine || submitting}
                className={classes.submit}
            >
                Login
            </Button>
                        
            
            <div>
            <Field name="employed" component={renderCheckbox} label="Employed" />
            </div>
            <div />
            <div>
            <Field
                name="notes"
                component={renderTextField}
                label="Notes"
                multiline
                rowsMax="4"
                margin="normal"
            />
            </div>
            <div>
            <button type="submit" disabled={pristine || submitting}>
                Submit
            </button>
            <button type="button" disabled={pristine || submitting} onClick={reset}>
                Clear Values
            </button>
            </div>
        </form>
        </ThemeProvider>
    )
  }
  
  export default reduxForm({
    form: 'Login', // a unique identifier for this form
    validate})(Login)