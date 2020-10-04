import React, {Component, createRef} from 'react';
import {Container} from './Slider.styled';
import renderSlides from './renderSlides'
import Slides from '../Slides';
import Arrows from '../../Arrows';
import Dots from '../../Dots';

export  class Slider extends Component{
    constructor(props){
        super(props);
        this.state={
            counter:1,
            autoPlayTime:2,
            size: NaN,
            transform: '',
            transition: ''
        }
        this.autoPlay = {};
        this.imgsRefs = [];
    }
    setTransformAndTransition = (transition) => {
        // console.log(transition);
        let {size, counter} = this.state;
        this.setState({
            ...this.state,
            transform: `translateX(-${size * counter}px)`,
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
        });
        this.setTransformAndTransition('none');
    }
    nextSlide = () => {
        const {slideImages} = this.props;
        let {counter} = this.state;
        // stopAutoPlay();
        if (counter >= slideImages.length) return;
        counter++;
        this.setState({...this.state, counter}, () => this.afterBtnClick())
    }
    prevSlide = () => {
        let {counter} = this.state;
        // stopAutoPlay();
        if (counter <= 0) return;
        counter--;
        this.setState({...this.state, counter}, () => this.afterBtnClick())
    }
    afterBtnClick = () => {
        this.setTransformAndTransition('transform 0.4s ease-in-out');
        // startAutoPlay();
    }
    componentDidMount() {
        this.imgsRefs[0].addEventListener('load', this.onLoad)
    }
    transitionEnd = (num) => {
        let {counter} = this.state;
        const {slideImages} = this.props;
        counter = slideImages.length - num;
        this.setState({...this.state, transition: "none"}, () => {
            this.setState({...this.state, counter}, () => {
                this.setState({...this.state, transform: `translateX(-${this.state.size * this.state.counter}px)`})
            })
        })
    }
    handletranstionEnd = () => {
        let {counter} = this.state;
        console.log(this.imgsRefs[counter]);
        this.imgsRefs[counter].id === "last-clone" && this.transitionEnd(2);
        this.imgsRefs[counter].id  === "first-clone" && this.transitionEnd(counter);
    }
    
    render() {
        const {slideImages} = this.props;
        const {transform, transition} = this.state;
        const renderedSlides = renderSlides(slideImages, this.imgsRefs);
        console.log(this.state);
        return (
            <Container>
                <Slides 
                    transform={transform}
                    transition={transition}
                    onTransitionEnd={this.handletranstionEnd}
                >
                {renderedSlides}
                </Slides>
                <Arrows direction="left" handleClick={this.prevSlide}/>
                <Arrows direction="right" handleClick={this.nextSlide}/>
                <Dots slides={slideImages}/>
        </Container>
        )
    }
}
