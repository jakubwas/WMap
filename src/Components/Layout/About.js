import React from "react";
import styled from "styled-components";
import BackArrow from "../Buttons/BackArrow";
import githubLogo from "../../assets/github-logo.svg";

const AboutContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    color: rgb(0, 31, 63);
`;
const AboutHeader = styled.h1`
    font-size: 4rem;
    font-weight: 600;
    letter-spacing: 0.2rem;
`;
const AboutApp = styled.div`
    margin-top: 3rem;
    font-size: 1.8rem;
    font-weight: 500;
    max-width: 50rem;
    text-align: center;
`;
const SourceCode = styled.a`
    display: flex;
    align-items: center;
    margin-top: 0.5rem;
    font-size: 1.5rem;
    cursor: pointer;
    text-decoration: none;
    color: black;
`;

const AboutAuthor = styled.div`
    margin-top: 2rem;
    text-align: center;
    font-size: 2rem;
    font-weight: 600;
`;

const About = () => {
    return (
        <AboutContainer>
            <BackArrow />
            <AboutHeader>About</AboutHeader>
            <AboutApp>
                WMAP is an entertaining and educational geography game that lets you explore
                the world and learn about its countries, capitals and flags. <br />
                <br />
                It was created with React JS library.
            </AboutApp>
            <SourceCode href="https://github.com/jakubwas/WMap" target="_blank">
                <img src={githubLogo} style={{ width: "3rem", marginRight: "0.5rem" }} />
                Get the source code
            </SourceCode>
            <AboutAuthor>
                App Design & Developed by
                <br /> Jakub Was <br />
                <a
                    href="https://wasjakub.com/"
                    target="_blank"
                    style={{ textDecoration: "none", fontWeight: "400", color: "#2431EB" }}
                >
                    wasjakub.com
                </a>
            </AboutAuthor>
        </AboutContainer>
    );
};

export default About;
