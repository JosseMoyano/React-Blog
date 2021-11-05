import React from 'react'; 

import Container  from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/styles';
import { Typography } from '@material-ui/core';

import img from '../../assests/img/retrosupply-jLwVAUtLOAQ-unsplash.jpg'

const useStyles = makeStyles((theme) => ({
    img:{    
        width: '100%',
        marginTop: '-500px',
        // objectFit: 'cover'
    },
    titulo:{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '-27%',
        color: 'black',
        backgroundColor: '#d8e2dc69',
        width: 'auto',
        borderRadius: '30px'
    },
    container:{
        margin: 0,
        padding: 0,
        width: '100%',
        maxWidth: 'inherit',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
    }
  }));

export default function Header () {

    const classes = useStyles();

    return (
        <Container className={classes.container}>
            <img src={img} alt='IMG Header' className={classes.img} />
            <Container className={classes.titulo}>
                <Typography variant="h1" color="initial">React & Node</Typography>
                <Typography variant="h2" color="initial">Blog</Typography>
            </Container>
        </Container>
    )
}