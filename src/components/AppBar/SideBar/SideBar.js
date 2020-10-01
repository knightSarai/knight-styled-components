import React from 'react';
import {sideBareData} from './sideBarData';
import {NavItems, NavItem, StyledLink, Divider, SideBarStyled} from './SideBar.styled';

export default function SideBar({sideBarOpen, toggleSideBar}) {
    const renderedNavItems = sideBareData.map((item, idx) => (
        <NavItem key={idx}>
                {item.icon}
                <StyledLink to={item.path} >
                    {item.title}
                </StyledLink>
               { !(idx === sideBareData.length - 1) && <Divider/>}
        </NavItem>
    ))
    const renderdComponent = (
        <SideBarStyled sideBarOpen={sideBarOpen}>
            <NavItems>
                {renderedNavItems}
            </NavItems>
        </SideBarStyled>  
    );


    return renderdComponent;
}
