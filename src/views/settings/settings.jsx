import React from 'react'; 

import { Button, makeStyles, TextField, Typography } from '@material-ui/core';
import Box from '@mui/material/Box';

import Sidebar from '../../components/sidebar/sidebar';
import img from '../../assests/img/alfons-morales-YLSwjSy7stw-unsplash.jpg'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const useStyles = makeStyles((theme) => ({
    settings:{
        display: 'flex',
    },
    wrapper:{
        flex: 9,
        padding: '20px'
    },
    title:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: '15px',
        marginTop: '10px'
    },
    updateTitle:{
        marginBottom: '20px',
        color: 'lightcoral',
        fontSize:'28px'
    },
    delete:{
        color: 'red',
        cursor:'pointer',
        fontSize:'15px'

    },
    form:{
        display:'flex',
        flexDirection:'column'
    },
    pp:{
        display: 'flex',
        alignItems: 'center',
        margin: '10px 0'
    },
    img:{
        width: '70px',
        height:'70px',
        borderRadius: '20px',
        objectFit: 'cover'
    },
    button:{
        width: '100%',
        display:'flex',
        alignContent:'center',
        justifyContent:'center',
        marginTop: '25px'
    }
  }));

export default function Settings () {

    const classes = useStyles();

    return (
        
        <div className={classes.settings}>
            <div className={classes.wrapper}>
                <div className={classes.title}>
                    <Typography variant="h5" className={classes.updateTitle}>Update Your Account</Typography>
                    <Typography variant="h5" className={classes.delete}>Delete Account</Typography>
                </div>
                    <Box
                    component="form"
                    sx={{'& .MuiTextField-root': { m: 1, width: '100%' },}}
                    noValidate
                    autoComplete="off"
                    className={classes.form}>
                        <div>
                            <label>Profile Picture</label>
                            <div className={classes.pp}>
                                <img src={img} alt='userImg' className={classes.img}/>
                                <label htmlFor='fileInput'>
                                    <div>
                                        <AccountCircleIcon style={{cursor: 'pointer', marginLeft: '10px'}}/>
                                    </div>
                                </label>
                                <input type='file' id='fileInput' style={{display:'none'}}/>
                            </div>
                        </div>
                        <TextField
                        // id="outlined-required"
                        label="Username"
                        placeholder="Josse"
                        />  
                        <div>
                            <TextField
                            // id="outlined-required"
                            label="Email"
                            type="email"
                            placeholder="josse.moyano@gmail.com"
                            />  
                        </div>
                        <div>
                            <TextField
                            // id="outlined-required"
                            label="Password"
                            type="password"
                            />  
                        </div>
                        <div className={classes.button}>
                            <Button variant="outlined">Update</Button>
                        </div>
                </Box>
            </div>
            <Sidebar/>
        </div>
    )
}