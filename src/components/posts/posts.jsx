import React from 'react'; 

import { makeStyles } from '@material-ui/core';
import Post from './components/post';

const useStyles = makeStyles((theme) => ({
    posts: {
        display: 'flex',
        flex: 9,
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
        margin: '20px',
        paddingBottom: '30px',
    }
  }));

export default function Posts () {

    const classes = useStyles()

    return (
        <div className={classes.posts}>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
        </div>
    )
}