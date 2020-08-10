import React from 'react'
import styled, { css } from 'styled-components';

const WrapperDiv = styled.div`
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    box-shadow: 1px 1px 10px 0px rgba(5,5,5,0.16);
`;

interface CommentProps {
    
}

const Comment: React.FC<CommentProps> = ({  }) => {
    return (
        <WrapperDiv></WrapperDiv>
    );
}

export default Comment;