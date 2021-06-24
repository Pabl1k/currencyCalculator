import React from "react";
import {Button, createStyles, FormGroup, FormLabel, makeStyles, Paper, TextField, Theme} from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";
import {useFormik} from "formik";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        mainBlock: {
            position: 'absolute',
            width: 400,
            height: 420,
            left: 450,
            top: 150,
            borderRadius: 20,
            background: '#fff',
            border: '1px solid #E8E8E8',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            [theme.breakpoints.down('xs')]: {
                position: 'absolute',
                width: 350,
                height: 400,
                left: 30,
                top: 170,
                borderRadius: 20,
                background: '#fff',
                border: '1px solid #E8E8E8',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }
        },
        input: {
            width: 300,
            height: 50,
            marginTop: 50
        },
        button: {
            position: 'absolute',
            background: '#16DFB5',
            borderRadius: '4px 55px 55px 60px',
            width: 300,
            top: 330,
            color: 'white',
            '&:hover': {
                position: 'absolute',
                background: '#16DFB5',
                boxShadow: '0px 2px 2px 3px #A2FAEC',
                borderRadius: '4px 55px 55px 60px',
                color: 'white',
            },
        }
    }));

type FormikErrorType = {
    email?: string
    password?: string
}

export const SignUp = () => {
    const classes = useStyles();

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validate: values => {
            const errors = {} as FormikErrorType;

            if (!values.email) {
                errors.email = 'Email required';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address';
            }
            if (!values.password) {
                errors.password = 'Password required';
            } else if (values.password.length < 3) {
                errors.password = 'Must be 3 characters or more';
            }
            return errors;
        },
        onSubmit: values => {
            console.log(values)
            formik.resetForm();
        },
    });


    return <Paper className={classes.mainBlock}>
         <form onSubmit={formik.handleSubmit}>
            <FormControl>
                <FormLabel>
                    <p>To log in click <a href={'https://coingate.com/'} target={'_blank'} rel="noreferrer">here</a></p>
                    <p>To Sign up enter your email and password</p>
                </FormLabel>
                <FormGroup>
                    <TextField
                        label="Email"
                        margin="normal"
                        {...formik.getFieldProps("email")}
                    />

                    {
                        formik.touched.email &&
                        formik.errors.email
                        && <div style={{color: 'red'}}>{formik.errors.email}</div>
                    }
                    <TextField
                        type="password"
                        label="Password"
                        margin="normal"
                        {...formik.getFieldProps("password")}
                    />

                    {
                        formik.touched.password &&
                        formik.errors.password
                        && <div style={{color: 'red'}}>{formik.errors.password}</div>
                    }
                    <Button type={'submit'} variant={'contained'} className={classes.button}>Sign Up</Button>
                </FormGroup>
            </FormControl>
         </form>
    </Paper>
}