import React from 'react'
import styled, { css } from 'styled-components';


const WrapperDiv = styled.div<StyleProps>`
    width : ${(props: StyleProps) => props.width || '100%'};
    height: ${(props: StyleProps) => props.height || '100%'};
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    box-shadow: 1px 1px 10px 0px rgba(5,5,5,0.16);
`;

interface StyleProps {
    width?: string;
    height?: string;
}

interface CommentProps {
    width?: string;
    height?: string;
}

const Comment: React.FC<CommentProps> = ({ width, height }) => {
    return (
        <WrapperDiv width={width} height={height}></WrapperDiv>
    );
}

export default Comment;