import React from 'react'
import styled from 'styled-components';

const Dot = styled.span`
        padding: 10px;
        margin-right: 5px;
        cursor: pointer;
        border-radius: 50%;
        background: ${({active}) => active ? 'black' : 'white'};
`;

const StyledDots = styled.div`
        position: absolute;
        bottom: 10px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
`;

export default function Dots({ slides, activeSlide }) {
    const renderedDots = slides.map((slide, i) => (
        <Dot key={slide} active={activeSlide === i}/>
    ))
    return (
        <StyledDots>
         {renderedDots}
        </StyledDots>
    )
}


