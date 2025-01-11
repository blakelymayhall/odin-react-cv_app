import React, { useState } from "react";
import "./index.css";
import CV_Header from "./components/CV_Header/CV_Header.jsx";
import CV_Objective from "./components/CV_Objective/CV_Objective.jsx";
import CV_Education from "./components/CV_Education/CV_Education.jsx";
import CV_Toolbar from "./components/CV_Toolbar/CV_Toolbar.jsx";
import CV_Experience from "./components/CV_Experience/CV_Experience.jsx";
import CV_Skills from "./components/CV_Skills/CV_Skills.jsx";

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
    SKILLS: "skills",
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
            <CV_Skills
                appMode={CV_App_Mode}
                activeSection={sectionBeingEdited}
                setActiveSection={() => {
                    setActiveSection(CV_App_Editable_Sections.SKILLS);
                    return sectionBeingEdited == CV_App_Editable_Sections.SKILLS;
                }}
            />
        </>
    );
};

export default App;
