import React from 'react'; 

import Sidebar from '../../components/sidebar/sidebar';
import SinglePost from '../../components/singePost/singlePost';

import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    container:{
        display: 'flex',
    }
  }));

export default function SinglePage () {

    const classes = useStyles();

    return (
        <div className={classes.container}>
            <SinglePost/>
            <Sidebar/>
        </div>
    )
}