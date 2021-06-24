import React, {ChangeEvent} from 'react';
import clsx from 'clsx';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import {MenuItem, Select} from "@material-ui/core";
import {CurrencyStateType} from "./MainContent/MainContent";

type InputComponentPropsType = {
    value: string
    currenciesState: Array<CurrencyStateType>
    currency: string
    currencyImage: string
    handleChange: (e: ChangeEvent<{ name?: string | undefined; value: unknown; }>) => void
    onValueChangeHandler?: (e: ChangeEvent<HTMLInputElement>) => void
    option: string
    disable?: boolean
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

export const InputComponent: React.FC<InputComponentPropsType> = (props) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <FormControl className={clsx(classes.textField)} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password" className={classes.option}>{props.option}</InputLabel>
                <OutlinedInput
                    disabled={props.disable}
                    value={props.value === '0' ? null : props.value}
                    onChange={props.onValueChangeHandler}
                    id="outlined-adornment-password"
                    type='number'
                    endAdornment={
                        <InputAdornment position="end">
                            <img src={props.currencyImage} alt={`${props.currency} currency`}
                                 className={classes.imgSize}/>
                            <FormControl className={classes.formControl}>
                                <Select
                                    disableUnderline
                                    className={classes.selectEmpty}
                                    value={props.currency}
                                    onChange={props.handleChange}>
                                    {props.currenciesState.map(currency =>
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