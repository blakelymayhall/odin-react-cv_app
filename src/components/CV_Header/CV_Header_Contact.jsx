import { useState } from "react";
import Edit_Button from "../Edit_Button";
import "../../styles/CV_header/cv_header.css";

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
                <li>Email: {headerContactInfo.email}</li>
                <li>Phone: {headerContactInfo.phone}</li>
                <li>Address: {headerContactInfo.address}</li>
            </ul>
        </>
    );
}

export default CV_Header_Contact;
