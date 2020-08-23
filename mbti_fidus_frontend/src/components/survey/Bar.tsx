import React, { FC, useState, useCallback, useRef } from 'react';
import styled, { css } from 'styled-components';
import Selector from './Selector';

const BarBlock = styled.div`
    display: flex;
    width: 100%;
    height: 150px;
    border: 1px solid red;
    justify-content: center;
    align-items: center;
`;

const BarBackground = styled.div`
    display: flex;
    width: 60%;
    height: 50px;
    border: 4px solid #555;
    border-radius: 25px;
    background: linear-gradient( to right, green, yellow, red);
`;

const Bar: FC = () => {
    const [leftValue, setLeftValue] = useState<number>(0);
    const [display, setDisplay] = useState<'flex'|'none'>('none');
    const [selectorValue, setSelectorValue] = useState<number>(0);
    const backgroundRef = useRef<HTMLDivElement>(null);

    const onClickHandler = useCallback((event: React.MouseEvent) => {
        const { pageX } = event;
        const { left, width } = backgroundRef.current.getBoundingClientRect();

        setLeftValue(event.pageX);
        setDisplay('flex');
        setSelectorValue(100 - Math.round((pageX - left) / width * 100));
    }, []);

    return (
        <BarBlock>
            <BarBackground ref={backgroundRef} onClick={onClickHandler}></BarBackground>
            <Selector leftValue={leftValue} display={display} selectorValue={selectorValue}></Selector>
        </BarBlock>
    )
};

export default React.memo(Bar);