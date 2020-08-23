import React, { FC, useCallback, useState } from 'react';
import styled, { css } from 'styled-components';
import { radioNum } from '../../constants';

type CircleType = {
    type: string;
}

const RadiosBlock = styled.div`
    display: flex;
    width: 100%;
    height: 150px;
    border: 1px solid red;
    justify-content: center;
    align-items: center;
`;

const CircleBlock = styled.div<CircleType>`
    border-radius: 100px;
    cursor: pointer;

    &+& {
        margin-left: 30px;
    }

    ${props => props.type === 'center' && css`
        border: 1px solid black;
        &:hover {
            background-color: black;
        }
    `}
    
    ${props => props.type === 'left' && css`
        border: 1px solid green;
        &:hover {
            background-color: green;
        }
    `}

    ${props => props.type === 'right' && css`
        border: 1px solid red;
        &:hover {
            background-color: red;
        }
    `}
`;

const Radios: FC = () => {
    const bundle = [];
    const [surveyValue, setSurveyValue] = useState<number>(null);
    const onClickHandler = useCallback((event: React.MouseEvent) => {
        const target = event.target as HTMLElement;
        const container = target.parentElement;
        const siblings = container.children;
        for (let i = 0; i < siblings.length; i++) {
            if (siblings.length !== radioNum) {
                break;
            }
            if (target === siblings[i]) {
                setSurveyValue(i);
                break;
            }
        }
    }, [surveyValue]);

    for (let i = 0; i < radioNum; ++i) {
        const size = Math.abs(Math.ceil(i - radioNum / 2)) * 10 + 40;
        const type = i === Math.floor(radioNum / 2) ? 'center' : (i > Math.floor(radioNum / 2) ? 'right' : 'left');
        const defaultStyle = {
            width: size,
            height: size,
            backgroundColor: 'none'
        };
        if (i === surveyValue) {
            if (type === 'left') {
                defaultStyle.backgroundColor = 'green';
            } else if (type === 'center') {
                defaultStyle.backgroundColor = 'black';
            } else if (type === 'right') {
                defaultStyle.backgroundColor = 'red';
            }
        } else {
            delete defaultStyle.backgroundColor;
        }

        bundle.push(
            <CircleBlock
                key={`circle_${i}`}
                type={type}
                style={{...defaultStyle}}
            />
        )
    }



    return (
        <RadiosBlock onClick={onClickHandler}>
            {bundle}
        </RadiosBlock>
    )
}

export default React.memo(Radios);