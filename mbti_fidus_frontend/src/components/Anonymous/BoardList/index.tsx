import React from 'react'
import styled, { css } from 'styled-components';
import BodyListItem from './BodyListItem';
import { IHeaderCell, IBodyCell, IBodyRow } from './interfaces';
import HeaderItem from './HeaderItem';
import SearchBar from '../SearchBar';
import Pagination from '../Pagination';

const BoardWrapperDiv = styled.div<styleProps>`
    width : ${(props: styleProps) => props.width || '100%'};
    height: ${(props: styleProps) => props.height || '100%'};
    display:flex;
    flex-direction: column;
    box-sizing: border-box;
    box-shadow: 1px 1px 10px 0px rgba(5,5,5,0.16);
`;

const TitleDiv = styled.div`
    width: auto;
    margin: 0 auto 0 auto;
    height: 10%;
    font-size: 2rem;
    font-weight: bold;
`;

const UpperHR = styled.hr`
    width: 90%;
`;

const HeaderDiv = styled.div`
    height: 10%;
    display: flex;
    flex-direction: row;
    width: 100%;
    box-shadow: 1px 1px 10px 0px rgba(5,5,5,0.16);
`;

const TableDiv = styled.div`
    margin: 0 auto 0 auto;
    display: flex;
    flex-direction: column;
    white-space: nowrap;
    width: 90%;
    height: 70%;
`;

const BodyListDiv = styled.div`
    height: 90%;
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 10px;
    overflow: auto;
    &:-webkit-scrollbar {
        display: hidden;
    }
    box-shadow: 1px 1px 10px 0px rgba(5,5,5,0.16);
`;

const PaginationWrapper = styled.div`
    width: 100px;
    height: 5%;
    margin: 10px auto 0 auto;
    `;

const SearchBarWrapperDiv = styled.div`
    width: 90%;
    height: 5%;
    margin: 10px auto 0 auto;    
`;
interface styleProps {
    width?: string;
    height?: string;
}
interface boardListProps {
    headerItem: IHeaderCell[];
    bodyItem: IBodyRow<IBodyCell>[];
    boardName: string;
    width?: string;
    height?: string;
}

const BoardList: React.FC<boardListProps> = ({ headerItem, bodyItem, boardName, width, height }) => {
    return (
        <BoardWrapperDiv width={width} height={height}>
            <TitleDiv>{boardName}</TitleDiv>
            <UpperHR />
            <TableDiv>
                <HeaderDiv>
                    {headerItem.map((item, idx) => <HeaderItem key={idx} item={item}></HeaderItem>)}
                </HeaderDiv>
                <BodyListDiv>
                    {bodyItem.map((items, idx) => <BodyListItem key={idx} items={items} headerInfo={headerItem} />)}
                </BodyListDiv>
            </TableDiv>
            <SearchBarWrapperDiv>
                <SearchBar category={headerItem} height={'100%'} width={'100%'}></SearchBar>
            </SearchBarWrapperDiv>
            <PaginationWrapper>
                <Pagination pageIdx={1}/>
            </PaginationWrapper>
        </BoardWrapperDiv>
    );
}

export default BoardList;