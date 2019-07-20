import React, { useState, useRef } from "react"
import {
    FaGithub,
    FaLinkedinIn
} from 'react-icons/fa'

export default function Footer() {

    return (

        <footer className="flex-row footer space-around" id="header">
            <div className="align-center ">
                <a href="https://github.com/mikesnacki" target="_blank" ><FaGithub /></a>
                <a href="https://www.linkedin.com/in/michaelsnacki/" target="_blank" ><FaLinkedinIn /></a>
                <p className="">Created by Mike Snacki</p>
            </div>

        </footer>



    )
}

