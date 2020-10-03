import React, { useState, useEffect } from 'react';
import {v4 as uuid} from 'uuid';
import {SliderContainer} from './Slider.styled';
import SliderContent from '../SliderContent';
import Slide from '../Slide';

/*@function Slider
 */

const Slider = () => {
  const slideImages = [
    'https://images.unsplash.com/photo-1449034446853-66c86144b0ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80',
    'https://images.unsplash.com/photo-1470341223622-1019832be824?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2288&q=80',
    'https://images.unsplash.com/photo-1448630360428-65456885c650?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2094&q=80',
    'https://images.unsplash.com/photo-1534161308652-fdfcf10f62c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2174&q=80'
  ]
  const [width, setWidth] = useState();
  const [state, setState] = useState({
    translate: 0,
    transition: 0.45
  })
  const { translate, transition } = state;
  useEffect(()=>{
    setWidth(window.innerWidth);
  },[setWidth])

  const renderedSlides = slideImages.map((img) => (
    <Slide key={uuid()} content={img}/>
  ))
  console.log(width * slideImages.length);
  return (
    <SliderContainer>
      <SliderContent
        translate={translate}
        transition={transition}
        width={width * slideImages.length}
      >
        {renderedSlides}
      </SliderContent>
    </SliderContainer>
    )

}

export default Slider