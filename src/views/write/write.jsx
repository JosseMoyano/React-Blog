import React from 'react'; 

// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';
import AddIcon from '@material-ui/icons/Add';
import { Box } from '@mui/system';
import { createTheme, makeStyles, TextField } from '@material-ui/core';
import Button from '@mui/material/Button';
import { ThemeProvider } from '@material-ui/core/styles';

import img from '../../assests/img/alfons-morales-YLSwjSy7stw-unsplash.jpg'

const theme = createTheme({
	palette: {
		primary: {
			main: '#FEC5BB',
			light: '#ffc4ff',
			dark: '#9c64a6',
			contrastText: '#fff',
		},
		secondary: {
			main: '#FEC5BB',
			light: '#ffc4ff',
			dark: '#9c64a6',
			contrastText: '#fff',
		},
	},
});

const useStyles = makeStyles((theme) => ({
    form: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center',
        margin: '250px',
        marginTop: '50px',
        marginBottom: '50px',
        backgroundColor: '#f8edeb85',
        padding:' 15px',
        borderRadius: '15px',    
    },
    containerTitle: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: '25px',
    },
    title:{
        marginLeft: '15px',

    },
    button:{
        marginTop: '25px',
        display: 'flex',
        justifyContent: 'center',
    },
        
    img: {
        height: '250px',
        borderRadius: '10px',
        objectFit: 'cover', //none
        width: '100%',
        marginBottom: '25px'
    },
    textfield:{
        color: '#F8EDEB'
    }
}));

export default function Write () {

    const classes = useStyles();

    return (
        <ThemeProvider theme={theme}>
        <Box
        component="form"
        sx={{
            maxWidth: '100%', }}
            className={classes.form}
        >
        <div>
            <img src={img} alt='img' className={classes.img} />
        </div>
        <div className={classes.containerTitle}>
            <label htmlFor="fileInput">
                <AddIcon style={{marginTop: '19px'}}/>
            </label>
            <input type='file' id='fileInput' style={{display:'none'}} />
            <TextField fullWidth  id="standard-basic" label="Title" variant="standard" className={classes.title} />
        </div>
        <div>
            <TextField
               fullWidth
               id="outlined-textarea"
               label="Contenido"
               placeholder="Contenido"
               multiline
               />
        </div>
        <div className={classes.button}>
            <Button variant="contained" style={{backgroundColor: '#FEC89A', color: 'black'}} >Publicar</Button>
        </div>
      </Box>
      </ThemeProvider>
    )
}