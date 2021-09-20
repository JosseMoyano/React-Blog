import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import React from 'react'; 
import Header from '../../components/header/header.jsx'
import Posts from '../../components/posts/posts.jsx';
import Sidebar from '../../components/sidebar/sidebar.jsx';

const useStyles = makeStyles((theme) => ({
    offset: {
        marginTop: '250px'
    },
    container :{
        display:'flex',
        '& .MuiContainer-maxWidthLg' : {
            maxWidth: 'inherit'
        }

    },
  }));

export default function Home () {

    const classes = useStyles()

    return (
        <>
        <Header/>
        <div className={classes.offset}></div>
        <Container className={classes.container}>
            <Posts/>
            <Sidebar/>
        </Container>
        </>
    )
}