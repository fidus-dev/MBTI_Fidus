import React from 'react'
import styled, { css } from 'styled-components';
import { IcommentItem } from './interfaces';
import { MdSubdirectoryArrowRight, MdNotificationsNone } from 'react-icons/md';
import getConfig from './CommentConfig';


const WrapperDiv = styled.div<StyleProps>`
    width : ${(props: StyleProps) => props.width || '100%'};
    height : ${(props: StyleProps) => props.height || '100%'};
    display: flex;
    flex-direction: row;
    & + & {
        border-top: 0.5px solid gray;
    }
    &:hover {
        background-color: lightblue;
    }
`;

const UnitDiv = styled.div<StyleProps>`
    height: ${(props: StyleProps) => props.height || '100%'};
    width: ${(props: StyleProps) => props.width || '20%'};
    overflow: auto;
    align-items: center;
    justify-content: ${(props: StyleProps) => props.justifyContent || 'center'};
    font-weight: ${(props: StyleProps) => props.fontWeight || 'normal'};
    font-size: ${(props: StyleProps) => props.fontSize || 'initial'};
`;


const ContentDiv = styled.div`
    height: 100%;
    width: auto;
    
`;

const iconStyle = { backgroundColor: 'transparent', width: '12px', height: '12px'};

interface StyleProps {
    width?: string;
    height?: string;
    justifyContent?: string;
    fontWeight?: string;
    fontSize?: string;
}

interface CommentItemProps {
    width?: string;
    height?: string;
    justifyContent?: string;
    fontWeight?: string;
    fontSize?: string;
    comment: IcommentItem;
}


const CommentItem: React.FC<CommentItemProps> = ({ width, height, comment }) => {

    const { replyable, whistleBlow, foldable } = getConfig(comment.depth);
    return (
        <WrapperDiv width={width} height={height}>
            {comment.depth !== 0 && <MdSubdirectoryArrowRight style={{ ...iconStyle}} />}
            <UnitDiv width={'15%'} fontSize={'0.7rem'} justifyContent={'flex-start'}>{comment.id}</UnitDiv>
            <UnitDiv width={'70%'} fontSize={'0.5rem'}>{comment.content}</UnitDiv>
            {whistleBlow && <MdNotificationsNone style={{ ...iconStyle }} />}
        </WrapperDiv>
    );
}

export default CommentItem;