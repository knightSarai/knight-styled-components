import React, { useState, useEffect, useRef } from 'react';
import {v4 as uuid} from 'uuid';
import {SliderContainer} from './Slider.styled';
import SliderContent from '../SliderContent';
import Slide from '../Slide';
import Arrow from '../Arrows'
import Dots from '../Dots';

const Slider = () => {
  const getWidth = () => window.innerWidth;
  const slides = [
    'https://images.unsplash.com/photo-1449034446853-66c86144b0ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80',
    'https://images.unsplash.com/photo-1470341223622-1019832be824?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2288&q=80',
    'https://images.unsplash.com/photo-1448630360428-65456885c650?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2094&q=80',
    'https://images.unsplash.com/photo-1534161308652-fdfcf10f62c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2174&q=80'
  ];
  const firstSlide = slides[0]
  const secondSlide = slides[1]
  const lastSlide = slides[slides.length - 1]

  const autoPlay = 4;
  const [state, setState] = useState({
    activeSlide:0,
    slideCounter: 0,
    translate: getWidth(),
    transition: 0.45,
    _slides: [lastSlide, firstSlide, secondSlide]
  })
  const { activeSlide, translate, transition, _slides, slideCounter} = state;

  const autoPlayRef = useRef();
  const transitionRef = useRef()
  const resizeRef = useRef()

  const nextSlide = () => {
    let maxWidth = getWidth() * _slides.length;
    let accWidth = translate + getWidth();
    if (accWidth > maxWidth) {
      setState({
        ...state,
        translate: getWidth(),
        activeSlide: activeSlide === slides.length - 1 ? 0 : activeSlide + 1
      })
    } else {
      setState({
        ...state,
        translate: translate + getWidth(),
        activeSlide: activeSlide === slides.length - 1 ? 0 : activeSlide + 1
      })
    }
    
  }

  const prevSlide = () => {
    setState({
      ...state,
      translate: 0,
      activeSlide: activeSlide === 0 ? slides.length - 1 : activeSlide - 1
    })
  }
  const smoothTransition = () => {
    let _slides = [];
  
    // We're at the last slide.
    if (activeSlide === slides.length - 1)
      _slides = [slides[slides.length - 2], lastSlide, firstSlide]
    // We're back at the first slide. Just reset to how it was on initial render
    else if (activeSlide === 0) _slides = [lastSlide, firstSlide, secondSlide]
    // Create an array of the previous last slide, and the next two slides that follow it.
    else _slides = slides.slice(activeSlide - 1, activeSlide + 2)
    console.log("l");
    setState({
      ...state,
      _slides,
      transition: 0,
      translate: getWidth()
    })
  }
  const handleResize = () => {
    setState({ ...state, translate: getWidth(), transition: 0 })
  }
  useEffect(()=>{
    autoPlayRef.current = nextSlide;
    transitionRef.current = smoothTransition;
    resizeRef.current = handleResize;
  });

  useEffect(() => {
    const play = () => {
      autoPlayRef.current()
    }
    const smooth = (event) => {
      if (event.target.className.includes('SliderContent')) {
        transitionRef.current()
      }

    }
    const resize = () => {
      resizeRef.current()
    }
    const interval = setInterval(play, autoPlay * 1000);
    const transitionEnd = window.addEventListener('transitionend', smooth);
    const onResize = window.addEventListener('resize', resize);

    return () => {
      clearInterval(interval);
      window.removeEventListener('transitionend', transitionEnd);
      window.removeEventListener('resize', onResize);
    }
  }, [])

  useEffect(() => {
    if (transition === 0) setState({ ...state, transition: 0.45 })
    console.log("reset transition");
  }, [transition])

  const renderedSlides = _slides.map((_slide) => (
    <Slide width={getWidth()} key={uuid()} content={_slide}/>
  ));
  return (
    <SliderContainer>
      <SliderContent
        translate={translate}
        transition={transition}
        width={`${getWidth() * _slides.length}`}
        className="SliderContent"
      >
        {renderedSlides}
      </SliderContent>
      <Arrow direction="left" handleClick={prevSlide}/>
      <Arrow direction="right" handleClick={nextSlide}/>
      <Dots slides={slides} activeSlide={activeSlide} />
    </SliderContainer>
    )

}

export  {Slider}