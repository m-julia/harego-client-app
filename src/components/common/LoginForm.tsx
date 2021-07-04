import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { NavLink } from "react-router-dom";
import { logingUser } from "../../redux/actions/authActions";
import { MemberFormValue } from "../../api/models/member";
import agent from "../../api/agent";



function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

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

const loginHandler = async (e : any, state : any) => {
  e.preventDefault();
  const member : MemberFormValue = {email: state['email'], password: state['password']};
  const loggedMember = await agent.Account.login(member)
  console.log(loggedMember);
}

const changeHandler = (e: any, setState: any, type: any, state: Object) => {
  
  if (type === 'email') {
    setState({...state, email: e.target.value})
  } else {
    setState({...state, password: e.target.value})
  }
}


function LoginForm(){
  const [state, setState] = useState({});
  const classes = useStyles();
  return (
    <form className={classes.form} >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="standard"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                onChange={(e) => changeHandler(e, setState, 'email', state)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="standard"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={(e) => changeHandler(e, setState, 'password', state)}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            className={classes.submit}
            onClick={(e) => loginHandler(e, state)}
          >
            Login
          </Button>
          <Grid container justify="flex-end">
              <Grid item xs>
                <Link href="#" variant="body2" className={classes.link}>
                    Forgot password?
                </Link>
              </Grid>
            <Grid item >
              <NavLink to="/registration" className={classes.link}>
                Don't have an account? Registration
              </NavLink>
            </Grid>
          </Grid>
        </form>
  )
}

function Login() {
  const classes = useStyles();
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <LoginForm /> 
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
};

export default Login;