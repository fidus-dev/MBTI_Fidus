import React from 'react'
import styled, { css } from 'styled-components';
import BoardList from '../../components/Anonymous/BoardList';
import { boardTableBodyRowItems, boardTableHeaderItem } from '../../test/Anonymous/boardTableItem';

const WrapperDiv = styled.div`
    margin: 50px auto 0 auto;
    display: flex;
    flex-direction: column;
    width: 700px;
    `;

interface SubjectBoardProps {

}

const SubjectBoard: React.FC<SubjectBoardProps> = ({ }) => {
    return (
        <WrapperDiv>
            <BoardList
                headerItem={boardTableHeaderItem}
                bodyItem={boardTableBodyRowItems}
                boardName={'식물갤'}
                width={'100%'}
                height={'500px'}
            />
        </WrapperDiv>
    );
}

export default SubjectBoard;