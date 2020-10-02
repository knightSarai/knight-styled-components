import React, { useRef } from 'react';
import { useOnClickOutside } from '../../hooks/useOnClickOutSide';
import  {Link} from 'react-router-dom';
import useToggleState from '../../hooks/useToggleState';
import styled from 'styled-components';

import Burger from './Burger';
import Search from './SearchInput/';
import SideBar from './SideBar/';

const Appbar = styled("nav")`
    min-height: 64px;
    background: #ffff;
    display: flex;
    flex-wrap: wrap;
    align-items: center;

`;
const AppbarList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    align-items: center;
    @media (max-width: ${({ theme }) => theme.mobile}) {
        flex-direction: column;
    };
`;
const Logo = styled.li`
    margin-left: 20px;
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
    justify-content: space-between;
    margin: auto;

`;
const AppBarItem = styled.li`
    padding: 0 0.7rem;
    margin: 0 0.1rem;
    @media (max-width: ${({ theme }) => theme.mobile}) {
        margin-top: 0.5rem;
    };
`;
const StyledLink = styled(Link)`
    text-decoration: none;
    color:  ${({ theme }) => theme.primary.light};
`;

export default function AppBar() {
    const [sideBarOpen, toggleSideBar] = useToggleState();
    const node  = useRef();
    useOnClickOutside(sideBarOpen, node, () => toggleSideBar(false));
    return (
        <Appbar>
            <AppbarList>
                <li ref={node}>
                        <Burger sideBarOpen={sideBarOpen} toggleSideBar={toggleSideBar}/>
                        <SideBar sideBarOpen={sideBarOpen} toggleSideBar={toggleSideBar}/>
                </li>
                <Logo className="logo">
                    <StyledLink to="#">KnighTritions</StyledLink>
                </Logo>
                <AppBarItems>
                    <AppBarItem>
                        <StyledLink to="#">Home</StyledLink>
                    </AppBarItem>
                    <AppBarItem>
                        <StyledLink to="#">About</StyledLink>
                    </AppBarItem>
                    <AppBarItem>
                        <StyledLink to="#">Blog</StyledLink>
                    </AppBarItem>
                </AppBarItems>  
                <Search sideBarOpen={sideBarOpen}/>
                </AppbarList>
        </Appbar> 
    )
}
