import React from 'react'
import styled from 'styled-components'
import {FaSearch} from "react-icons/fa";

const icon = ({className, children}) => (
    <FaSearch className={className || ""}>
        {children}
    </FaSearch>
);
const SearchWrapper = styled.div`
    margin: auto;
`;
const Input = styled.input`
        height: 100%;
        /* margin-top: 1.5rem; */
        padding-left: 35px; 
`;
const SearchIcon = styled(icon)`
    position: absolute;
    /* margin-top: 1.5rem; */
    padding: 10px; 
    min-width: 40px; 
    color: #333;
    opacity: 0.5;
`;
export default function SearchInput() {
    return (
        <SearchWrapper>
            <SearchIcon/>
            <Input as="input" type="text" placeholder="Search..."/>
        </SearchWrapper>
    )
}
