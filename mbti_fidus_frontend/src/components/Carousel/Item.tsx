import React, { FC } from 'react'
import styled from 'styled-components';
import { img } from './Carousel'

const ItemStyle = styled.div``;


interface ItemProps {
    source: img
}

const CarouselImg = styled.img`
    width: 100%;
    object-fit: cover;
    object-position: 50% 50%;
`;

const Item: React.FC<ItemProps> = ({ source }) => {
    return (
        <CarouselImg src={source} draggable='false'/>
    );
}

export default Item;