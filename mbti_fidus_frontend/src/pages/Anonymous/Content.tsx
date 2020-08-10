import React from 'react'
import styled, { css } from 'styled-components';

const WrapperDiv = styled.div`
    margin: 50px auto 0 auto;
    display: flex;
    flex-direction: column;
    width: 700px;
`;
 
interface ContentProps {

}

const Content: React.FC<ContentProps> = ({ }) => {

    return (
        <WrapperDiv>
            
        </WrapperDiv>
    );
}

export default Content;