import styled from 'styled-components'

const Slides = styled.div`
    display: flex;
    /* flex-wrap: wrap; */
    width: 100%;
    height: 500px;
    transform: ${({transform}) => transform};
    transition: ${({transition}) => transition};
    img {
        height:100%;
        width:100%;
    }
`
export default Slides