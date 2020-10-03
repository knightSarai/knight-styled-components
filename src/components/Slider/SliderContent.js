
import styled from 'styled-components'

const SliderContent = styled.div`
  transform: translateX(-${props => props.translate}px);
  transition: transform ease-out ${props => props.transition}s;
  height: 40vh;
  width: ${({width}) => `${width}px`};
  display: flex;
`
export default SliderContent