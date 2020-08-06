import React from 'react'
import styled, { css } from 'styled-components';
import { IHeaderCell } from './interfaces';

const HeaderDiv = styled.div`
    display:flex;
    align-content: center;
    justify-content: center;
    align-items: center;
    overflow: auto;
    font-size: 1 rem;
    font-weight: bold; 
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
        <HeaderDiv item={item}>{item.label}</HeaderDiv>
    );
}

export default HeaderItem;