import { useState } from "react";
import CV_Header_Name from "./CV_Header_Name";
import CV_Header_Contact from "./CV_Header_Contact";
import CV_Header_Links from "./CV_Header_Links";
import "../../styles/CV_header/cv_header.css";

function CV_Header() {
    const [header, setHeader] = useState(0);

    return (
        <div id="headerSection">
            <CV_Header_Name />
            <div id="headerInfoRow">
                <CV_Header_Contact />
                <CV_Header_Links />
            </div>
            <div className="lineBreak"></div>
        </div>
    );
}

export default CV_Header;
