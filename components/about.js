import React, { useState, useRef } from "react"
import { useWindowDimensions } from "../utilhooks/windowDim"
import useOnScreen from "../utilhooks/useOnScreen"
import { FaHome, FaUniversity, FaClock, FaTerminal } from 'react-icons/fa'

export default function About() {
    const aboutRef = useRef();
    const aboutOnScreen = useOnScreen(aboutRef, "-100px")
    const { width, height } = useWindowDimensions();
    const iconSize = width / 20 + 12;
    const abOnScnreen = aboutOnScreen === true ? "visible" : "hidden"


    return (
        < div
            className="about-container"
            id="about"
            ref={aboutRef}
        >
            <div className={`flex-row about space-around ${abOnScnreen}`}>
                <div className={`flex-col`}>
                    <h2 className="align-center ">Live</h2>
                    <FaHome size={iconSize} />
                    <p className="align-center ">My family and I live in the Rochester, NY area</p>
                </div>
                <div className={`flex-col`}>
                    <h2 className="align-center ">Work</h2>
                    <FaUniversity size={iconSize} />
                    <p className="align-center ">I work as a Senior Financial Analyst</p>
                </div>
                <div className={`flex-col`}>
                    <h2 className="align-center ">Fun</h2>
                    <FaClock size={iconSize} />
                    <p className="align-center ">In my free time, I enjoy programming, walking my dogs, cooking, and lifting weights</p>
                </div>
                <div className={`flex-col`} >
                    <h2 className="align-center ">Code</h2>
                    <FaTerminal size={iconSize} />
                    <p className="align-center">I enjoy working with Vanilla JavaScript, React, and Python</p>
                </div>
            </div>

        </div >
    )
}
