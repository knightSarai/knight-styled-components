import React from 'react';
import  {Link} from 'react-router-dom';
import {IoMdClose} from "react-icons/io";
import {sideBareData} from './sideBardata';

import styled from 'styled-components';

const SideBarStyled = styled("nav")`
    background: #1976d2;
    height:100vh;
    width: 250px;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: flex-start;
    position: fixed;
    top: 0;
    left:0;
    transition: 850ms;
`;
const NavItem = styled("li")`
    display: flex;
    justify-content: start;
    align-items: flex-start;
    background: inherit;
    padding: ;
`
const StyledLink = styled(Link)`
    text-decoration: none;
    color: #ffff;
    font-size: 1.5rem;
`;
const LinkText = styled.span`
    padding: 1rem 0 1rem 5rem;
`;
export default function SideBar({sideBarOpen, toggleSideBar}) {
    const NavItems = sideBareData.map((item, idx) => (
        <NavItem as="li" key={idx}>
            <StyledLink to={item.path}>
                {item.icon}
                <LinkText>{item.title}</LinkText>
            </StyledLink>
        </NavItem>
    ))
    const renderdComponent = (
        <SideBarStyled sideBarOpen={sideBarOpen}>
            <StyledLink to="/" onClick={toggleSideBar}>
                <IoMdClose/>
            </StyledLink>
            {NavItems}
        </SideBarStyled>  
    );


    return sideBarOpen? renderdComponent : null;
}
