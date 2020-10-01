import React from 'react';
import { StyledBurger } from './Burger.styled';

const Burger = ({sideBarOpen, toggleSideBar}) => {
  return (
    <StyledBurger open={sideBarOpen} onClick={toggleSideBar}>
      <div />
      <div />
      <div />
    </StyledBurger>
  )
}

export default Burger;