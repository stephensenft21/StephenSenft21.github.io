import React from 'react'

export const FirstCake = () => {
    return (
        <>
            <div className="img_block">
                <div className="header-title">
                    <a
                        className="header-title"
                        href={require("../../images/First (4).png")}
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        <img
                            src={require("../../images/First (4).png")}
                            className="img_link First_Cake"
                            alt="First Cake"
                        />
                    </a>
                    <h2 className="date">First Cake</h2>
                    <h3 className="blurb">React-based mobile first single page application that helps users find casual date spots in the Nashville area. Uses Zomato's API for persistant data.  Users are able to save favorite locations, add comments with full-CRUD functionality and delete favorite locations. Implemented functional components using some React Hooks to effect the state of the views.
								</h3>
                    <div className="buttonDiv">
                        <a
                            className="header-title"
                            href="https://github.com/stephensenft21/First-Cake"
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