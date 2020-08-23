import React, { FC } from 'react';
import styled from 'styled-components';

interface Props {
    text?: string;
}
const TextBlock = styled.div`
    color: #576071;
    font-weight: 600;
    text-align: center;
    line-height: 1.5;
    font-size: 1.5em;
`;

const Title: FC<Props> = ({ text }: Props) => {
    return (<TextBlock>{text}</TextBlock>);
}

export default React.memo(Title);
