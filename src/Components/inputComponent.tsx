import React, {ChangeEvent, FC} from 'react';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import {ReactComponent as BTC} from "../assets/Icons/btc.svg";
import {ReactComponent as LTC} from "../assets/Icons/ltc.svg";
import {ReactComponent as EUR} from "../assets/Icons/eur.svg";
import {CurrencyStateType} from "./MainContent/MainContent";

type InputComponentPropsType = {
    value: string
    currenciesState: Array<CurrencyStateType>
    currency: string
    handleChange: (e: ChangeEvent<{ name?: string, value: unknown; }>) => void
    onValueChangeHandler?: (e: ChangeEvent<HTMLInputElement>) => void
    option: string
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            marginTop: 40,
            maxWidth: 320,
        },
        input: {
            marginTop: 20,
        },
        imgSize: {
            width: 30,
            height: 30,
            paddingLeft: 7,
            borderLeft: 'solid #d8d8d8'
        },
        textField: {
            width: '35ch',
        },
        formControl: {
            marginLeft: theme.spacing(1),
            minWidth: 30,
        },
        selectEmpty: {
            width: 60
        },
        option: {
            color: '#000',
        }
    }),
);

export const InputComponent: FC<InputComponentPropsType> = ({
    value, 
    currenciesState, 
    currency, 
    handleChange,
    onValueChangeHandler, 
    option,
}: InputComponentPropsType) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <FormControl className={classes.textField} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password" className={classes.option}>{option}</InputLabel>
                <OutlinedInput
                    value={value === '0' ? null : value}
                    onChange={onValueChangeHandler}
                    id="outlined-adornment-password"
                    type='number'
                    onWheel={e => e.currentTarget.blur()}
                    endAdornment={
                        <InputAdornment position="end">
                            {currency === "BTC" && <BTC className={classes.imgSize} />}
                            {currency === "LTC" && <LTC className={classes.imgSize} />}
                            {currency === "EUR" && <EUR className={classes.imgSize} />}
                            <FormControl className={classes.formControl}>
                                <Select
                                    disableUnderline
                                    className={classes.selectEmpty}
                                    value={currency}
                                    onChange={handleChange}>
                                    {currenciesState.map(currency =>
                                        <MenuItem key={currency.id}
                                                  value={currency.currencyName}>{currency.currencyName}
                                        </MenuItem>
                                    )}
                                </Select>
                            </FormControl>
                        </InputAdornment>
                    }/>
            </FormControl>
        </div>
    );
}