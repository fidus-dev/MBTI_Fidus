import React from 'react'
import styled from 'styled-components';
import BoardList from '../../components/Anonymous/boardList';
import SearchBar from '../../components/Anonymous/SearchBar';
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
            <BoardList headerItem={entryTableHeaderItem} bodyItem={entryTableBodyRowItems}/>
            <SearchBar />
        </WrapperDiv>
    );
}

export default EntryPage;