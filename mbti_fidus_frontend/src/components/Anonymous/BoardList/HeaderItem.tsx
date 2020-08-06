import React from 'react'
import styled, { css } from 'styled-components';
import { IHeaderCell } from './interfaces';

const HeaderDiv = styled.div`
    display:flex;
    align-content: center;
    justify-content: center;
    overflow: auto;
    & + & {
        border-left: 1px dashed black; 
    }
    &::-webkit-scrollbar {
        display: none;
    }
    height: 100%;
    width : ${(props: HeaderItemProps) => props.item.width || '30%'};
`;

interface HeaderItemProps {
    item: IHeaderCell
}

const HeaderItem: React.FC<HeaderItemProps> = ({ item }) => {
    return (
        <HeaderDiv item={item}><h3>{item.label}</h3></HeaderDiv>
    );
}

export default HeaderItem;