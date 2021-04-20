import React from 'react'

export const Profile = (props) => {

    return (
        <>
            <div className="img">
                <div className="abouttext">
                    <p>{props.data.abouttext}</p>
                    <p>{props.data.abouttext2}</p>
                </div>
                <img
                    src={require("../images/SnowBoardProfile.jpg")}
                    className="picture"
                    alt="Stephen Senft"
                />
            </div>
        </>
    )
}