import styled from 'styled-components'

const Slides = styled.div`
    display: flex;
    width: 100%;
    height: 500px;
    transform: ${({transform}) => transform};
    transition: ${({transition}) => transition}
`
export default Slides