import React from 'react'
import styled, { css } from 'styled-components';
import Article from '../../components/Anonymous/Article';

const WrapperDiv = styled.div`
    margin: 50px auto 0 auto;
    display: flex;
    flex-direction: column;
    width: 700px;
    height: 500px;
`;
 
interface ContentProps {

}

const Content: React.FC<ContentProps> = ({ }) => {

    return (
        <WrapperDiv>
            <Article title={'Title'} text={'ipsum lorem'}></Article>
        </WrapperDiv>
    );
}

export default Content;