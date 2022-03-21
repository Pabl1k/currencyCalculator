import React, {ChangeEvent, useEffect, useState} from "react";
import {NavLink} from "react-router-dom";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Button from "@material-ui/core/Button/Button";
import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {createStyles, Theme} from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery/useMediaQuery";
import {InputComponent} from "../inputComponent";
import strings from "../../assets/strings";
import style from './MainContent.module.css';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        startNowArrow: {
            fontSize: 10,
            paddingTop: theme.spacing(1)
        },
        contentWrapper_background: {
            position: 'absolute',
            height: 700,
            left: '8.7%',
            right: '2.63%',
            top: 984,
            marginTop: -1000,
            background: '#5022ED',
            transform: 'matrix(1, -0.04, -0.04, -1, 0, 0)',
            borderRadius: 30,
            [theme.breakpoints.down('xs')]: {
                position: 'absolute',
                height: 1200,
                width: 210,
                left: -10,
                top: 984,
                marginTop: -1000,
                background: '#5022ED',
                borderRadius: 0,
                transform: 'matrix(3, -0.2, 0, -1, 0, 0)'
            }
        },
        contentWrapper_upperText: {
            position: 'absolute',
            width: 350,
            height: 98,
            left: 230,
            top: 170,
            color: '#fff',
            fontStyle: 'normal',
            fontWeight: 'bold',
            fontSize: 30,
            [theme.breakpoints.down('xs')]: {
                position: 'absolute',
                width: 350,
                height: 98,
                left: 30,
                top: 130,
                color: '#fff',
                fontStyle: 'normal',
                fontWeight: 'bold',
                fontSize: 30,
            }
        },
        contentWrapper_textBlock_colorPlus: {
            color: '#16DFB5'
        },
        contentWrapper_bottomText: {
            marginTop: 15,
            position: 'absolute',
            width: 320,
            height: 98,
            left: 230,
            top: 290,
            color: '#fff',
            fontStyle: 'normal',
            fontWeight: 'normal',
            fontSize: 12,
            [theme.breakpoints.down('xs')]: {
                marginTop: 15,
                position: 'absolute',
                width: 350,
                height: 98,
                left: 30,
                top: 750,
                color: '#fff',
                fontStyle: 'normal',
                fontWeight: 'normal',
                fontSize: 19,

            }
        },
        contentWrapper_startNow: {
            position: 'absolute',
            left: 230,
            top: 410,

            textDecoration: 'none',
            color: '#16DFB5',
        },
        shadowRectangular: {
            position: 'absolute',
            width: 366,
            height: 410,
            left: 700,
            top: 150,
            borderRadius: 20,
            background: '#E9F6FF',
            border: '1px solid #E8E8E8',
            boxSizing: 'border-box',
            transform: 'rotate(-5.53deg)',
        },
        mainRectangular: {
            position: 'absolute',
            width: 366,
            height: 420,
            left: 775,
            top: 170,
            borderRadius: 20,
            background: '#fff',
            border: '1px solid #E8E8E8',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            [theme.breakpoints.down('xs')]: {
                position: 'absolute',
                width: 345,
                height: 420,
                left: 30,
                top: 300,
                borderRadius: 20,
                background: '#fff',
                border: '1px solid #E8E8E8',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }
        },
        loadingCircular: {
            marginTop: 5,
            marginBottom: -20
        },
        mainRectangularSign: {
            margin: '25px 0 25px -190px',
            fontSize: 15,
            color: '#000'
        },
        mainRectangularErrorSign: {
            margin: '25px 0 25px 0',
            fontSize: 15,
            color: '#ff0000'
        },
        bottomInput: {
            width: 310,
            fontSize: 15,
            color: '#000'
        },
        button: {
            position: 'absolute',
            width: 310,
            height: 40,
            top: 350,
            backgroundColor: '#b4b4b4',
            borderRadius: '4px 55px 55px 60px',
            color: '#fff',
            '&:hover': {
                position: 'absolute',
                width: 310,
                height: 40,
                top: 350,
                backgroundColor: '#b4b4b4',
                borderRadius: '4px 55px 55px 60px',
                boxShadow: '0px 1px 1px 2px #A09F9F'
            }
        },
        buttonSign: {
            textDecoration: 'none',
            color: '#fff'
        }
    })
);
export type CurrencyStateType = {
    id: number
    currencyName: string
}

export const MainContent = () => {
    const classes = useStyles();
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down("xs"));

    const currenciesState: CurrencyStateType[] = [
        {id: 1, currencyName: 'EUR'},
        {id: 2, currencyName: 'BTC'},
        {id: 3, currencyName: 'LTC'}
    ]

    const btcEur = 37317.36;
    const ltcEur = 104.28;
    const ltcBtc = 0.0028;

    const [payValue, setPayValue] = useState<string>('');
    const [payCurrency, setPayCurrency] = useState<string>('EUR');

    const [buyValue, setBuyValue] = useState<string>('');
    const [buyCurrency, setBuyCurrency] = useState<string>('BTC');

    let error: string = 'Buy currency and pay currency can not be the same';

    useEffect(() => {
        if (payCurrency === 'EUR' && buyCurrency === 'BTC') {
            let buyRate = +payValue / +btcEur;
            setBuyValue(buyRate.toFixed(4).toString())
        }
        if (payCurrency === 'EUR' && buyCurrency === 'LTC') {
            let buyRate = +payValue / +ltcEur;
            setBuyValue(buyRate.toFixed(4).toString())
        }
        if (payCurrency === 'BTC' && buyCurrency === 'EUR') {
            let buyRate = +payValue * +btcEur;
            setBuyValue(buyRate.toFixed(2).toString())
        }
        if (payCurrency === 'BTC' && buyCurrency === 'LTC') {
            let buyRate = +payValue / +ltcBtc;
            setBuyValue(buyRate.toFixed(5).toString())
        }
        if (payCurrency === 'LTC' && buyCurrency === 'EUR') {
            let buyRate = +payValue * +ltcEur;
            setBuyValue(buyRate.toFixed(2).toString())
        }
        if (payCurrency === 'LTC' && buyCurrency === 'BTC') {
            let buyRate = +payValue * +ltcBtc;
            setBuyValue(buyRate.toFixed(5).toString())
        }
        if (payValue === '') {
            setBuyValue('')
        }
    }, [payValue, btcEur, ltcBtc, ltcEur, buyCurrency, payCurrency]);

    const payHandleChange = (e: React.ChangeEvent<{ value: unknown }>) => {
        setPayCurrency(e.target.value as string)
    };
    const buyHandleChange = (e: React.ChangeEvent<{ value: unknown }>) => {
        setBuyCurrency(e.target.value as string)
    };
    const payValueChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setPayValue(e.currentTarget.value)
    }
    const onButtonClick = () => {
        alert(`For ${payValue} ${payCurrency} you will buy ${buyValue} ${buyCurrency}`)
    }

    return <div>
        <div className={classes.contentWrapper_background}/>
        <div className={classes.contentWrapper_upperText}>
            <span className={classes.contentWrapper_textBlock_colorPlus}>Buy Bitcoin,</span> Ethereum, Litecoin and
            other crypto <span className={classes.contentWrapper_textBlock_colorPlus}>online</span>
        </div>
        <div className={classes.contentWrapper_bottomText}>
            {strings.mainText}
        </div>
        <div className={style.contentWrapper_startNow}>
            <NavLink to={'/signUp'}>Start now <ArrowForwardIosIcon className={classes.startNowArrow}/></NavLink>
        </div>
        {!matches
            ? <div className={classes.shadowRectangular}>
                <Paper/>
            </div>
            : null}
        <Paper className={classes.mainRectangular}>
            <InputComponent
                value={payValue}
                currenciesState={currenciesState}
                currency={payCurrency}
                handleChange={payHandleChange}
                onValueChangeHandler={payValueChangeHandler}
                option='Pay'
            />
            <InputComponent
                value={buyValue}
                currenciesState={currenciesState}
                currency={buyCurrency}
                handleChange={buyHandleChange}
                option='Buy'
            />
            <span
                className={payCurrency !== buyCurrency ? classes.mainRectangularSign : classes.mainRectangularErrorSign}>
                {payCurrency !== buyCurrency ? 'Payment method' : error}
            </span>
            <TextField
                className={classes.bottomInput}
                label="Bank transfer"
                disabled
                variant="outlined"
            />
            <Button
                className={classes.button}
                variant={'contained'}
                disabled={payValue === '' || buyValue === ''}
                onClick={onButtonClick}>
                <Typography className={classes.buttonSign}>Buy {buyCurrency}</Typography>
            </Button>
        </Paper>
    </div>
}