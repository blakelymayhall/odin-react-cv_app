import { useState } from "react";
import Edit_Button from "../Edit_Button";
import "../../styles/CV_header/cv_header.css";
import EditableText from "../EditableText";

import { faker } from "@faker-js/faker";

function CV_Header_Contact({ firstName, lastName }) {
    const [headerContactInfo, setHeaderContactInfo] = useState({
        email: faker.internet.email({ firstName: firstName, lastName: lastName }),
        phone: faker.phone.number(),
        address: `${faker.location.streetAddress()}, ${faker.location.state({
            abbreviated: true,
        })} ${faker.location.zipCode()}`,
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
