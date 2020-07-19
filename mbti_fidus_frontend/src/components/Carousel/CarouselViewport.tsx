import React from 'react'
import styled from 'styled-components';

const ViewportDiv = styled.div`
    display: flex;
    flex-direction: row; 
    z-index: -1;
    transition-duration: 0.5s;
    transform : translateX(var(--carousel-translate-x));
`;

interface CarouselViewportProps {
    children: React.ReactNode;
    viewportWidth: number | string;
    imageIdx: number;
    imageWidth: number;
    imageHeight: number;
}

const CarouselViewport: React.FC<CarouselViewportProps> = ({ children, viewportWidth, imageIdx, imageWidth, imageHeight }) => {
    const style = document.documentElement.style;
    style.setProperty('--carousel-translate-x', (imageWidth as number * imageIdx * -1).toString() + 'px');
    return (
        <ViewportDiv style={{
            width: viewportWidth,
            height: imageHeight
            }}>{children}</ViewportDiv>
    );
}

export default CarouselViewport;