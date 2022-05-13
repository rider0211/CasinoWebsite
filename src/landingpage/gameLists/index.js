import React, { useState } from 'react';
import GameItem from './GameItem';
import { IconButton  } from '@mui/material';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ItemsCarousel from 'react-items-carousel';
import 'react-awesome-slider/dist/styles.css';
function Index (props){
    const [activeItemIndex, setActiveItemIndex] = useState(0);
    const chevronWidth = 40;
    var items = [
        {
            imgURL : "/static/img/crash-game-main.png",
            name: "Crash Game",
            url: "/crashGame"
        },{
            imgURL : "/static/img/crash-game-main.png",
            name: "Tower Game",
            url: "/towerGame"
        },{
            imgURL : "/static/img/crash-game-main.png",
            name: "Mine Game",
            url: "/mineGame"
        },{
            imgURL : "/static/img/crash-game-main.png",
            name: "Plink Game",
            url: "/plinkGame"
        },
    ]
    return (
        
            <>
                {
                    items.map( (item, i) => <GameItem key={i} item={item} />)
                }
            </>
    )
}

export default Index;