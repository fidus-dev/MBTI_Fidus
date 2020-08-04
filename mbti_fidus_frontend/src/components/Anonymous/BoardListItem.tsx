import React from 'react'
import styled, { css } from 'styled-components';

const ItemWrapperDiv = styled.div`
    width: 100%;
    height: 30px;
    margin: 0 auto 0 auto;
    display: flex;
    flex-direction: row;
    background-color: lightgray;
    &:nth-child(2n) {
        background-color: gray;
    }
`;


interface BoardListItemProps {

}

const BoardListItem: React.FC<BoardListItemProps> = ({ }) => {
    return (
        <ItemWrapperDiv></ItemWrapperDiv>
    );
}

export default BoardListItem;