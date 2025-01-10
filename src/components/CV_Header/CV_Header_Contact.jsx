import { useState, useEffect } from "react";
import "../../styles/CV_header/cv_header.css";
import EditableText from "../EditableText";

import { faker } from "@faker-js/faker";

function CV_Header_Contact({ firstName, lastName, setActiveSection, onEdit }) {
    const [headerContactInfo, setHeaderContactInfo] = useState(() => {
        const savedData = localStorage.getItem("contactInfo");
        return savedData
            ? JSON.parse(savedData)
            : {
                  email: "blakely.c.mayhall@boeing.com",
                  phone: "479-366-7296",
                  address: "401 Sceptre Rd., Wentzville, MO 63385",
              };
    });

    useEffect(() => {
        localStorage.setItem("contactInfo", JSON.stringify(headerContactInfo));
    }, [headerContactInfo]);

    const updateContactField = (fieldName, newValue) => {
        const newContactInfo = { ...headerContactInfo, [fieldName]: newValue };
        setHeaderContactInfo(newContactInfo);
    };

    return (
        <>
            <p id="headerContactTitle">Contact:</p>
            <ul id="headerContact">
                <li>
                    <EditableText
                        prefix="Email: "
                        initialText={headerContactInfo.email}
                        setterFunction={(newEmail) => updateContactField("email", newEmail)}
                        setActiveSection={setActiveSection}
                        onEdit={onEdit}
                    ></EditableText>
                </li>
                <li>
                    <EditableText
                        prefix="Phone: "
                        initialText={headerContactInfo.phone}
                        setterFunction={(newPhone) => updateContactField("phone", newPhone)}
                        setActiveSection={setActiveSection}
                        onEdit={onEdit}
                    ></EditableText>
                </li>
                <li>
                    <EditableText
                        prefix="Address: "
                        initialText={headerContactInfo.address}
                        setterFunction={(newAddy) => updateContactField("address", newAddy)}
                        setActiveSection={setActiveSection}
                        onEdit={onEdit}
                    ></EditableText>
                </li>
            </ul>
        </>
    );
}

export default CV_Header_Contact;
