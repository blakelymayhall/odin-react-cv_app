import { useState } from "react";
import Edit_Button from "../Edit_Button";
import "../../styles/CV_header/cv_header.css";
import EditableText from "../EditableText";

function CV_Header_Contact() {
    const [headerContactInfo, setHeaderContactInfo] = useState({
        email: "name@domain.com",
        phone: "###-###-####",
        address: "### Circle, City, State #####",
    });

    return (
        <>
            <p id="headerContactTitle">Contact:</p>
            <ul id="headerContact">
                <li>
                    <EditableText prefix="Email: " initialText={headerContactInfo.email}></EditableText>
                </li>
                <li>
                    <EditableText prefix="Phone: " initialText={headerContactInfo.phone}></EditableText>
                </li>
                <li>
                    <EditableText prefix="Address: " initialText={headerContactInfo.address}></EditableText>
                </li>
            </ul>
        </>
    );
}

export default CV_Header_Contact;
