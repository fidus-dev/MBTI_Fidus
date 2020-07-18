import React from 'react'
import styled from 'styled-components';

const LeftArrowDiv = styled.div`
    height: 100%;
    width: 15%;
    position: absolute;
    left:0;
    cursor: pointer;
    opacity: 0;
    z-index: 20;
    transition-duration: 0.2s;
    &:hover {
        opacity : 0.5;
        background: linear-gradient(90deg, rgba(200,200,255,0.3) 0%, rgba(255,255,255,0) 100%);
    }
`;

interface LeftArrowAreaProps {
    children: React.ReactNode;
    handleClick: Function;
}

const LeftArrowArea: React.FC<LeftArrowAreaProps> = ({ children, handleClick }) => {

    return (
        <LeftArrowDiv onClick={() => handleClick()}>
            {children}
        </LeftArrowDiv>
    );
}

export default LeftArrowArea;