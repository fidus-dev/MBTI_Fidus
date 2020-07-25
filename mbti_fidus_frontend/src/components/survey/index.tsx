import React, { FC } from 'react';
import styled from 'styled-components';
import Radios from './Radios';
import Bar from './Bar';
import Title from './Title';

interface Props {
    surveyType: 'radios' | 'bar';
    question?: string;
}

const Survey: FC<Props> = ({ surveyType, question }) => {
    // surveyType = 'radios' or 'bar'
    return (
        <>
            <Title text={question ? question : 'default'}></Title>
                {surveyType === 'radios' && <Radios />}
                {surveyType === 'bar' && <Bar />}
        </>
    );
};

export default Survey