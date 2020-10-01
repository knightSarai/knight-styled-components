import styled from 'styled-components';

export const StyledBurger = styled.button`
  position: absolute;
  top: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 10;
  &:focus {
    outline: none;
  }
  
  div {
    width: 2rem;
    height: 0.25rem;
    background: ${({ theme, sideBarOpen }) => sideBarOpen? theme.bg.dark : theme.bg.light};
    border-radius: 10px;
    transition: all 0.3s linear;
    transform-origin: 1px;
  }
`;