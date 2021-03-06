import React from 'react'; 
import ElevationScroll from './components/elevationScroll';
import { useHistory } from 'react-router-dom';

import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import InputBase from '@material-ui/core/InputBase';

import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import PinterestIcon from '@material-ui/icons/Pinterest';
import InstagramIcon from '@material-ui/icons/Instagram';
import SearchIcon from '@material-ui/icons/Search';
import { Avatar } from '@material-ui/core';

ElevationScroll.propTypes = {
    children: PropTypes.element.isRequired,
    window: PropTypes.func,
};

const useStyles = makeStyles((theme) => ({
    rootAvatar: {
        display: 'flex',
        '& > *': {
          margin: theme.spacing(1),
        },
      },
    appbar: {
      // '& MuiAppBar-colorPrimary':{
        backgroundColor: '#F8EDEB',
        color: 'black'
      // }
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: 'white',
      // '&:hover': {
      //   backgroundColor: '#E8E8E4',
      // },
      // backgroundColor: alpha(theme.palette.common.white, 0.15),
      // '&:hover': {
      //   backgroundColor: alpha(theme.palette.common.white, 0.25),
      // },
      marginRight: theme.spacing(2),
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
    buttonMenu:{
        width: '50%',
        display: 'flex',
        justifyContent: 'center',
    },
    buttonRedes:{
        width: '15%',
        display: 'flex',
        justifyContent: 'space-around',
        marginLeft: 0,
        paddingLeft: 0,
    },
    
  }));

export default function Nav (props) {

    const classes = useStyles();
    const user = false; 
    const history = useHistory()

    return (
        <>
            <CssBaseline />
            <ElevationScroll {...props}>
                <AppBar >
                    <Toolbar className={classes.appbar}>
                        <Container className={classes.buttonRedes}>
                            <FacebookIcon/>
                            <TwitterIcon/>
                            <PinterestIcon/>
                            <InstagramIcon/>
                        </Container>
                        <Container className={classes.buttonMenu}>
                            <Button color="inherit" onClick={()=> history.push('/')}>Home</Button>
                            <Button color="inherit">About</Button>
                            <Button color="inherit">Contact</Button>
                            <Button color="inherit" onClick={()=> history.push('/write')}>Write</Button>
                            { user ? <Button color="inherit">LogOut</Button> : null}
                            
                        </Container>
                            
                            {
                              user ? (
                                <>
                                  <div className={classes.search}>
                                    <div className={classes.searchIcon}>
                                      <SearchIcon />
                                    </div>
                                    <InputBase
                                    placeholder="Search???"
                                    classes={{
                                      root: classes.inputRoot,
                                      input: classes.inputInput,
                                    }}
                                    inputProps={{ 'aria-label': 'search' }}
                                    />
                                  </div>
                                  <div className={classes.rootAvatar}>
                                    < Avatar alt="User" src='' />
                                  </div> 
                                </>
                              ) : (
                                <>
                                <div className={classes.search}>
                                    <div className={classes.searchIcon}>
                                      <SearchIcon />
                                    </div>
                                    <InputBase
                                    placeholder="Search???"
                                    classes={{
                                      root: classes.inputRoot,
                                      input: classes.inputInput,
                                    }}
                                    inputProps={{ 'aria-label': 'search' }}
                                    />
                                  </div>
                                  <Button color="inherit" onClick={()=> history.push('/login')}>Login</Button>
                                  <Button color="inherit" onClick={()=> history.push('/register')}>Register</Button>
                                </>
                              )
                            }
                               
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
            <Toolbar />
        </>
    )
}