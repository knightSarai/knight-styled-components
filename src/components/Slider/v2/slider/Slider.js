import React, {Component} from 'react';
import {Container} from './Slider.styled';
import renderSlides from './renderSlides'
import Slides from '../Slides';
import Arrows from '../../Arrows';
import Dots from '../../Dots';

export  class Slider extends Component{
    constructor(props){
        super(props);
        this.state={
            autoPlayTime:2,
            size: NaN,
            transform: '',
            transition: ''
        }
        this.autoPlay = {};
        this.imgsRefs = [];
        this.counter = 1;
        this.renderedSlides = (renderSlides(this.props.slideImages, this.imgsRefs));
    }
    // gitWidth = (element) => {

    // }
    setTransformAndTransition = (transition) => {
        let {size} = this.state;
        this.setState({
            ...this.state,
            transform: `translateX(-${size * this.counter}px)`,
            transition
        });
    }
    setTransition = () => {
        this.setState({...this.state, transition: `transform 0.4s ease-in-out`})
    }
    onLoad = (e) => {
        this.setState({
            ...this.state,
            size: e.target.clientWidth
        }, () => {
            this.setTransformAndTransition('none');
        });
        console.log(e.target, this.state.size);
        
    }
    nextSlide = () => {
        this.stopAutoPlay();
        if (this.counter >= this.imgsRefs.length  -1) return;
        this.setState({
            ...this.state,
            size: this.imgsRefs[this.counter].clientWidth
        }, () => {
            this.counter++;
            this.afterBtnClick()
        })
        
    }
    prevSlide = () => {
        this.stopAutoPlay();
        if (this.counter <= 0) return;
        this.counter--;
        this.afterBtnClick()
    }
    afterBtnClick = () => {
        this.setTransformAndTransition('transform 0.4s ease-in-out');
        this.startAutoPlay();
    }
    componentDidMount() {
        this.imgsRefs[this.counter].addEventListener('load', this.onLoad);
        this.startAutoPlay()
    }
    transitionEnd = (num) => {
        this.counter = this.imgsRefs.length - num;
        this.setState({...this.state, transition: "none"}, () => {
            this.setState({
                ...this.state,
                transform: `translateX(-${this.state.size * this.counter}px)`
            })
        })
    }
    handletranstionEnd = () => {
        this.imgsRefs[this.counter].id === "last-clone" && this.transitionEnd(2);
        this.imgsRefs[this.counter].id  === "first-clone" && this.transitionEnd(this.counter);
    }
    startAutoPlay = () => {
        this.autoPlay = setInterval(this.nextSlide, this.state.autoPlayTime * 1000)
    }
    stopAutoPlay = () => {
        clearInterval(this.autoPlay)
    }
    render() {
        const {slideImages} = this.props;
        const {transform, transition} = this.state;
        console.log(this.state.size);
        return (
            <Container>
                <Slides 
                    transform={transform}
                    transition={transition}
                    onTransitionEnd={this.handletranstionEnd}
                >
                {this.renderedSlides}
                </Slides>
                <Arrows direction="left" handleClick={this.prevSlide}/>
                <Arrows direction="right" handleClick={this.nextSlide}/>
                <Dots slides={slideImages}/>
        </Container>
        )
    }
}
