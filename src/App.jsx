import React, { useState } from "react";
import "./index.css";
import CV_Header from "./components/CV_Header/CV_Header.jsx";
import CV_Objective from "./components/CV_Objective/CV_Objective.jsx";
import CV_Education from "./components/CV_Education/CV_Education.jsx";
import CV_Toolbar from "./components/CV_Toolbar/CV_Toolbar.jsx";
import CV_Experience from "./components/CV_Experience/CV_Experience.jsx";
import CV_Skills from "./components/CV_Skills/CV_Skills.jsx";
import CV_Honors from "./components/CV_Honors/CV_Honors.jsx";
import CV_Projects from "./components/CV_Projects/CV_Projects.jsx";

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
    HONORS: "honors",
    PROJECTS: "projects",
};

const App = () => {
    const [CV_App_Mode, setCV_App_Mode] = useState(CV_App_Modes.EDIT);
    const [sectionBeingEdited, setSectionBeingEdited] = useState(0);
    const [resumeData, setResumeData] = useState(null);

    const updateResumeData = (key, value) => {
        setResumeData((prevState) => ({
            ...prevState,
            [key]: value,
        }));
    };

    const getResumeData = () => {
        return resumeData;
    };

    const updateFromUpload = (new_data) => {
        setResumeData({ ...new_data });
    };

    const handleSetMode = (CV_App_Mode) => {
        setCV_App_Mode(CV_App_Mode);
    };

    const setActiveSection = (CV_App_Editable_Section) => {
        setSectionBeingEdited(CV_App_Editable_Section);
    };

    return (
        <>
            <CV_Toolbar
                handleSetMode={handleSetMode}
                getResumeData={getResumeData}
                updateFromUpload={updateFromUpload}
            />
            <CV_Header
                updateResumeData={updateResumeData}
                appMode={CV_App_Mode}
                activeSection={sectionBeingEdited}
                setActiveSection={setActiveSection}
                resumeData={resumeData}
            />
            <CV_Objective
                updateResumeData={updateResumeData}
                appMode={CV_App_Mode}
                activeSection={sectionBeingEdited}
                setActiveSection={() => {
                    setActiveSection(CV_App_Editable_Sections.OBJECTIVE);
                    return true;
                }}
                resumeData={resumeData}
            />
            <CV_Education
                updateResumeData={updateResumeData}
                appMode={CV_App_Mode}
                activeSection={sectionBeingEdited}
                setActiveSection={() => {
                    setActiveSection(CV_App_Editable_Sections.EDUCATION);
                    return sectionBeingEdited == CV_App_Editable_Sections.EDUCATION;
                }}
                resumeData={resumeData}
            />
            <CV_Experience
                updateResumeData={updateResumeData}
                appMode={CV_App_Mode}
                activeSection={sectionBeingEdited}
                setActiveSection={() => {
                    setActiveSection(CV_App_Editable_Sections.EXPERIENCE);
                    return sectionBeingEdited == CV_App_Editable_Sections.EXPERIENCE;
                }}
                resumeData={resumeData}
            />
            <CV_Skills
                updateResumeData={updateResumeData}
                appMode={CV_App_Mode}
                activeSection={sectionBeingEdited}
                setActiveSection={() => {
                    setActiveSection(CV_App_Editable_Sections.SKILLS);
                    return sectionBeingEdited == CV_App_Editable_Sections.SKILLS;
                }}
                resumeData={resumeData}
            />
            <CV_Honors
                updateResumeData={updateResumeData}
                appMode={CV_App_Mode}
                activeSection={sectionBeingEdited}
                setActiveSection={() => {
                    setActiveSection(CV_App_Editable_Sections.HONORS);
                    return sectionBeingEdited == CV_App_Editable_Sections.HONORS;
                }}
                resumeData={resumeData}
            />
            <CV_Projects
                updateResumeData={updateResumeData}
                appMode={CV_App_Mode}
                activeSection={sectionBeingEdited}
                setActiveSection={() => {
                    setActiveSection(CV_App_Editable_Sections.PROJECTS);
                    return sectionBeingEdited == CV_App_Editable_Sections.PROJECTS;
                }}
                resumeData={resumeData}
            />
        </>
    );
};

export default App;
