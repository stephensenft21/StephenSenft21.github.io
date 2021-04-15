import React from 'react'

export const TherapyApplication = (props) => {
    return (
        <>
            <div className="img_block">
                <div className="header-title">
                    <a
                        className="header-title"
                        href="https://github.com/stephensenft21/NOCD"
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        <img
                            src={require("../../images/logo.png")}
                            className="img_link NOCD_link"
                            alt="CasaAszafran"
                        />
                    </a>
                    <h2 className="date">NOCD</h2>
                    <h2 className="blurb">
                        Is a full-stack application built using a React.js frontend, C# .NET core, REST API with Entity framework , Identity Auth, SQL Server backend, Chart.js  Material UI and custom CSS for styling. Db diagram for data architecture. This app is  designed to help therapists and their patients keep track of the short term and long term progress of a particular type of therapy for patients with Obsessive-Compulsive Disorder. The most common practice is Cognitive behavioral therapy (CBT), a type of psychotherapy, that is effective for many people with OCD. . This app will allow the patient to collect day to day data after they are exposed to what triggers their OCD and how they handle the situation.
									</h2>
                    <div className="buttonDiv">
                        <a
                            className="header-title"
                            href="https://github.com/stephensenft21/NOCD"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            <button className=" header-title">
                                View Project
											</button>
                        </a>
                    </div>
                </div>
            </div>

        </>
    )
}