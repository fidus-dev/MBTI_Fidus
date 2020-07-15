import React, { FC } from 'react';
import CarouselViewport from './CarouselViewport';
import Item from './Item';
export type img = any;

interface CarouselProps {
    imageArray: img[],
}

const Carousel: React.FC<CarouselProps> = ({ imageArray }) => {
    return (
        <CarouselViewport>
            {imageArray.map(image => <Item source={image}/>)}
        </CarouselViewport>
    );
}

export default Carousel;