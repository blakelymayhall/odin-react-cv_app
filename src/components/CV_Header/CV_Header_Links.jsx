import { useState, useEffect } from "react";
import "../../styles/CV_header/cv_header.css";
import EditableText from "../EditableText";
import AddSubContentControls from "../AddSubContentControls";

function CV_Header_Links({ isPrintMode }) {
    const [headerLinks, setHeaderLinks] = useState(() => {
        const savedData = localStorage.getItem("links");
        return savedData ? JSON.parse(savedData) : ["https://www.linkedin.com/", "https://github.com/"];
    });

    useEffect(() => {
        localStorage.setItem("links", JSON.stringify(headerLinks));
    }, [headerLinks]);

    const modifyLink = (linkIndex) => {
        return (newLink) => {
            let linksCopy = [...headerLinks];
            linksCopy[linkIndex] = newLink;
            setHeaderLinks(linksCopy);
        };
    };

    return (
        <>
            <p id="headerLinksTitle">Links:</p>
            <AddSubContentControls topPos={"0mm"} leftPos={"150mm"} />
            <ul id="headerLinks">
                {headerLinks.map((link, index) => {
                    return (
                        <li key={link}>
                            {isPrintMode ? (
                                <a href={link} target="_blank" rel="noopener noreferrer">
                                    {link}
                                </a>
                            ) : (
                                <EditableText initialText={link} setterFunction={modifyLink(index)}></EditableText>
                            )}
                        </li>
                    );
                })}
            </ul>
        </>
    );
}

export default CV_Header_Links;
