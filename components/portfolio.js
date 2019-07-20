import React, { useRef } from 'react'
import useOnScreen from "../utilhooks/useOnScreen"

function Portfolio() {
    const portRef = useRef();
    const portOnSCreen = useOnScreen(portRef, "-100px")

    const portIsOnScreen = (portOnSCreen === true) ? "visible" : "hidden";

    const sites = [
        {
            img: `https://res.cloudinary.com/mikesnacki/image/upload/ar_3.0,c_crop/q_80/v1563557684/mikesnacki.com/mikesnacki_dlxjdd.webp`,
            name: "mikesnacki.com",
            technologies: "React Hooks, Styled Components",
            blurb: `This webpage was built using primarily the functional
                paradigm in the form of React Hooks. Functional programming 
                has always felt more natural to me than objected oriented.
                In addition, I used styled components within this website to give the 
                effect of lazy loading, as well slow down the menu actions.`,
            url: "mikesnacki.com",
        },
        {
            img: `https://res.cloudinary.com/mikesnacki/image/upload//ar_3.0,c_crop/q_80/v1563557684/mikesnacki.com/library_eqem6t.webp`,
            name: "Library",
            technologies: "React, Firebase",
            blurb: `After finishing Tyler McGinnis' React course, I looked around
                for projects to complete on my own. I looked into
                The Odin Project, who suggested a library web app. I used React
                for the UI and Firebase for data persistence`,
            url: "https://adoring-archimedes-a25935.netlify.com/"
        },
        {
            img: `https://res.cloudinary.com/mikesnacki/image/upload//ar_3.0,c_crop/q_80/v1563557684/mikesnacki.com/githubbattle_admwwv.webp`,
            name: "Github Battle",
            technologies: "React, render props, code splitting",
            blurb: `Part of the course to learn React from Tyler McGinnis. My first React app. 
                Github Battle uses both functional and class components, render props, 
                code splitting, themes and an API call to Github`,
            url: "https://serene-franklin-6a7fb3.netlify.com/"
        },
    ]

    return (
        <div
            id="portfolio"
            ref={portRef}
            className={`portfolio-container ${portIsOnScreen}`}>
            <h2 className="align-center">Some of my web work</h2>
            <ul
                className="align-center flex-row ">
                {sites.map((site, key) =>
                    <li key={key}
                        className="sites-container flex-col-port">
                        <h2><button className="button-clear"><a href={site.url}>{site.name}</a></button></h2>
                        <img src={site.img} alt="image for the portfolio sites" />
                        <h6>Built with: {site.technologies}</h6>
                        <p>{site.blurb}</p>
                    </li>)}
            </ul>
        </div>
    );
}

export default Portfolio