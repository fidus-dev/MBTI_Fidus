import React, { FC } from 'react';

interface Props {
    leftValue: number;
    selectorValue?: number;
    display?: 'flex' | 'none';
};

const ValueBlockStyle: React.CSSProperties = {
    marginTop: '-30px',
    color: '#576071',
    width: 'auto',
    height: 'auto',
    fontWeight: 600,
    textAlign: 'center',
    fontSize: '1.2em',
};

const SelectorStyle: React.CSSProperties = {
    position: 'absolute',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    width: '15px',
    height: '60px',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    border: '3px solid #333',
    borderRadius: '10px',
    left: '10px',
};

const Selector: FC<Props> = ({ leftValue, display, selectorValue }) => {

    return (
        <>
            <div style={{ ...SelectorStyle, left: leftValue - 7.5, display: display }}>
                <div style={ValueBlockStyle}>{selectorValue}</div>
            </div>
        </>
    );
};

export default React.memo(Selector);