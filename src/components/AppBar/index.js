import React from 'react';
import  {Link} from 'react-router-dom';
import useToggleState from '../../hooks/useToggleState';
import styled from 'styled-components';

import Burger from './Burger';
import Search from './SearchInput/';
import SideBar from './SideBar/';

const Appbar = styled("nav")`
    position:fixed;
    width: 100%;
    background: #1976d2;
`;
const AppbarList = styled.ul`
    margin-top: -18px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;

    @media (max-width: ${({ theme }) => theme.mobile}) {
        flex-direction: column;
        justify-content: center;
        margin-left: -30px;
    };
`;
const Logo = styled.li`
    margin-left: 3rem;
    padding: 0.5rem;
    font-size: 2rem;
    color: #ffff;
    background: none;
    @media (max-width: ${({ theme }) => theme.mobile}) {
        margin: auto;
    };
`;
const AppBarItems = styled.div`
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
        <Appbar>
            <li className="" style={{width: "60px"}}>
                    <Burger sideBarOpen={sideBarOpen} toggleSideBar={toggleSideBar}/>
                    <SideBar sideBarOpen={sideBarOpen} toggleSideBar={toggleSideBar}/>
            </li>
            <AppbarList>
                <Logo className="logo">
                    <StyledLink to="#">Logo</StyledLink>
                </Logo>
                <Search sideBarOpen={sideBarOpen}/>
                <AppBarItems>
                    <AppBarItem>
                        <StyledLink to="#">Home</StyledLink>
                    </AppBarItem>
                    <AppBarItem>
                        <StyledLink to="#">About</StyledLink>
                    </AppBarItem>
                </AppBarItems>  
                </AppbarList>
        </Appbar> 
    )
}
