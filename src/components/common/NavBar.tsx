import React from "react";
import { NavLink } from "react-router-dom";
import useStyles from "./NavBarStyles"
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";


const NavBar = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static" className={classes.root}>
                <Toolbar>
                    <Typography variant="h5" className={classes.title}>
                        <NavLink to="/" exact  className={classes.link}>
                            HAREGO
                        </NavLink>
                    </Typography>
                
                    <Button color="inherit" className={classes.menuButton}>
                        Advertisement
                    </Button>
                    <Button color="inherit" className={classes.menuButton}>
                        Login
                    </Button>

                </Toolbar>
            </AppBar>
        </div>

    )
}

export default NavBar;