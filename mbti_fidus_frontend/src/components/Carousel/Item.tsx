import React, { FC } from 'react'
import styled from 'styled-components';
import { img } from './Carousel'

const ItemStyle = styled.div``;


interface ItemProps {
    source: img
}

const Item: React.FC<ItemProps> = ({ source }) => {
    return (
        <img src={source} />
    );
}

export default Item;