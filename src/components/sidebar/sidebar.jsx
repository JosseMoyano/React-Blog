import React from 'react'; 

import IMGPost from '../../assests/img/diego-ph-fIq0tET6llw-unsplash.jpg'

import { Container, makeStyles, Typography } from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import PinterestIcon from '@material-ui/icons/Pinterest';
import InstagramIcon from '@material-ui/icons/Instagram';

const useStyles = makeStyles((theme) => ({
    sidebar: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        flex: 3,
        margin: '20px',
        paddingBottom: '30px',
        backgroundColor: '#f8edeb85',
        borderRadius: '20px',
        padding: '8px'
    },
    items: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    title: {
        margin:'10px',
        padding:'5px',
        width: '80%',
        borderTop: '1px solid #a7a4a4',
        borderBottom: '1px solid #a7a4a4',
        // fontSize: '12px',
        // color: '#222',
        // fontWeight: '600',
        textAlign: 'center'
    },
    buttonRedes:{
        width: '15%',
        display: 'flex',
        justifyContent: 'space-around',
        marginLeft: 0,
        paddingLeft: 0,
    },
    img:{
        maxWidth: '200px',
        marginTop: '15px',
    },
    list:{
        listStyle: 'none',
        marginBottom: '30px'
    },
    item:{
        display: 'inline-block',
        width: '50%',
        marginTop: '15px',
        cursor: 'pointer',
    },
    social:{
        marginTop: '15px',
        width: '250px',
        display:'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    icon:{
        marginLeft: '10px',
        cursor: 'pointer',

    }
  }));

export default function Sidebar () {

    const classes = useStyles()

    return (
        <Container className={classes.sidebar}>
            <Container className={classes.items}>
                <Typography variant="subtitle1" color="initial" className={classes.title}>ABOUT</Typography>
                <img src={IMGPost} alt={'imagen'} className={classes.img}/>
                <Typography variant="body1" color="initial" style={{padding:'30px'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident cupiditate molestiae consectetur repellat libero facilis pariatur harum eveniet illo optio sint quas accusantium delectus voluptate tempore incidunt, hic dolores mollitia.</Typography>
            </Container>
            <Container className={classes.items}>
                <Typography variant="subtitle1" color="initial" className={classes.title}>CATEGORIES</Typography>
                <ul className={classes.list}>
                    <li className={classes.item}>Life</li>
                    <li className={classes.item}>Music</li>
                    <li className={classes.item}>Style</li>
                    <li className={classes.item}>Sport</li>
                    <li className={classes.item}>Tech</li>
                    <li className={classes.item}>Cinema</li>
                </ul>
            </Container>
            <Container className={classes.items}>
                <Typography variant="subtitle1" color="initial" className={classes.title}>FOLLOW US</Typography>
                <div className={classes.social}>
                    <FacebookIcon className={classes.icon}/>
                    <TwitterIcon className={classes.icon}/>
                    <PinterestIcon className={classes.icon}/>
                    <InstagramIcon className={classes.icon}/>
                </div>
            </Container>
        </Container>
    )
}