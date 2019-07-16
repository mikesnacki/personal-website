import React, { useState } from "react"
import { useWindowDimensions } from "../utilhooks/windowDim"
import { FaHome, FaUniversity, FaClock, FaTerminal } from 'react-icons/fa'

export default function About() {
    const { width, height } = useWindowDimensions();
    const iconSize = width / 20 + 12;
    const [inView, activateView] = useState(false)
    const visible = (inView === true) ? "visible" : "hidden";

    window.addEventListener("scroll", function () {
        const scrollDepth = window.scrollY;
        if (scrollDepth - height < 10) {
            activateView(true);
        }
    }, { once: true });

    return (
        < div
            className="about-container"
            id="about"
        >
            <div className={`flex-row about space-around ${visible}`}>
                <div className={`flex-col`}>
                    <h2 className="align-center ">Live</h2>
                    <FaHome size={iconSize} />
                    <p className="align-center ">My wife and I live in Buffalo, NY</p>
                </div>
                <div className={`flex-col`}>
                    <h2 className="align-center ">Work</h2>
                    <FaUniversity size={iconSize} />
                    <p className="align-center ">I work as a Product Manager</p>
                </div>
                <div className={`flex-col`}>
                    <h2 className="align-center ">Fun</h2>
                    <FaClock size={iconSize} />
                    <p className="align-center ">In my free time, I enjoy programming, walking my dogs, cooking, and running</p>
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
