import styled from 'styled-components';
import  {Link} from 'react-router-dom';

export const SideBarStyled = styled("nav")`
    display: flex;
    flex-direction: column;
    justify-content: start;
    font-size: 1rem;
    background: #ffff;
    color: ${({theme}) => theme.text.primary};
    border-right: 1px solid #3333;
    height:100vh;
    width: 230px;
    position: absolute;
    top: 0;
    left:0;
    transition: transform 0.3s ease-in-out;
    transform: ${({ sideBarOpen }) => sideBarOpen ? 'translateX(0)' : 'translateX(-100%)'};
    @media (max-width: ${({ theme }) => theme.mobile}) {
        width: 100%;
    };
`;
export const NavItems = styled("ul")`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    margin-top: 120px;
`;
export const NavItem = styled("li")`
    background: inherit;
    font-size: 1.6rem;
`;
export const StyledLink = styled(Link)`
    text-transform: uppercase;
    color: inherit;

    &:hover {
        color: ${({theme}) => theme.primary.hover}
    }
`;
export const Divider = styled.hr`
    border: 0;
    height: 1.2px;
    background-image: linear-gradient(to right, rgba(0, 0, 0, 0.1), rgba(51, 51, 51, 0.3), rgba(0, 0, 0, 0.1));
`;