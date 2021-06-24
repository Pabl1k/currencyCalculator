import React from "react";
import {AppBar, Button, makeStyles, Toolbar, Typography} from "@material-ui/core";
import logoImg from '../img/logo.png';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

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
        backgroundColor: '#fdfdfe'
    },
    menuItems: {
        color: '#7F88A0',
        paddingTop: theme.spacing(1),
        marginLeft: 65,
        fontSize: 18
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
        left: 1100,
        top: 26,
        background: '#16DFB5',
        borderRadius: '4px 55px 55px 60px',
        color: 'white',
        '&:hover': {
            position: 'absolute',
            width: 145,
            height: 50,
            left: 1100,
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
    }
}));

export const Header = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar className={classes.toolbar}>
                    <img src={logoImg} alt="logo" className={classes.logoImg}/>
                    <Typography className={classes.menuItems}>Products</Typography>
                    <Typography className={classes.menuItems}>Resources</Typography>
                    <Typography className={classes.menuItems}>Buy Instantly</Typography>
                    <Typography className={classes.logIn}>
                        Log In
                    </Typography>
                    <Button className={classes.button}>
                        <Typography>Sign Up</Typography>
                        <ArrowForwardIosIcon className={classes.buttonArrow}/>
                    </Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}