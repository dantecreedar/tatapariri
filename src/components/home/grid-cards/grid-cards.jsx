import React from 'react';
import "./grid-cards.scss";
import GridCard from './grid-card/grid-card';

const GridCards = () => {
    return (
        <>
            <div id="main" class="grid grid-cols-2 gap-1 justify-evenly">
                <GridCard />
            </div>
        </>
    )
}

export default GridCards;