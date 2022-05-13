import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import Divider from '@mui/material/Divider';
import MUIDataTable from "mui-datatables";

export default function MediaControlCard() {
  const theme = useTheme();
  const columns = ["Name", "Game", "Multiply", "Profit"];

  const data = [
    ["Gabby George", "Crash", 30, "$100,000"],
    ["Aiden Lloyd", "Crash", 55, "$200,000"],
    ["Jaden Collins", "Tower", 27, "$500,000"],
  ];

  const options = {
    filterType: "dropdown",
    responsive: "standard"
  };
  return (
    <Box padding={'10px'} sx={{backgroundColor:'#311b92', borderRadius:'60px'}}>
        <Card sx={{ display: 'flex', borderRadius:'50px', border:'solid 9px #1b104e' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography component="div" variant="h5">
                        Top Winner Game
                    </Typography>
                    <CardMedia
                        component="img"
                        sx={{ width: 300, height:200 , borderRadius:'10px', boxShadow:10,margin:1}}
                        image="/static/img/crash-game-main.png"
                        alt="Live from space album cover"
                    />
                    <Typography variant="subtitle1" color="text.secondary" component="div">
                        Crash Game
                    </Typography>
                </CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent:'center', pl: 1, pb: 1 }}>
                    <IconButton aria-label="play/pause">
                        <PlayArrowIcon sx={{ height: 38, width: 38 }} />
                    </IconButton>
                </Box>
            </Box>
            <Divider orientation="vertical" flexItem></Divider>
            <MUIDataTable
                title={"Top Winners"}
                data={data}
                columns={columns}
                options={options}
            />
        </Card>
    </Box>
  );
}