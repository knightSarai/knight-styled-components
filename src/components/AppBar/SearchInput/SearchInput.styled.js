import React from 'react'
import styled from 'styled-components'
import {FaSearch} from "react-icons/fa";
/* this component will be shown on the appbar in largScreen,
and wil be shown on the sidebar in the mobile mood */
export const icon = ({className, children}) => (
    <FaSearch className={className || ""} as="span">
        {children}
    </FaSearch>
);
export const SearchWrapper = styled.li`
    margin: auto;
    height:40px;
    width: 240px;
    display: inline-flex;
    background: #f2f2f2;
    border-radius: 5px;
    @media (max-width: ${({ theme }) => theme.mobile}) {
        display: none;
    };
`;
export const Input = styled.input`
    height:100%;
    width: 200px;
    border: none;
    outline: none;
    padding: 0 10px;
    border-radius:  5px 0px 0px 5px;
    border: 1px solid #cccccc;
    border-right: 0;
    color: #000;
    font-size: 16px;
`;
export const IconLable = styled.label`
    height:100%;
    width: 40px;
    line-height: 45px;
    text-align: center;
    border: 1px solid #cccccc;
    border-radius: 0 5px 5px 0;

    &:hover {
        background: ${({theme}) => theme.primary.light};
    }
`;
export const SearchIcon = styled(icon)`
/* @media (max-width: ${({ theme }) => theme.mobile}) {
        display: none;
    }; */
    color : #222222;
    font-size: 18px;

`;