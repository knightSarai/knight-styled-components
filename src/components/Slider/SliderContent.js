import styled from 'styled-components'

const SliderContent = styled.div`
  transform: translateX(-${({translate}) => translate}px);
  transition: transform ease-out ${({transition}) => transition}s;
  height: 40vh;
  width: ${({width}) => `${width}px`};
  display: flex;
`
export default SliderContent