import React from 'react'; 
import { useHistory } from 'react-router-dom';

import { Button, createTheme, makeStyles, TextField, Typography } from '@material-ui/core';
import Box from '@mui/material/Box';

// import img from '../../assests/img/kelly-sikkema-Rq1MLxP5RgI-unsplash.jpg'
import img from '../../assests/img/joanna-kosinska-7ACuHoezUYk-unsplash.jpg'
import { ThemeProvider } from '@material-ui/core/styles';


const theme = createTheme({
	palette: {
		primary: {
			main: '#FEC89A',
			light: '#ffc4ff',
			dark: '#9c64a6',
			contrastText: '#fff',
		},
		secondary: {
			main: '#FEC89A',
			light: '#ffc4ff',
			dark: '#9c64a6',
			contrastText: '#fff',
		},
	},
    overrides:{
        MuiFilledInput:{
            root:{
                backgroundColor: 'white'
            }
        },
        MuiTextField:{
            root:{
                backgroundColor: 'white'
            }
        }
    }
});

const useStyles = makeStyles((theme) => ({
    register:{
        height: 'calc(100vh - 64px)',
        display: 'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        background: `linear-gradient(rgba(255, 255, 255, 0.5),rgba(255,255,255,0.5)),url(${img})`,
        backgroundSize:'cover'
    },
    registerTitle:{
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
    loginboton:{
        position: 'absolute',
        top: '80px',
        right: '20px'
    },
    registerForm:{
        // backgroundColor: '#F8EDEB'
    }
}));

export default function Register () {

    const classes = useStyles();
    const history = useHistory()


    return (
        <ThemeProvider theme={theme}>

        <div className={classes.register}>
            <Typography variant="h4" color="initial" className={classes.registerTitle}>Register</Typography>
            <Box
            component="form"
            sx={{'& .MuiTextField-root': { m: 1},}}
            noValidate
            autoComplete="off"
            className={classes.registerForm}>
                <div>
                    <TextField
                    variant="filled"
                    label="Username"
                    type='text'
                    // placeholder="Enter your Username..."
                    />  
                </div>
                <div>
                    <TextField
                    variant="filled"
                    label="Email"
                    type='email'
                    // placeholder="Enter your email..."
                    />  
                </div>
                <div>
                    <TextField
                    variant="filled"
                    label="Password"
                    type='password'
                    // placeholder="Enter your password..."
                    />  
                </div>
                <div className={classes.boton}>
                    <Button variant="outlined" style={{width: '94%', backgroundColor: '#FEC89A', color: 'black'}}>Register</Button>
                </div>
            </Box>
            <div className={classes.loginboton}>
                <Button variant="outlined" onClick={()=> history.push('/login')} style={{width: '94%', backgroundColor: '#FEC5BB', color: 'black'}}>Login</Button>
            </div>
        </div>
        </ThemeProvider>
    )
}