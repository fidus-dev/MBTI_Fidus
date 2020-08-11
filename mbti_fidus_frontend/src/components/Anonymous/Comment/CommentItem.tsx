import React from 'react'
import styled, { css } from 'styled-components';
import { CommentItem } from './interfaces';
import { MdSubdirectoryArrowRight, MdNotificationsNone } from 'react-icons/md';
import getConfig from './CommentConfig';


const WrapperDiv = styled.div<StyleProps>`
    width : ${(props: StyleProps) => props.width || '100%'};
    height : ${(props: StyleProps) => props.height || '100%'};
    display: flex;
    flex-direction: row;
`;

const ItemDiv = styled.div<StyleProps>`
    height: ${(props: StyleProps) => props.height || '10%'};
    width: ${(props: StyleProps) => props.width || '20%'};
    justify-content: ${(props: StyleProps) => props.justifyContent || 'center'};
    font-weight: ${(props: StyleProps) => props.fontWeight || 'normal'};
    font-size: ${(props: StyleProps) => props.fontSize || 'initial'};
`;

const iconStyle = { backgroundColor: 'transparent', width: '80%', height: '80%' };

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
    justifyContent: string;
    fontWeight: string;
    fontSize: string;
    comment: CommentItem;
}

const CommentItem: React.FC<CommentItemProps> = ({ width, height, comment }) => {

    const { replyable, whistleBlow, foldable } = getConfig(comment.depth);
    return (
        <WrapperDiv width={width} height={height}>
            {comment.depth !== 0 && <MdSubdirectoryArrowRight style={{ ...iconStyle, padding: 20 * comment.depth + 'px' }} />}
            <ItemDiv>{comment.id}</ItemDiv>
            <ItemDiv>{comment.content}</ItemDiv>
            { whistleBlow && <MdNotificationsNone style={{...iconStyle}}/>}
        </WrapperDiv>
    );
}

export default CommentItem;