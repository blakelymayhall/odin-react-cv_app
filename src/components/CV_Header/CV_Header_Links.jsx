import { useState } from "react";
import Edit_Button from "../Edit_Button";
import "../../styles/CV_header/cv_header.css";
import EditableText from "../EditableText";

import { faker } from "@faker-js/faker";

function CV_Header_Links({ isPrintMode }) {
    const links = ["https://www.linkedin.com/", "https://github.com/"];

    return (
        <>
            <p id="headerLinksTitle">Links:</p>
            <ul id="headerLinks">
                {links.map((link) => {
                    return (
                        <li key={link}>
                            {isPrintMode ? (
                                <a href={link} target="_blank" rel="noopener noreferrer">
                                    {link}
                                </a>
                            ) : (
                                <EditableText initialText={link}></EditableText>
                            )}
                        </li>
                    );
                })}
            </ul>
        </>
    );
}

export default CV_Header_Links;
