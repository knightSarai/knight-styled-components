import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    background: ${({ theme }) => theme.bg.light};
    color: ${({ theme }) => theme.primaryLight};
    /* text-rendering: optimizeLegibility; */
    font-family: 'Roboto';
    }
  a {
    color: ${({ theme }) => theme.primary.light};
    text-decoration: none;
  }
  ul{
      list-style: none;
  }
  img{
    width: 100%;
    height: 100%;
}
`;