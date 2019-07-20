import React, { useState, useEffect, useRef } from "react"
import { useWindowDimensions } from "../utilhooks/windowDim"
import useOnScreen from "../utilhooks/useOnScreen"
import styled, { keyframes } from 'styled-components';
import {
    FaFileExcel,
    FaTable,
    FaGoogle,
    FaChartLine,
    FaHtml5,
    FaCss3Alt,
    FaJsSquare,
    FaPython,
    FaReact,
    FaDatabase,

} from 'react-icons/fa'

export default function Experience() {

    const { width } = useWindowDimensions();
    const [jobs, setJobs] = useState(6)
    const expRef = useRef();
    const expOnSCreen = useOnScreen(expRef, "-100px")

    const expIsOnScreen = (expOnSCreen === true) ? "visible" : "hidden";

    const iconSize = width / 20 + 12;

    const jobsArray = ["SUNY Brockport",
        "Citi",
        "University of Rochester",
        "Citi",
        "Citi",
        "Life Storage",
        "M&T Bank"
    ]

    const titlesArray = ["Student",
        "Operational Risk Analyst",
        "Part-time MBA Student",
        "Credit & Portfolio Analyst",
        "Equity Research Associate",
        "Financial Analyst",
        "Product Manager"]

    const datesArray = ["2008-2012",
        "2012-2014",
        "2014-2017",
        "2014-2015",
        "2015-2017",
        "2017-2018",
        "2018-Present",
    ]

    const DutiesArray = ["Bachelor of Science, Finance, minor in Economics",
        "Evaluate and advise on operational risk for Sales & Trading department",
        "Master of Business Administration, concentration in Finance",
        "Analyze the credit worthiness of select corporate browerers within the  Energy sector, Chemicals industry, and Metals and Mining industry",
        "Responsible for company- and industry-specific research within the U.S. Auto OEM and Auto Parts industry",
        "Support the company’s third party management platform from initial contact with real estate developers to the annual budgeting process for their store(s)",
        "Make recommendations on product pricing and strategy to drive origination volume and profit margin. Developed several applications in Python and JS, HTML5, CSS3"

    ]

    const barFill = (jobs / (DutiesArray.length - 1)) * 100

    const changeColor = keyframes`
            from {background: rgb(23, 163, 152, 0.05);
            color: rgb(23, 163, 152, 0.05);
            }
            to {background: rgb(23, 163, 152, 0.4);
                color: rgb(23, 163, 152, 0.4);       
            }
        `

    const Bar = styled.div`
        &{
            background: rgb(23, 163, 152, 0.1);
            height: 4px;
            border-radius: 50px;
            position: relative;
            border: 0.5px solid rgb(23, 163, 152, 0.3);
            border-radius: 25px;
        }
        &:after{
            content: "/A";
            height: 4px;
            overflow: hidden;
            width:${barFill}%;
            background: rgb(23, 163, 152, 0.4);
            position: absolute;
            animation: ${changeColor} 0.75s linear;
        }
        `

    return (
        < div
            className="experience-container"
            id="experience"
            ref={expRef}
        >

            <div className={`${expIsOnScreen}`}>
                <div className="align-center exp-header">
                    <h2 className="align-center">Career Timeline</h2>
                    <Bar className="flex-row space-around">
                        {[...Array(7)].map((x, i) =>
                            <button
                                className="button-experience"
                                key={i}
                                value={i}
                                onClick={() => setJobs(i)}

                            ></button>
                        )}
                    </Bar>
                    <h3 className="dtl-exp">{jobsArray[jobs]}</h3>
                    <h4 className="dtl-exp">{titlesArray[jobs]}</h4>
                    <h5 className="dtl-exp">{datesArray[jobs]}</h5>
                    <p className="dtl-exp">{DutiesArray[jobs]}</p>
                </div>


                <h4 className="align-center exp-header">Expert</h4>
                <div className="flex-row expert">
                    <div className="flex-col">
                        <h5 className="align-center">Excel</h5>
                        <FaFileExcel size={iconSize} />
                    </div>
                    <div className="flex-col">
                        <h5 className="align-center">Modeling</h5>
                        <FaTable size={iconSize} />
                    </div>
                    <div className="flex-col">
                        <h5 className="align-center">Analytics</h5>
                        <FaChartLine size={iconSize} />
                    </div>
                </div>
                <h4 className="align-center exp-header">Proficient</h4>
                <div className="flex-row proficient">
                    <div className="flex-col">
                        <h5 className="align-center">HTML5</h5>
                        <FaHtml5 size={iconSize} />
                    </div>
                    <div className="flex-col">
                        <h5 className="align-center">CSS3</h5>
                        <FaCss3Alt size={iconSize} />
                    </div>
                    <div className="flex-col">
                        <h5 className="align-center">JavaScript</h5>
                        <FaJsSquare size={iconSize} />
                    </div>
                    <div className="flex-col">
                        <h5 className="align-center">Googling</h5>
                        <FaGoogle size={iconSize} />
                    </div>
                </div>
                <h4 className="align-center exp-header">Capable</h4>
                <div className="flex-row capable">
                    <div className="flex-col">
                        <h5 className="align-center">React</h5>
                        <FaReact size={iconSize} />
                    </div>
                    <div className="flex-col">
                        <h5 className="align-center">Databases</h5>
                        <FaDatabase size={iconSize} />
                    </div>
                    <div className="flex-col">
                        <h5 className="align-center">Python</h5>
                        <FaPython size={iconSize} />
                    </div>
                </div>
            </div>
        </div >
    )
}

