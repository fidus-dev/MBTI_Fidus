import React from 'react'
import styled, { css } from 'styled-components';
import { IoIosArrowBack } from 'react-icons/io';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdNotificationsNone } from 'react-icons/md';

const WrapperDiv = styled.div<StyleProps>`
    width : ${(props: StyleProps) => props.width || '100%'};
    height: ${(props: StyleProps) => props.height || '100%'};
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    box-shadow: 1px 1px 10px 0px rgba(5,5,5,0.16);
`;

const InformBarDiv = styled.div`
    width: 100%;
    height: 8%;
    display: flex;
    flex-direction: row;
    box-shadow: 1px 1px 10px 0px rgba(5,5,5,0.16);
`;

const IconButton = styled.button<StyleProps>`
    width: ${props => props.width || '10%'};
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    background-color : transparent;
    border : none;
    &:hover {
        background: radial-gradient(circle, rgba(245,245,245,1) 0%, rgba(215,240,255,1) 100%);
        cursor: pointer;
    }
    `;

const TitleDiv = styled.div`
    width: 70%;
    display: flex;
    padding: 15px;
    overflow-x: auto;
    overflow-y: hidden;
    &::-webkit-scrollbar { 
        display: none;
    }
    justify-content: flex-start;
    align-items: center;
    align-content: center;
    font-weight: bold;
    font-size: 1rem;
`;

const MenuDiv = styled.div`
    width: 20%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    align-content: center;
    font-weight: bold;
    font-size: 1rem;
`;

const ContentDiv = styled.div`
    height: 60%;
    width: 95%;
    margin: 10px auto 0 auto;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    box-shadow: 1px 1px 10px 0px rgba(5,5,5,0.16);
`;
const iconStyle = { backgroundColor: 'transparent', width: '80%', height: '80%' };

interface StyleProps {
    width?: string;
    height?: string;
}

interface ArticleProps {
    title: string;
    text: string;
}

const Article: React.FC<ArticleProps> = ({ title, text }) => {
    return (
        <WrapperDiv>
            <InformBarDiv>
                <IconButton>
                    <IoIosArrowBack
                        style={iconStyle} />
                </IconButton>
                <TitleDiv>{title}</TitleDiv>
                <MenuDiv>
                    <IconButton width={'33%'}>
                        <MdNotificationsNone style={iconStyle} />
                    </IconButton>
                    <IconButton width={'33%'}>
                        <GiHamburgerMenu style={iconStyle} />
                    </IconButton>
                </MenuDiv>
            </InformBarDiv>
            <ContentDiv>{text}</ContentDiv>
        </WrapperDiv>
    );
}

export default Article;