import { useState } from "react";
import Edit_Button from "../Edit_Button";
import "../../styles/CV_header/cv_header.css";
import EditableText from "../EditableText";

function CV_Header_Links() {
    const [headerLinks, setHeaderLinks] = useState({
        links: [
            "https://www.linkedin.com/in/blakely-mayhall-197689105/",
            "https://github.com/blakelymayhall",
            "https://blakelymayhall.github.io/personal-website/",
        ],
    });

    /* When you implement print mode / edit mode, change the EditableText to an <a> 

                            <a href={link} target="_blank">
                                {link}
                            </a>
    */

    return (
        <>
            <p id="headerLinksTitle">Links:</p>
            <ul id="headerLinks">
                {headerLinks.links.map((link) => {
                    return (
                        <li key={link}>
                            <EditableText initialText={link}></EditableText>
                        </li>
                    );
                })}
            </ul>
        </>
    );
}

export default CV_Header_Links;
