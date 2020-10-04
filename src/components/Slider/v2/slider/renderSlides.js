import React from 'react';
import {v4 as uuid} from 'uuid';



export default (slideImages, imgsRefs) => slideImages.map((img, idx) => {
    const setRef = element => {
        imgsRefs.push(element);
    }
        if (idx ===0) {
            return (
            <React.Fragment key={uuid()}>
                <img id="last-clone" ref={setRef} key={uuid()}  src={slideImages[slideImages.length - 1]} alt={`img-last-clone`}/>
                <img ref={setRef} key={uuid()}  src={img} alt={`img-${idx}`}/>
            </React.Fragment>)
        } else if (idx === (slideImages.length - 1)) {
            return (
            <React.Fragment key={uuid()}>
                <img ref={setRef} key={uuid()}  src={img} alt={`img-${idx}`}/>
                <img id="first-clone" ref={setRef} key={uuid()}  src={slideImages[0]} alt={`img-first-clone`}/>
            </React.Fragment>)
        } else {
            return (
                <img ref={setRef} key={uuid()}  src={img} alt={`img-${idx}`}/>
            )
        }
})

