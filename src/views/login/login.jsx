import React from 'react'; 

import { Button, makeStyles, TextField, Typography } from '@material-ui/core';
import Box from '@mui/material/Box';

import img from '../../assests/img/joanna-kosinska-7ACuHoezUYk-unsplash.jpg'



const useStyles = makeStyles((theme) => ({
    login:{
        height: 'calc(100vh - 64px)',
        display: 'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        background: `linear-gradient(rgba(255, 255, 255, 0.5),rgba(255,255,255,0.5)),url(${img})`,
        backgroundSize:'cover'
    },
    loginTitle:{
        marginBottom: '15px',
        fontSize: '50px'
    },
    boton:{
        marginTop: '15px',
        display: 'flex',
        alignItems:'center',
        justifyContent:'center',
        width:'100%'
    },
    registerboton:{
        position: 'absolute',
        top: '80px',
        right: '20px'
    }
}));

export default function Login () {

    const classes = useStyles();

    return (
        <div className={classes.login}>
            <Typography variant="h4" color="initial" className={classes.loginTitle}>Login</Typography>
            <Box
            component="form"
            sx={{'& .MuiTextField-root': { m: 1},}}
            noValidate
            autoComplete="off"
            className={classes.loginForm}>
                <div>
                    <TextField
                    variant="filled"
                    label="Email"
                    placeholder="Enter your email..."
                    />  
                </div>
                <div>
                    <TextField
                    variant="filled"
                    label="Password"
                    placeholder="Enter your password..."
                    />  
                </div>
                <div className={classes.boton}>
                    <Button variant="outlined" style={{width: '94%'}}>Login</Button>
                </div>
            </Box>
            <div className={classes.registerboton}>
                <Button variant="outlined">Resgiter</Button>
            </div>
        </div>
    )
}