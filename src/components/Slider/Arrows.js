import React from 'react';
import styled from 'styled-components';
import {AiOutlineArrowRight as Right, AiOutlineArrowLeft as Left} from 'react-icons/ai';

const StyledArrow = styled.div`
    display: flex;
      position: absolute;
      top: 50%;
      ${({direction}) => direction === 'right' ? `right: 25px` : `left: 25px`};
      height: 50px;
      width: 50px;
      justify-content: center;
      background: white;
      border-radius: 50%;
      cursor: pointer;
      align-items: center;
      transition: transform ease-in 0.1s;
      &:hover {
        transform: scale(1.1);
      }
      img {
        transform: translateX(${({direction}) =>  direction === 'left' ? '-2px' : '2px'});
        &:focus {
          outline: 0;
        }
      }
`;

export default function Arrows({direction, handleClick}) {
    return (
        <StyledArrow
            onClick={handleClick}
            direction={direction}
        >
            {direction === 'right' ? <Right/> : <Left/>} 
        </StyledArrow>
    )
}
