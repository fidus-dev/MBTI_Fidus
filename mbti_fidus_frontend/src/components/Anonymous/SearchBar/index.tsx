import React from 'react'
import styled, { css } from 'styled-components';
import { categoryProps } from './interfaces';
import { AiOutlineSearch } from 'react-icons/ai';
import { IHeaderCell } from '../BoardList/interfaces';

const SearchBarWrapperDiv = styled.div`
    display: flex;
    flex-direction: row;
    width : 100%;
    height : 100%;
    box-shadow: 1px 1px 10px 0px rgba(5,5,5,0.16);
`;

const CategorySelect = styled.select`  
    width: 20%;
    height: 100%;
`;

const SearchInputBox = styled.input`
    border: none;
    width: 70%;
    height: 100%;
    &:hover {
        border: 1px soild lightskyblue;
        border-radius: 1px;
    }
`;

const SearchButton = styled.button`
    border: none;
    width: 10%;
    height: 100%;
    background-color: RGB(245, 245, 245);
    &:hover {
        background: radial-gradient(circle, rgba(245,245,245,1) 0%, rgba(215,240,255,1) 100%);
        border: 1px soild lightskyblue;
        border-radius: 1px;
    }
`;

interface SearchBarProps {
    category: (categoryProps | IHeaderCell)[];
}

const SearchBar: React.FC<SearchBarProps> = ({ category }) => {
    return (
        <SearchBarWrapperDiv>
            <CategorySelect required>
                {category.map(item => { <option key={item.id} value={item.id}>{item.label}</option> })}
            </CategorySelect>
            <SearchInputBox type={'text'} />
            <SearchButton>
                <AiOutlineSearch
                    style={{ backgroundColor: 'transparent', width: '80%', height: '80%' }} />
            </SearchButton>
        </SearchBarWrapperDiv>
    );
}

export default SearchBar;