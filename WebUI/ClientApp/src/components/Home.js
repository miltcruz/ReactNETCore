import React from 'react';
import { Row, Col } from 'reactstrap'

export const Home = () => {

    const style = {
        container: {
            backgroundColor: '#96a8a0',
            padding: '5%',
            textAlign: 'center'
        },
        profileImage: {
            width: '15rem',
            height: '15rem',
            borderRadius: '100%'
        },
    }

    return (
        <div style={style.container} >
            <Row>
                <Col>
                    <img
                        src="img/Milton-Profile.jpg"
                        alt="Milton's Profile Picture"
                        style={style.profileImage}
                    />
                </Col>
            </Row>
            <Row>
                <Col>
                    <h1><strong>Hi, My name is Milton Cruz.</strong></h1>
                    <p>
                        I am a robust problem solver with Front-End and Back-End experience.
                        I have been in the IT Industry for over 11 years, and my diverse
                        technical background has given me the ability to leverage full-stack
                        expertise to build interactive and user-centered web and mobile applications.
                        Extensive expertise in large system architecture development,
                        as well as network design and configuration.
                    </p>
                    <h4>
                        About this project:
                    </h4>
                    <p>
                        This is a Single Page App (SPA) with React and ASP.NET Core following the principles of Clean Architecture.
                    </p>
                    <ul>
                        <li>Domain: This layer contains all entities, enums, exceptions, interfaces, types and logic.</li>
                        <li>Application: This layer contains all application logic.</li>
                        <li>Infrastructure: This layer contains classes for accessing external resources.</li>
                        <li>WebUI: This layer depends on both the Application and Infrastructure layers.</li>
                    </ul>
                </Col>
            </Row>
        </div>
    )
}
