import React from 'react';
import  {Link} from 'react-router-dom';
import {IoMdClose} from "react-icons/io";
import {sideBareData} from './sideBardata';

import styled from 'styled-components';

const SideBarStyled = styled("nav")`
    background: ${({sideBarOpen}) => sideBarOpen ? '#333' : 'blue'};
`;
const NavItem = styled("li")`
    background: inherit;
`
const StyledLink = styled(Link)`
    text-decoration: none;
    color: #ffff;
`;
export default function SideBar({sideBarOpen, className}) {
    const NavItems = sideBareData.map((item, idx) => (
        <NavItem as="li" key={idx}>
            <StyledLink to={item.path}>
                {item.icon}
                <span>{item.title}</span>
            </StyledLink>
        </NavItem>
    ))
    const renderdComponent = (
        <SideBarStyled sideBarOpen={sideBarOpen}>
            <StyledLink to="/">
                <IoMdClose/>
            </StyledLink>
            {NavItems}
        </SideBarStyled>  
    );


    return sideBarOpen? renderdComponent : null;
}
