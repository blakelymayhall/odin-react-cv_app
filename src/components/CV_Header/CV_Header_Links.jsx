import { useState } from "react";
import Edit_Button from "../Edit_Button";
import "../../styles/CV_header/cv_header.css";

function CV_Header_Links() {
    const [headerLinks, setHeaderLinks] = useState({
        links: [
            "https://www.linkedin.com/in/blakely-mayhall-197689105/",
            "https://github.com/blakelymayhall",
            "https://blakelymayhall.github.io/personal-website/",
        ],
    });

    return (
        <>
            <p id="headerLinksTitle">Links:</p>
            <ul id="headerLinks">
                {headerLinks.links.map((link) => {
                    return (
                        <li key={link}>
                            <a href={link} target="_blank">
                                {link}
                            </a>
                        </li>
                    );
                })}
            </ul>
        </>
    );
}

export default CV_Header_Links;
