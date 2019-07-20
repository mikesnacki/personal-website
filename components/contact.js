import React, { useRef } from 'react'
import useOnScreen from "../utilhooks/useOnScreen"

function Contact() {
    const portRef = useRef();
    const portOnSCreen = useOnScreen(portRef, "-100px")

    const portIsOnScreen = (portOnSCreen === true) ? "visible" : "hidden";

    return (
        <div
            id="contact"
            className="align-center contact" >
            <form
                action="mailto:mikesnacki@gmail.com"
                method="post">
                <h2>Contact</h2>
                <input type="text" name="name" placeholder="name" className="contact-input" required></input>
                <input type="email" name="email" placeholder="email" className="contact-input" required></input>
                <textarea type="text" name="message" className="contact-input" placeholder="message" required></textarea>
                <button type="submit" className="button-clear button-contact">Send</button>
            </form>
        </div >
    );
}

export default Contact