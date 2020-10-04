import styled from 'styled-components'

const SliderContent = styled.div`
  display: flex;
  height: 50vh;
  transform: translateX(-${({translate}) => translate}px);
  transition: transform ease-out ${({transition}) => transition}s;
  width: ${({width}) => `${width}px`};
  
`
export default SliderContent