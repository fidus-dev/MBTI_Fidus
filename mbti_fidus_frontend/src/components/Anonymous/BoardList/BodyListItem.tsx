import React from 'react'
import styled, { css } from 'styled-components';
import { IHeaderCell, IBodyRow, IBodyCell } from './interfaces';

const ItemWrapperDiv = styled.div`
    width: 100%;
    height: 30px;
    margin: 0 auto 0 auto;
    display: flex;
    flex-direction: row;
    &:nth-child(2n) {
        background-color: lightgray;
    }
    &:hover {
        background-color: lightskyblue;
    }
`;

const ItemDiv = styled.div<ItemDivProps>`
    display: flex;
    overflow: auto;
    &::-webkit-scrollbar {
        display:none;
    }
    & + & {
        border-left: 1px dashed black;
    }
    justify-content: ${props => props.justifyContent || 'center'};
    padding: 5px;
    width : ${props => props.width || '30%'};
`;

interface ItemDivProps {
    width: string;
    justifyContent: string;
}

interface BodyListItemProps {
    items: IBodyRow<IBodyCell>;
    headerInfo: IHeaderCell[];
}

const BodyListItem: React.FC<BodyListItemProps> = ({ items, headerInfo }) => {
    return (
        <ItemWrapperDiv>
            {items.item.map((item, idx) =>
                <ItemDiv
                    key={idx}
                    width={headerInfo[idx].width}
                    justifyContent={headerInfo[idx].justifyContent}
                >{item.value}</ItemDiv>
            )}
        </ItemWrapperDiv>
    );
}

export default BodyListItem;