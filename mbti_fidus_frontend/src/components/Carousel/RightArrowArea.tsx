import React from 'react'
import styled from 'styled-components';

const RightArrowDiv = styled.div`
    height: 100%;
    width: 15%;
    position: absolute;
    right:0;
    cursor: pointer;
    opacity: 0;
    z-index: 20;
    transition-duration: 0.2s;
    &:hover {
        opacity : 0.5;
        background: linear-gradient(270deg, rgba(200,200,255,0.3) 0%, rgba(255,255,255,0) 100%);
    }
`;

interface RightArrowAreaProps {
    children: React.ReactNode;
    handleClick: Function;
}

const RightArrowArea: React.FC<RightArrowAreaProps> = ({ children, handleClick }) => {
    

    return (
        <RightArrowDiv onClick={() => handleClick()}>
            {children}
        </RightArrowDiv>
    );
}

export default RightArrowArea;