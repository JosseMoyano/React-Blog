import React from 'react'; 

// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';
import AddIcon from '@material-ui/icons/Add';
import { Box } from '@mui/system';
import { makeStyles, TextField } from '@material-ui/core';
import Button from '@mui/material/Button';


const useStyles = makeStyles((theme) => ({
    form: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center',
        margin: '250px',
        marginTop: '50px',
        marginBottom: '50px',
    },
    containerTitle: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: '25px',
    },
    title:{
        marginLeft: '15px'
    },
    button:{
        marginTop: '25px',
        display: 'flex',
        justifyContent: 'center'
    }
}));

export default function Write () {

    const classes = useStyles();

    return (
        <Box
        component="form"
        sx={{
            maxWidth: '100%', }}
            className={classes.form}
        >
        <div className={classes.containerTitle}>
            <label htmlFor="fileInput">
                <AddIcon style={{marginTop: '19px'}}/>
            </label>
            <input type='file' id='fileInput' style={{display:'none'}} />
            <TextField fullWidth  id="standard-basic" label="Title" variant="standard" className={classes.title}/>
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
            <Button variant="contained" >Publicar</Button>
        </div>
      </Box>
    )
}