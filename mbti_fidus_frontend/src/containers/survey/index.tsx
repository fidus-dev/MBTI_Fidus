import React, { FC, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Survey from '../../components/survey';

const SurveyContainer: FC = () => {
    const [ survey, setSurvey ] = useSelector(null);
    const dispatch = useDispatch();

    useEffect(() => {
        
    }, []);

    return (
        <>
            <Survey surveyType='radios' question='question1'/>
            <Survey surveyType='bar' question='question2'/>
        </>
    )
}

export default SurveyContainer;