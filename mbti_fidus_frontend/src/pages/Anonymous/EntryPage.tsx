import React from 'react'
import styled from 'styled-components';
import BoardList from '../../components/Anonymous/boardList';
import SearchBar from '../../components/Anonymous/SearchBar';

const WrapperDiv = styled.div`
    margin: auto;
    width: 1000px;
    height: 1000px;
    display: flex;
    flex-direction: column;
    `;

interface EntryPageProps {

}

const EntryPage: React.FC<EntryPageProps> = ({ }) => {
    return (
        <WrapperDiv>
            <BoardList/>
            <SearchBar/>
        </WrapperDiv>
    );
}

export default EntryPage;