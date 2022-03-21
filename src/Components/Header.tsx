import React from "react";
import {NavLink} from "react-router-dom";
import AppBar from "@material-ui/core/AppBar/AppBar";
import Toolbar from "@material-ui/core/Toolbar/Toolbar";
import {Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import useTheme from "@material-ui/core/styles/useTheme";
import useMediaQuery from "@material-ui/core/useMediaQuery/useMediaQuery";
import {ReactComponent as CompanyLogo} from "../assets/Icons/Logo.svg";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 10,
    },
    toolbar: {
        minHeight: 75,
        alignItems: 'center',
        paddingTop: theme.spacing(1),
        paddingLeft: theme.spacing(4),
        paddingBottom: theme.spacing(2),
        backgroundColor: '#fdfdfe',
    },
    menuItems: {
        color: '#7F88A0',
        paddingTop: theme.spacing(1),
        marginLeft: 65,
        fontSize: 18,
    },
    logoImg: {
        paddingTop: theme.spacing(1),
        width: 157,
        height: 33,
    },
    logIn: {
        color: '#7F88A0',
        fontSize: 17,
        paddingTop: theme.spacing(1),
        paddingLeft: 340,
        '&:hover': {
            color: '#5022ec',
            fontSize: 17,
            paddingTop: theme.spacing(1),
            paddingLeft: 340,
        }
    },
    button: {
        position: 'absolute',
        width: 145,
        height: 50,
        left: 1090,
        top: 26,
        background: '#16DFB5',
        borderRadius: '4px 55px 55px 60px',
        color: 'white',
        '&:hover': {
            position: 'absolute',
            width: 145,
            height: 50,
            left: 1090,
            top: 26,
            background: '#16DFB5',
            boxShadow: '0px 2px 2px 3px #A2FAEC',
            borderRadius: '4px 55px 55px 60px',
            color: 'white',
        },
    },
    buttonArrow: {
        paddingLeft: 10,
        width: 10
    },
    loading: {
        width: '100%',
        marginTop: 10,
        '& > * + *': {
            marginTop: theme.spacing(1),
        },
    },
}));

export const Header = () => {
    const classes = useStyles();
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down("xs"));

    return (
        <div className={classes.root}>
            <AppBar position="fixed">
                <Toolbar className={classes.toolbar}>
                    <NavLink to={'/'}>
                        <CompanyLogo />
                    </NavLink>
                    {!matches
                        && <>
                            <Typography className={classes.menuItems}>Products</Typography>
                            <Typography className={classes.menuItems}>Resources</Typography>
                            <Typography className={classes.menuItems}>Buy Instantly</Typography>
                        </>
                    }
                </Toolbar>
            </AppBar>
        </div>
    );
}