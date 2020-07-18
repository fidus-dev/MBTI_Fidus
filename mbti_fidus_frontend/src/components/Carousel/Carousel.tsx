import React, { useState } from 'react';
import Item from './Item';
import styled from 'styled-components';
import RightArrowArea from './RightArrowArea';
import LeftArrowArea from './LeftArrowArea';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import useWindowDemensions from '../../hooks/useWindowDemensions';
import CarouselViewport from './CarouselViewport';
export type img = any;

interface CarouselProps {
    imageArray: img[],
    width?: string | number
}

type ArrowClickDirection = 'left' | 'right' ;

const CarouselWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
`;

// const CarouselViewport = styled.div`
//     display: flex;
//     flex-direction: row; 
//     width: 100%;
//     height: 100%;
//     z-index: -1;
//     transition-duration: 0.5s;
// `;

/**
 * 
 * @notice parent의 height 값이 반드시 지정되어 있어야 함 
 * @notice width 값을 props로 내려 주지 않으면 홈페이지 전체의 viewport width를 넣어줌 - useWindowsDemension Custom Hook 참조  
 */
const Carousel: React.FC<CarouselProps> = ({ imageArray, width = undefined }) => {

    const [imageIdx, setImageIdx] = useState(0);

    const handleArrowClick = (direction : ArrowClickDirection) => () => {
        let nextIdx: number;
        switch (direction) {
            case 'left':
                nextIdx = imageIdx !== imageArray.length - 1 ? imageIdx + 1 : 0;
                break;
            case 'right': 
                nextIdx = imageIdx !== 0 ? imageIdx - 1 : imageArray.length - 1;
                break;
        }
        setImageIdx(nextIdx);
    };

    const _width  = width ? width : useWindowDemensions().width;

    return (
        <CarouselWrapper>
            <LeftArrowArea handleClick={handleArrowClick('left')}><IoIosArrowBack size="100%" color='lightgray'/></LeftArrowArea>
            <RightArrowArea handleClick={handleArrowClick('right')}><IoIosArrowForward size="100%" color='lightgray'/></RightArrowArea>
            <CarouselViewport viewportWidth={_width as number * imageArray.length} imageWidth={_width as number} imageIdx={imageIdx} >
                {imageArray.map((image, key) => (<Item source={image} width={_width} key={key} />))}
            </CarouselViewport>
        </CarouselWrapper>
    );
}

export default Carousel;