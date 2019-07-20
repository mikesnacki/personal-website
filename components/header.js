import React, { useState, useRef } from "react"
import { useWindowDimensions } from "../utilhooks/windowDim"
import useOnClickOutside from "../utilhooks/useOnClickOutside"

export default function Header() {

  const { width } = useWindowDimensions();
  const collapseWidth = 1000;
  const headerRef = useRef();

  const [navDisplay, activateNavDisplay] = useState(false)

  useOnClickOutside(headerRef, () => activateNavDisplay(false))

  const links = [
    <li key={1}><a href="#about">About</a></li>,
    <li key={2}><a href="#experience">Experience</a></li>,
    <li key={3}><a href="#portfolio">Portfolio</a></li>,
    <li key={4}><a href="#contact">Contact</a></li>
  ]

  return (

    <div className="container" ref={headerRef}>
      <header className="flex-row header space-around">
        <h1>Mike Snacki</h1>
        {width >= collapseWidth
          ? <ul className="nav-links">{links}</ul >
          : <div>
            <button
              className={`menu-bar-${navDisplay}`}
              onClick={() => activateNavDisplay(!navDisplay)}
            >
              <div className="line1"></div>
              <div className="line2"></div>
              <div className="line3"></div>
            </button>
          </div>}
      </header>
      <ul
        onMouseLeave={() => activateNavDisplay(!navDisplay)}
        onMouseOut={() => activateNavDisplay(!navDisplay)}
        onClick={() => activateNavDisplay(!navDisplay)}
        className={`menu-dropdown-${navDisplay}`}>
        {navDisplay === true && width < collapseWidth && links}
      </ul>
    </div >

  )
}

