import React, { FC } from 'react';
import Item from './Item';
import styled from 'styled-components';
import RightArrowArea from './RightArrowArea';
import LeftArrowArea from './LeftArrowArea';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
export type img = any;

interface CarouselProps {
    imageArray: img[],
}

const CarouselWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
`;

const CarouselViewport = styled.div`
    display: inline-grid;
    grid-template-rows: 100%;
    width: 100%;
    height: 100%;
    z-index: -1;
`;


/**
 * 
 * @notice parent의 height 값이 반드시 지정되어 있어야 함 
 */
const Carousel: React.FC<CarouselProps> = ({ imageArray }) => {
    return (
        <CarouselWrapper>
            <LeftArrowArea><IoIosArrowBack size="100%" color='lightgray'/></LeftArrowArea>
            <RightArrowArea><IoIosArrowForward size="100%" color='lightgray'/></RightArrowArea>
            <CarouselViewport>
                {imageArray.map((image, key) => (<Item source={image} key={key} />))}
            </CarouselViewport>
        </CarouselWrapper>
    );
}

export default Carousel;