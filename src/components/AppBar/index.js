import React, {Fragment} from 'react';
import  {Link} from 'react-router-dom';
import {FaBars} from "react-icons/fa";
import useToggleState from '../../hooks/useToggleState';
import styled from 'styled-components';
 
import SideBar from './SideBar';
import Search from './SearchInput';

const Appbar = styled("nav")`
        display: flex;
        justify-content:  space-between;
        background: #1976d2;
        height: 3rem;
        align-items: center;
`;
const AppBarItems = styled.ul`
    display: flex;
    list-style: none;
`;
const AppBarItem = styled.li`
    padding: 1rem;
`;
const StyledLink = styled(Link)`
    text-decoration: none;
    color: #ffff;
`;

export default function AppBar() {
    const [sideBarOpen, toggleSideBar] = useToggleState();

    return (
        <Fragment>
            <Appbar>
                <FaBars onClick={toggleSideBar}/>
                <StyledLink to="#">Logo</StyledLink>
                <Search/>
                <AppBarItems>
                    <AppBarItem>
                        <StyledLink to="#">Home</StyledLink>
                    </AppBarItem>
                    <AppBarItem>
                        <StyledLink to="#">About</StyledLink>
                    </AppBarItem>
                </AppBarItems>  
            </Appbar>
            <SideBar sideBarOpen={sideBarOpen}/>
        </Fragment>
        
    )
}
