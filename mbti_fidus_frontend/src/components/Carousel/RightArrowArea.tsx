import React from 'react'
import styled from 'styled-components';

const RightArrowDiv = styled.div`
    height: 100%;
    width: 10%;
    position: absolute;
    right:0;
`;

interface RightArrowAreaProps {
    children: React.ReactNode;
}

const RightArrowArea: React.FC<RightArrowAreaProps> = ({ children }) => {
    return (
        <RightArrowDiv>{children}</RightArrowDiv>
    );
}

export default RightArrowArea;