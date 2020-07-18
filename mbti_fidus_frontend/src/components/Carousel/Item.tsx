import React, { FC } from 'react'
import styled from 'styled-components';
import { img } from './Carousel'

const ItemStyle = styled.div``;


interface ItemProps {
    source: img;
    width : string | number
}

const CarouselImg = styled.img`
    object-fit: cover;
    object-position: 50% 50%;
`;

const Item: React.FC<ItemProps> = ({ source, width }) => {
    return (
        <CarouselImg src={source} style={{width: width}} draggable='false'/>
    );
}

export default Item;