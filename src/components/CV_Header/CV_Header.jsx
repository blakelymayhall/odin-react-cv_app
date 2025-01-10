import { useState } from "react";
import CV_Header_Name from "./CV_Header_Name";
import CV_Header_Contact from "./CV_Header_Contact";
import CV_Header_Links from "./CV_Header_Links";
import { CV_App_Modes } from "../../App";
import { CV_App_Editable_Sections } from "../../App";
import "../../styles/CV_header/cv_header.css";

import { faker } from "@faker-js/faker";

function CV_Header({ appMode, activeSection, setActiveSection }) {
    const firstName = "Blakely C.";
    const lastName = "Mayhall";

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
                firstName={firstName}
                lastName={lastName}
                setActiveSection={() => {
                    setActiveSection(CV_App_Editable_Sections.HEADER_OTHER);
                    return true;
                }}
            />
            <div id="headerInfoRow">
                <CV_Header_Contact
                    firstName={firstName}
                    lastName={lastName}
                    setActiveSection={() => {
                        setActiveSection(CV_App_Editable_Sections.HEADER_OTHER);
                        return true;
                    }}
                />
                <CV_Header_Links
                    appMode={appMode}
                    activeSection={activeSection}
                    setActiveSection={() => {
                        setActiveSection(CV_App_Editable_Sections.HEADER_LINKS);
                        return true;
                    }}
                />
            </div>
            <div className="lineBreak"></div>
        </div>
    );
}

export default CV_Header;
