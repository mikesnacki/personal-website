import React, { useRef } from 'react'
import useOnScreen from "../utilhooks/useOnScreen"

function Portfolio() {
    const portRef = useRef();
    const portOnSCreen = useOnScreen(portRef, "-100px")

    const portIsOnScreen = (portOnSCreen === true) ? "visible" : "hidden";

    const sites = [
        {
            img: `https://res.cloudinary.com/mikesnacki/image/upload//upload/ar_3.0,c_crop/q_80/v1587469258/storydashboard_dldomm.png`,
            name: "Story Dashboard",
            technologies: "MongoDB, Express, React, Node",
            blurb: `Second full stack application. Allows users to log in using Auth0, create projects and stories within projects. Everything is editable`,
            url: "https://storydashboard.herokuapp.com/"
        },
        {
            img: `https://res.cloudinary.com/mikesnacki/image/upload/ar_3.0,c_crop/q_80/v1563557684/mikesnacki.com/snackirents_br1eau.png`,
            name: "Snacki Rents",
            technologies: "MongoDB, Express, React, Node",
            blurb: `First full stack application, built on Express and Node. There are select sliders and buttons to filter properties to a customer's preference
            Application has a Admin area which allows property managers to add and change properties. `,
            url: "https://snackirents.herokuapp.com/"
        },
        {
            img: `https://res.cloudinary.com/mikesnacki/image/upload/ar_3.0,c_crop/q_80/v1563557684/mikesnacki.com/githubbattle_admwwv.png`,
            name: "Github Battle",
            technologies: "React, render props, code splitting",
            blurb: `Part of the course to learn React from Tyler McGinnis. My first React app. 
                Github Battle uses both functional and class components, render props, 
                code splitting, themes and an API call to Github`,
            url: "https://serene-franklin-6a7fb3.netlify.com/"
        },
        {
            img: `https://res.cloudinary.com/mikesnacki/image/upload/ar_3.0,c_crop/q_80/v1563557684/mikesnacki.com/mikesnacki_dlxjdd.png`,
            name: "mikesnacki.com",
            technologies: "React Hooks, Styled Components",
            blurb: `This webpage was built using primarily the functional
                paradigm in the form of React Hooks. Functional programming 
                has always felt more natural to me than objected oriented.
                In addition, I used styled components within this website to give the 
                effect of lazy loading, as well slow down the menu actions.`,
            url: "https://mikesnacki.com/",
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
                        className="expert flex-col port">
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