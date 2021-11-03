import React from 'react';

import img from '../../assests/img/alfons-morales-YLSwjSy7stw-unsplash.jpg';

import { makeStyles, Typography } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons//Edit';

const useStyles = makeStyles((theme) => ({
    container:{
        flex: 9,
        margin: '10px',
        display: 'flex',
        justifyContent: 'center',
    },
    wrapper:{
        padding: '20px',
        paddingRight: 0
    },
    img:{
        width: '100%',
        height: '300px',
        borderRadius: '5px',
        objectFit: 'cover'
    },
    title:{
        textAlign: 'center',
        margin: '10px',
        fontSize: '50px',
    },
    icons:{
        float: 'right'
    },
    icon:{
        marginLeft: '10px',
        cursor: 'pointer',
    },
    info:{
        marginBottom: '20px',
        display: 'flex',
        justifyContent: 'space-between',
        fontSize: '16px',
        color: '#b39656'
    },
    description: {
        color: '#666',
        fontSize: '18px',
        lineHeight: '25px'
    }
}));

export default function SinglePost () {

    const classes = useStyles();

    return (
        <div className={classes.container}>
            <div className={classes.wrapper}>
                <img src={img} alt='img' className={classes.img}/>
                <Typography 
                variant="h2"
                className={classes.title}> 
                Titulo del Post 
                    <div className={classes.icons}>
                        <DeleteIcon className={classes.icon}/>
                        <EditIcon className={classes.icon}/>
                    </div>
                </Typography>
                <div className={classes.info}>
                    <Typography variant='h5'>Author: <b>Noha</b></Typography>
                    <Typography variant='h5'>Date: <b>18 de febrero</b></Typography>
                </div>
                <Typography variant="body1" color="initial" className={classes.description}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, dicta. Ex sequi soluta, voluptas eum possimus atque magni voluptates ducimus vero eius ad temporibus blanditiis quaerat autem cum nobis suscipit. 
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, dicta. Ex sequi soluta, voluptas eum possimus atque magni voluptates ducimus vero eius ad temporibus blanditiis quaerat autem cum nobis suscipit. 
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, dicta. Ex sequi soluta, voluptas eum possimus atque magni voluptates ducimus vero eius ad temporibus blanditiis quaerat autem cum nobis suscipit. 
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, dicta. Ex sequi soluta, voluptas eum possimus atque magni voluptates ducimus vero eius ad temporibus blanditiis quaerat autem cum nobis suscipit. 
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, dicta. Ex sequi soluta, voluptas eum possimus atque magni voluptates ducimus vero eius ad temporibus blanditiis quaerat autem cum nobis suscipit. 
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, dicta. Ex sequi soluta, voluptas eum possimus atque magni voluptates ducimus vero eius ad temporibus blanditiis quaerat autem cum nobis suscipit. 
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, dicta. Ex sequi soluta, voluptas eum possimus atque magni voluptates ducimus vero eius ad temporibus blanditiis quaerat autem cum nobis suscipit. 
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, dicta. Ex sequi soluta, voluptas eum possimus atque magni voluptates ducimus vero eius ad temporibus blanditiis quaerat autem cum nobis suscipit. 
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, dicta. Ex sequi soluta, voluptas eum possimus atque magni voluptates ducimus vero eius ad temporibus blanditiis quaerat autem cum nobis suscipit. 
                </Typography>
            </div>
        </div>
    )
}