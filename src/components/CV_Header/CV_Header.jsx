import { useState } from "react";
import CV_Header_Name from "./CV_Header_Name";
import CV_Header_Contact from "./CV_Header_Contact";
import CV_Header_Links from "./CV_Header_Links";
import { CV_App_Modes } from "../../App";
import { CV_App_Editable_Sections } from "../../App";
import "../../styles/cv_header.css";

import { faker } from "@faker-js/faker";

function CV_Header({ updateResumeData, appMode, activeSection, setActiveSection, resumeData }) {
    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();

    const isActiveSection = () => {
        return (
            appMode == CV_App_Modes.EDIT &&
            (activeSection == CV_App_Editable_Sections.HEADER_LINKS ||
                activeSection == CV_App_Editable_Sections.HEADER_OTHER)
        );
    };

    return (
        <div id="headerSection" className={isActiveSection() ? "activeSection" : ""}>
            <CV_Header_Name
                updateResumeData={updateResumeData}
                firstName={firstName}
                lastName={lastName}
                setActiveSection={() => {
                    setActiveSection(CV_App_Editable_Sections.HEADER_OTHER);
                    return true;
                }}
                resumeData={resumeData}
            />
            <div id="headerInfoRow">
                <CV_Header_Contact
                    updateResumeData={updateResumeData}
                    firstName={firstName}
                    lastName={lastName}
                    setActiveSection={() => {
                        setActiveSection(CV_App_Editable_Sections.HEADER_OTHER);
                        return true;
                    }}
                    resumeData={resumeData}
                />
                <CV_Header_Links
                    updateResumeData={updateResumeData}
                    appMode={appMode}
                    activeSection={activeSection}
                    setActiveSection={() => {
                        setActiveSection(CV_App_Editable_Sections.HEADER_LINKS);
                        return true;
                    }}
                    resumeData={resumeData}
                />
            </div>
            <div className="lineBreak"></div>
        </div>
    );
}

export default CV_Header;
