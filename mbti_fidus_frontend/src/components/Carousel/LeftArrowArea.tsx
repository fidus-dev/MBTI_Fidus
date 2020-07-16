import React from 'react'
import styled from 'styled-components';

const LeftArrowDiv = styled.div`
    height: 100%;
    width: 10%;
    position: absolute;
    left:0;
`;

interface LeftArrowAreaProps {
    children: React.ReactNode;
}

const LeftArrowArea: React.FC<LeftArrowAreaProps> = ({ children }) => {

    return (
        <LeftArrowDiv>{children}</LeftArrowDiv>
    );
}

export default LeftArrowArea;