import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

export default function MediaControlCard(props) {
    const theme = useTheme();
    const prop = props.item;
    return (
        <Box my={3} sx={{boxShadow: '0px 0px 50px 18px rgb(73 46 165 / 57%)'}}>
            <Card sx={{ display: 'flex',}}>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography component="div" variant="h5">
                        {prop.name}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" component="div">
                        Mac Miller
                    </Typography>
                    </CardContent>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent:'center', pl: 1, pb: 1 }}>
                    <IconButton aria-label="play/pause">
                        <PlayArrowIcon sx={{ height: 38, width: 38 }} />
                    </IconButton>
                    </Box>
                </Box>
                <CardMedia
                    component="img"
                    sx={{ width: '100%', height:186 }}
                    image={prop.imgURL}
                    alt="Live from space album cover"
                />
            </Card>
        </Box>
    );
}