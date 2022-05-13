import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

export default function CardItem(props) {
    var prop = props.item;
    return (
        <Card sx={{ maxWidth: 345, borderRadius:'15%'}}>
            <CardActionArea>
                <CardMedia
                component="img"
                height="15"
                image={prop.imgURL}
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {prop.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">{prop.description}
                </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                Share
                </Button>
            </CardActions>
        </Card>
    );
}