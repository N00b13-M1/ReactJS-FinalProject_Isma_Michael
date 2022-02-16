import React from "react";
import OurStory from './OurStory.js';
import "./about.sass";
import Banner from '../banner/Banner'

export default function About(props) {
    
    return (
        <div>
            <div className="backgroundbanner d-flex justify-content-center align-items-center">
                <h2 className="text-white fs-1">ABOUT</h2>
            </div>
            <OurStory />
        </div>
    )
}

