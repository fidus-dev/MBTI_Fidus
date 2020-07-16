import React, { FC } from 'react';
import Item from './Item';
import styled from 'styled-components';
export type img = any;

interface CarouselProps {
    imageArray: img[],
}

const CarouselWrapper = styled.div`
`;

const CarouselViewport = styled.div`
     display: inline-grid;
     grid-template-rows: 100%;
     width: 100%;
`;

const LeftArrowDiv = styled.div`
    height: 100%;
    width: 10%;
    position: absolute;
`;

const RightArrowDiv = styled.div`
    height: 100%;
    width: 10%;
    position: absolute;
`;

const Carousel: React.FC<CarouselProps> = ({ imageArray }) => {
    return (
        <CarouselWrapper>
            <CarouselViewport>
                {imageArray.map((image, key) => (<Item source={image} key={key} />))}
            </CarouselViewport>
            <LeftArrowDiv />
            <RightArrowDiv />
        </CarouselWrapper>
    );
}

export default Carousel;