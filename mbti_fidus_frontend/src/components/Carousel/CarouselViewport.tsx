import React from 'react'
import styled from 'styled-components';

const ViewportDiv = styled.div`
    display: flex;
    flex-direction: row; 
    width: 100%;
    height: 100%;
    z-index: -1;
    transition-duration: 0.5s;
`;

interface CarouselViewportProps {
    children: React.ReactNode;
    viewportWidth: number | string;
    imageIdx: number;
    imageWidth: number;
}

const CarouselViewport: React.FC<CarouselViewportProps> = ({ children, viewportWidth, imageIdx, imageWidth }) => {
    return (
        <ViewportDiv style={{
            width: viewportWidth,
            transform: `translateX(${imageWidth as number * imageIdx * -1})`
            }}>{children}</ViewportDiv>
    );
}

export default CarouselViewport;