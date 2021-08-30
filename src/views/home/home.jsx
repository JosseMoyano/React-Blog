import { makeStyles } from '@material-ui/styles';
import React from 'react'; 
import Header from '../../components/header/header.jsx'

const useStyles = makeStyles((theme) => ({
    offset: {
        marginTop: '250px'
    }
  }));

export default function Home () {
    const classes = useStyles()
    return (
        <>
        <Header/>
        <div className={classes.offset}></div>
        Home
        </>
    )
}