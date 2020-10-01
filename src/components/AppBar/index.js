import React, { useRef } from 'react';
import { useOnClickOutside } from '../../hooks/useOnClickOutSide';
import  {Link} from 'react-router-dom';
import useToggleState from '../../hooks/useToggleState';
import styled from 'styled-components';

import Burger from './Burger';
import Search from './SearchInput/';
import SideBar from './SideBar/';

const Appbar = styled("nav")`
    position:fixed;
    top:0;
    left: 0;
    right:0;
    min-height: 64px;
    width: 100%;
    background: #ffff;
`;
const AppbarList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    @media (max-width: ${({ theme }) => theme.mobile}) {
        flex-direction: column;
    };
`;
const Logo = styled.li`
    margin-left: 5px;
    padding: 0 5px;
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
    useOnClickOutside(node, () => toggleSideBar(false));
    return (
        <Appbar>
            <AppbarList>
                <li className="" style={{width: "60px"}} ref={node}>
                        <Burger sideBarOpen={sideBarOpen} toggleSideBar={toggleSideBar}/>
                        <SideBar sideBarOpen={sideBarOpen} toggleSideBar={toggleSideBar}/>
                </li>
                <Logo className="logo">
                    <StyledLink to="#">KnighTrition</StyledLink>
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
