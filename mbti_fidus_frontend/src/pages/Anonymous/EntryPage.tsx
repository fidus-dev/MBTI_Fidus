import React from 'react'
import styled from 'styled-components';
import BoardList from '../../components/Anonymous/BoardList';
import { entryTableBodyRowItems, entryTableHeaderItem } from '../../test/Anonymous/entryTableItem';

const WrapperDiv = styled.div`
    margin: 50px auto 0 auto;
    display: flex;
    flex-direction: column;
    width: 700px;
    `;

const CreateNewBoardButtonDiv = styled.div`
    margin-top: 15px;
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 1px 1px 10px 0px rgba(5,5,5,0.16);
    font-weight: bold;
    font-size: 2rem;
    &:hover {
        background: radial-gradient(circle, rgba(245,245,245,1) 0%, rgba(215,240,255,1) 100%);
        cursor: pointer;
    }
`;
interface EntryPageProps {

}

const EntryPage: React.FC<EntryPageProps> = ({ }) => {

    return (
        <WrapperDiv>
            <BoardList 
            headerItem={entryTableHeaderItem} 
            bodyItem={entryTableBodyRowItems}
            boardName={'익명게시판'}
            width={'100%'}
            height={'500px'}
            />
            <CreateNewBoardButtonDiv>새로운 게시판 생성</CreateNewBoardButtonDiv>
        </WrapperDiv>
    );
}

export default EntryPage;