import Typing from 'react-typing-animation';
import React from 'react'


function Landing() {
    const welcome = ["Hi. ",
        "I'm Mike. ",
        "I like to build things. ",
        "Thanks for coming to my webpage. "]

    return (
        <div className="landing-container">
            <div className="typing-container">
                <Typing speed={50}>
                    <h2 className="landing-font">
                        {welcome[0]}
                        <Typing.Delay ms={250} />
                        {welcome[1]}
                        <Typing.Delay ms={250} />
                        {welcome[2]}
                        <Typing.Delay ms={250} />
                        {welcome[3]}
                    </h2>
                </Typing>
            </div>
            <div className="scroll-container">
                <div className="scroll1 align-center"></div>
                <div className="scroll2 align-center"></div>
                <div className="scroll3 align-center"></div>
            </div>
        </div >
    )
}

export default Landing
