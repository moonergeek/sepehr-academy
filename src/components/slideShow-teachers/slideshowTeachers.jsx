import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import image1 from "../../assets/img/user-images/teachers1.png"
import image2 from "../../assets/img/user-images/teachers2.png"
import "./slideShowTeachers.css"

const slideImages = [
    {
        url: image1,
        caption: 'حسامی'
    },
    {
        url: image2,
        caption: 'جعفری'

    },
    {
        url: image1,
        caption: 'رضایـــی'
    },
];

const SlideShowTeachers = (props) => {
    return (
        <>
            <div className="slide-container mb-5">
                <Slide>
                    {slideImages.map((slideImage, index)=> (
                        <div className="each-slide" key={index}>
                            <div className={"slider-item"} style={{'backgroundImage': `url(${slideImage.url})`,}}>
                                <span className={"teachers-name ms-5 margin"}>{slideImage.caption}</span>
                                <span className={"teachers-name ms-5 margin"}>{slideImage.caption}</span>
                                <span className={"teachers-name ms-5 margin"}>{slideImage.caption}</span>
                                <span className={"teachers-name ms-5 margin"}>{slideImage.caption}</span>
                                <span className={"teachers-name ms-5 margin"}>{slideImage.caption}</span>
                            </div>
                        </div>
                    ))}
                </Slide>
            </div>
        </>
    );
};

export default SlideShowTeachers;
