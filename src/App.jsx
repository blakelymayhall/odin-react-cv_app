import React, { useState } from "react";
import "./index.css";
import CV_Header from "./components/CV_Header/CV_Header.jsx";
import CV_Objective from "./components/CV_Objective/CV_Objective.jsx";
import CV_Education from "./components/CV_Education/CV_Education.jsx";
import CV_Toolbar from "./components/CV_Toolbar/CV_Toolbar.jsx";
import CV_Experience from "./components/CV_Experience/CV_Experience.jsx";

export const CV_App_Modes = {
    PRINT: "print",
    EDIT: "edit",
    SETTINGS: "settings",
};

export const CV_App_Editable_Sections = {
    HEADER_OTHER: "header_other",
    HEADER_LINKS: "header_links",
    OBJECTIVE: "objective",
    EDUCATION: "education",
    EXPERIENCE: "experience",
};

const App = () => {
    const [CV_App_Mode, setCV_App_Mode] = useState(CV_App_Modes.EDIT);
    const [sectionBeingEdited, setSectionBeingEdited] = useState(0);

    const handleSetMode = (CV_App_Mode) => {
        setCV_App_Mode(CV_App_Mode);
    };

    const setActiveSection = (CV_App_Editable_Section) => {
        setSectionBeingEdited(CV_App_Editable_Section);
    };

    return (
        <>
            <CV_Toolbar handleSetMode={handleSetMode} />
            <CV_Header appMode={CV_App_Mode} activeSection={sectionBeingEdited} setActiveSection={setActiveSection} />
            <CV_Objective
                appMode={CV_App_Mode}
                activeSection={sectionBeingEdited}
                setActiveSection={() => {
                    setActiveSection(CV_App_Editable_Sections.OBJECTIVE);
                    return true;
                }}
            />
            <CV_Education
                appMode={CV_App_Mode}
                activeSection={sectionBeingEdited}
                setActiveSection={() => {
                    setActiveSection(CV_App_Editable_Sections.EDUCATION);
                    return sectionBeingEdited == CV_App_Editable_Sections.EDUCATION;
                }}
            />
            <CV_Experience
                appMode={CV_App_Mode}
                activeSection={sectionBeingEdited}
                setActiveSection={() => {
                    setActiveSection(CV_App_Editable_Sections.EXPERIENCE);
                    return sectionBeingEdited == CV_App_Editable_Sections.EXPERIENCE;
                }}
            />
            <div id="skillsSection">
                <div id="skillsContainer">
                    <p id="skillTitle">Skills:</p>
                    <div id="skillsGrid">
                        <p>C/C++</p>
                        <p>MATRIXx</p>
                        <p>Python</p>
                        <p>Git/GitLab</p>
                        <p>Linux</p>
                        <p>Jira/Rally</p>
                        <p>FORTRAN</p>
                        <p>C#</p>
                        <p>Docker</p>
                        <p>CI/CD</p>
                        <p>JavaScript</p>
                        <p>MATLAB</p>
                    </div>
                </div>
            </div>
            <div id="honorsSection">
                <div id="honorsContainer">
                    <p id="honorsTitle">Honors & Activities:</p>
                    <div id="honorsList">
                        <p>The Boeing Company: 2023 Excellence in Digital Engineering</p>
                        <p>The Boeing Company: 2021 MWS Engineering Team of the Year (Golden Horde)</p>
                        <p>Missouri S&T: Missouri Satellite Team Guidance, Navigation, and Control</p>
                        <p>Missouri S&T: Boeing Mentor Program</p>
                        <p>Lambda Chi Alpha: National Social Fraternity - Secretary</p>
                    </div>
                </div>
            </div>
            <div id="projectsSection">
                <div id="projectsContainer">
                    <p id="projectsTitle">Projects:</p>
                    <div id="projectsList">
                        <p>
                            <strong>Faker-Cxx: Unit Test Fix (C++, GTest, CI/CD)</strong> -
                            https://github.com/cieslarmichal/faker-cxx/issues/999
                        </p>
                        <p>
                            <strong>War Card Game: Unity Development (C#)</strong> -
                            https://github.com/blakelymayhall/Unity_War_CardGame
                        </p>
                        <p>
                            <strong>Weather API App: (HTML / CSS / JavaScript)</strong> -
                            https://github.com/blakelymayhall/odin-weather-app
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default App;
