import React from "react"
import { useWindowDimensions } from "./windowDim"
import { FaHome, FaUniversity, FaClock, FaTerminal } from 'react-icons/fa'

export default function About() {

    const { width } = useWindowDimensions();

    const iconSize = width / 20 + 12;

    return (
        <div className="about-container">
            <div className="flex-row about space-around">
                <div className="flex-col">
                    <h2 className="text-about align-center live">Live</h2>
                    <FaHome size={iconSize} color="rgb(250,227,217,0.8)" />
                    <p className="text-about align-center live">My wife and I live in Buffalo, NY</p>
                </div>
                <div className="flex-col">
                    <h2 className="text-about align-center live">Work</h2>
                    <FaUniversity size={iconSize} color="rgb(250,227,217,0.8)" />
                    <p className="text-about align-center live">I work as a Product Manager</p>
                </div>
                <div className="flex-col">
                    <h2 className="text-about align-center live">Time</h2>
                    <FaClock size={iconSize} color="rgb(250,227,217,0.8)" />
                    <p className="text-about align-center live">In my free time, I enjoy programming, walking my dogs, cooking, and running</p>
                </div>
                <div className="flex-col">
                    <h2 className="text-about align-center live">Code</h2>
                    <FaTerminal size={iconSize} color="rgb(250,227,217,0.8)" />
                    <p className="text-about align-center live">I enjoy working with Vanilla JavaScript, React, and Python</p>
                </div>
            </div>
        </div >
    )
}
