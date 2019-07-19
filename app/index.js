import React, { useRef } from 'react'
import ReactDOM from 'react-dom'
import "./index.css"
import Header from "../components/header"
import Landing from "../components/landing"
import About from "../components/about"
import Experience from "../components/experience"
import Portfolio from "../components/portfolio"

export default function App() {

    return (
        <div>
            <Header />
            <Landing />
            <About />
            <Experience />
            <Portfolio />
        </div>
    )

}

ReactDOM.render(<App />, document.getElementById('app'))