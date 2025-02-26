import { useState, useEffect } from "react";
import EditableText from "../EditableText";
import { CV_App_Modes } from "../../App";
import { CV_App_Editable_Sections } from "../../App";
import AddRemoveContentButton from "../AddRemoveContentButton";
import "../../styles/cv_header.css";

function CV_Header_Links({ updateResumeData, appMode, activeSection, setActiveSection, onEdit, resumeData }) {
    const [headerLinks, setHeaderLinks] = useState(() => {
        const savedData = localStorage.getItem("links");
        return savedData ? JSON.parse(savedData) : ["https://www.linkedin.com/", "https://github.com/"];
    });

    useEffect(() => {
        localStorage.setItem("links", JSON.stringify(headerLinks));
        updateResumeData("headerLinks", headerLinks);
    }, [headerLinks]);

    useEffect(() => {
        if (resumeData && resumeData.headerLinks !== headerLinks) {
            setHeaderLinks(resumeData.headerLinks);
        }
    }, [resumeData]);

    const modifyLink = (linkIndex) => {
        return (newLink) => {
            let linksCopy = [...headerLinks];
            linksCopy[linkIndex] = newLink;
            setHeaderLinks(linksCopy);
        };
    };

    const addLink = () => {
        let linksCopy = [...headerLinks];
        linksCopy.unshift("New Link");
        setHeaderLinks(linksCopy);
    };

    const removeLink = () => {
        let linksCopy = [...headerLinks];
        linksCopy.pop();
        setHeaderLinks(linksCopy);
    };

    return (
        <>
            <p id="headerLinksTitle">Links:</p>
            <ul id="headerLinks">
                {appMode == CV_App_Modes.EDIT && activeSection == CV_App_Editable_Sections.HEADER_LINKS && (
                    <AddRemoveContentButton buttonID="addLinkButton" sectionFunction={addLink} buttonText="Add Link" />
                )}
                {headerLinks.map((link, index) => {
                    return (
                        <li key={link}>
                            {appMode == CV_App_Modes.PRINT ? (
                                <a href={link} target="_blank" rel="noopener noreferrer">
                                    {link}
                                </a>
                            ) : (
                                <EditableText
                                    initialText={link}
                                    setterFunction={modifyLink(index)}
                                    setActiveSection={setActiveSection}
                                    onEdit={onEdit}
                                />
                            )}
                        </li>
                    );
                })}
                {appMode == CV_App_Modes.EDIT && activeSection == CV_App_Editable_Sections.HEADER_LINKS && (
                    <AddRemoveContentButton
                        buttonID="removeLinkButton"
                        sectionFunction={removeLink}
                        buttonText="Remove Link"
                    />
                )}
            </ul>
        </>
    );
}

export default CV_Header_Links;
