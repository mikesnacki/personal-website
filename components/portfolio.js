import React from 'react'
import { useWindowDimensions } from "../utilhooks/windowDim"

function Portfolio() {
    const { width, height } = useWindowDimensions();
    const picWidth = 50;

    const sites = [
        {
            img: `https://res.cloudinary.com/mikesnacki/image/upload/v1563557684/mikesnacki.com/mikesnacki_dlxjdd.png`,
            name: "mikesnacki.com",
            technologies: "React Hooks, Styled Components",
            blurb: `This webpage was build using primarily a functional
                paradigm in the form of hooks. Functional programming 
                has always felt more natural to me than objected oriented.
                I used styled components within this website to give the 
                effect of lazy loading, as well slow down the menu actions.`,
            url: "mikesnacki.com",
        },
        {
            img: `https://res.cloudinary.com/mikesnacki/image/upload/v1563557684/mikesnacki.com/library_eqem6t.png`,
            name: "Library",
            technologies: "React, Firebase",
            blurb: `After finishing Tyler McGinnis' react course, I looked around
                for projects to complete without following along. I looked into
                The Odin Project, who suggested a library web app. I used React
                for the UI and Firebase for data persistence`,
            url: "https://adoring-archimedes-a25935.netlify.com/"
        },
        {
            img: `https://res.cloudinary.com/mikesnacki/image/upload/v1563557684/mikesnacki.com/githubbattle_admwwv.png`,
            name: "Github Battle",
            technologies: "React, render props, code splitting",
            blurb: `Part of the course to learn React from Tyler McGinnis. My first React app. 
                Git Hub Battle uses both functional and class components, render props, 
                code splitting, themes and an API call to Github`,
            url: "https://serene-franklin-6a7fb3.netlify.com/"
        },
    ]

    return (
        <div id="portfolio">
            <h2 className="align-center">Portfolio</h2>
            <ul
                className="align-center flex-row ">
                {sites.map((site, key) =>
                    <li key={key}
                        className="sites-container flex-col-port">
                        <h2><button className="btn-clear"><a href={site.url}>{site.name}</a></button></h2>
                        <img src={site.img} alt="" />
                        <h5>Built with: {site.technologies}</h5>
                        <p>{site.blurb}</p>
                    </li>)}
            </ul>
        </div>
    );
}

export default Portfolio