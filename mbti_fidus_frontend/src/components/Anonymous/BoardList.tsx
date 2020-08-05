import React from 'react'
import styled, { css } from 'styled-components';
import BodyListItem from './BodyListItem';
import { IHeaderCell, IBodyCell, IBodyRow } from './interfaces';
import HeaderItem from './HeaderItem';

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

const HeaderDiv = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
`;

const TableDiv = styled.div`
    margin: 0 auto 0 auto;
    display: flex;
    flex-direction: column;
    white-space: nowrap;
    width: 90%;
`;

const BodyListDiv = styled.div`
    height: 90%;
    width: 100%;
    display: flex;
    flex-direction: column;
    box-shadow: 1px 1px 10px 0px rgba(5,5,5,0.16);
`;


interface boardListProps {
    headerItem: IHeaderCell[];
    bodyItem: IBodyRow<IBodyCell>[];
}

const BoardList: React.FC<boardListProps> = ({ headerItem, bodyItem }) => {
    return (
        <BoardWrapperDiv>
            <TitleDiv><h3>익명게시판</h3></TitleDiv>
            <UpperHR />
            <TableDiv>
                <HeaderDiv>
                    {headerItem.map((item, idx) => <HeaderItem key={idx} item={item}></HeaderItem>)}
                </HeaderDiv>
                <BodyListDiv>
                    {bodyItem.map((items, idx) => <BodyListItem key={idx} items={items} headerInfo={headerItem} />)}
                </BodyListDiv>
            </TableDiv>
        </BoardWrapperDiv>
    );
}

export default BoardList;