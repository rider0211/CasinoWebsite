import React, { useState } from 'react';
import Item from './CardItem';
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
            imgURL : "/static/img/offerwall/battle.png",
            name: "Battle Car",
            description: "Install and reach out at 10 levels"
        },{
            imgURL : "/static/img/offerwall/car.png",
            name: "Motor Car",
            description: "Install and reach out at 10 levels"
        },{
            imgURL : "/static/img/offerwall/search.png",
            name: "Scientific Research",
            description: "Install and reach out at 10 levels"
        },{
            imgURL : "/static/img/offerwall/world.png",
            name: "World War |||",
            description: "Install and reach out at 10 levels"
        },{
            imgURL : "/static/img/offerwall/rollete.png",
            name: "Rollete",
            description: "Install and reach out at 10 levels"
        },
    ]
    return (
        
        <ItemsCarousel
            requestToChangeActive={setActiveItemIndex}
            activeItemIndex={activeItemIndex}
            numberOfCards={3}
            gutter={2}
            leftChevron={<IconButton color="primary" aria-label="add to shopping cart"><KeyboardArrowLeftIcon /></IconButton>}
            rightChevron={<IconButton color="primary" aria-label="add to shopping cart"><ChevronRightIcon /></IconButton>}
            outsideChevron
            chevronWidth={chevronWidth}
        >
            {
                items.map( (item, i) => <Item key={i} item={item} />)
            }
        </ItemsCarousel>
    )
}

export default Index;