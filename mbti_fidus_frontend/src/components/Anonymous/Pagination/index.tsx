import React, { useState } from 'react'
import styled, { css } from 'styled-components';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

const WrapperDiv = styled.div<styleProps>`
    display: flex;
    flex-direction: row;
    width: ${props => props.width || '100%'};
    height: ${props => props.height || '100%'};
`;

const IdxDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    font-weight: bold;
    font-size: 1.2rem;
`;

const arrowStyle: React.CSSProperties = {
    height: '100%',
    width: '100%',
    cursor: 'pointer'
};

interface styleProps {
    width?: string;
    height?: string;
}
interface PaginationProps {
    width?: string;
    height?: string;
    pageIdx: number;
}

const Pagination: React.FC<PaginationProps> = ({ pageIdx }) => {
    return (
        <WrapperDiv>
            <MdKeyboardArrowLeft style={arrowStyle}/>
            <IdxDiv>{pageIdx}</IdxDiv>
            <MdKeyboardArrowRight style={arrowStyle}/>
        </WrapperDiv>
    );
}

export default Pagination;