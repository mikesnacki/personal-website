import React, { useState } from "react"
import { useWindowDimensions } from "../utilhooks/windowDim"

export default function Header() {

  const { width } = useWindowDimensions();
  const collapseWidth = 700;

  const [navDisplay, activateNavDisplay] = useState(false)
  const navDisplayed = navDisplay === true ? "displayed" : "hidden"
  const activated = navDisplay && "displayed"

  const links = [
    <li key={1}><a href="#about">About</a></li>,
    <li key={2}><a href="#experience">Experience</a></li>,
    <li key={3}><a>Portfolio</a></li>,
    <li key={4}><a>Contact</a></li>
  ]

  return (

    <div className="container" >
      <header className="flex-row header space-around">
        <h1>Mike Snacki</h1>
        {width >= collapseWidth || window.innerWidth <= collapseWidth
          ? <ul className="nav-links">{links}</ul >
          : <div>
            <button
              onClick={() => activateNavDisplay(!navDisplay)}
              className={`menu-bar ${activated}`}>
              <div className="line1"></div>
              <div className="line2"></div>
              <div className="line3"></div>
            </button>
          </div>}
      </header>
      <ul
        onMouseLeave={() => activateNavDisplay(!navDisplay)}
        className={`menu-dropdown-${navDisplayed}`}>
        {navDisplay === true && width < collapseWidth && links}
      </ul>
    </div >

  )
}

