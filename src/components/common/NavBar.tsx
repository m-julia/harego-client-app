import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./NavBarStyles"
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";


const NavBar = () => {
    const classes = styles();

    return (
        <div className={classes.root}>
            <AppBar position="static" className={classes.root}>
                <Toolbar>
                    <Typography variant="h5" className={classes.title}>
                        <NavLink to="/" exact  className={classes.link}>
                            HAREGO
                        </NavLink>
                    </Typography>
                    <NavLink to="/search" className={classes.link}>
                        <Button color="inherit" className={classes.menuButton}>
                            Advertisement
                        </Button>
                    </NavLink>
                    <NavLink to="/login" className={classes.link} >
                        <Button color="inherit" className={classes.menuButton}>
                            Login
                        </Button>
                    </NavLink>
                </Toolbar>
            </AppBar>
        </div>

    )
}

export default NavBar;