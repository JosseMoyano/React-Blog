import React from 'react'; 
import img from '../../../assests/img/green-chameleon-s9CC2SKySJM-unsplash.jpg';
import { Card, CardActionArea, CardContent, CardMedia, makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    posts: {
        // display: 'flex',
        flex: 9,
    },
    card: {
        width: '400px',
        margin: '15px',
    }
  }));

export default function Post () {

    const classes = useStyles()

    return (
        <Card 
        sx={{ maxWidth: 345 }}
        className={classes.card}>
            <CardActionArea>
                <CardMedia
                component="img"
                // height="300"
                image={img}
                alt="green iguana" />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Titulo
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Lizards are a widespread group of squamate reptiles, with over 6,000
                      species, ranging across all continents except Antarctica
                    </Typography>
                    <br/>
                    <Typography variant="body2" color="text.secondary">
                      fecha
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}