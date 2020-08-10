import React from 'react'
import styled, { css } from 'styled-components';

const WrapperDiv = styled.div<styleProps>`
    width : ${(props: styleProps) => props.width || '100%'};
    height: ${(props: styleProps) => props.height || '100%'};
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    box-shadow: 1px 1px 10px 0px rgba(5,5,5,0.16);
`;


interface styleProps {
    width? : string;
    height? : string;
}

interface ArticleProps {
    
}

const Article: React.FC<ArticleProps> = ({  }) => {
    return (
        <WrapperDiv>

        </WrapperDiv>
    );
}

export default Article;