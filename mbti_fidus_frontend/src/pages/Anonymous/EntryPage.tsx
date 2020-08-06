import React from 'react'
import styled from 'styled-components';
import BoardList from '../../components/Anonymous/BoardList';
import { entryTableBodyRowItems, entryTableHeaderItem } from '../../test/Anonymous/entryTableItem';

const WrapperDiv = styled.div`
    margin: auto;
    width: 700px;
    height: 700px;
    display: flex;
    flex-direction: column;
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
            />
        </WrapperDiv>
    );
}

export default EntryPage;