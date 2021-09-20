import React from 'react'; 

import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    posts: {
        // display: 'flex',
        flex: 9,
    }
  }));

export default function Posts () {

    const classes = useStyles()

    return (
        <div className={classes.posts}>post</div>
    )
}