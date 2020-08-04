import React from 'react'
import styled, { css } from 'styled-components';
import BoardListItem from './BoardListItem';

const BoardWrapperDiv = styled.div`
    width : 100%;
    height: 100%;
    display:flex;
    flex-direction: column;
    box-sizing: border-box;
    box-shadow: 1px 1px 10px 0px rgba(5,5,5,0.16);
`;

const TitleDiv = styled.div`
    width: auto;
    margin: 0 auto 0 auto;
    height: 10%;
`;

const UpperHR = styled.hr`
    width: 90%;
`;

const ListContainerDiv = styled.div`
    height: 90%;
    width: 90%;
    display: flex;
    flex-direction: column;
`;


interface boardListProps {

}

const BoardList: React.FC<boardListProps> = ({ }) => {
    return (
        <BoardWrapperDiv>
            <TitleDiv><h3>익명게시판</h3></TitleDiv>
            <UpperHR />
            <ListContainerDiv>
                <BoardListItem/>
                <BoardListItem/>
                <BoardListItem/>
                <BoardListItem/>
            </ListContainerDiv>
        </BoardWrapperDiv>
    );
}

export default BoardList;