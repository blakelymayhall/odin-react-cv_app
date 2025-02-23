import { useState, useEffect } from "react";
import EditableText from "../EditableText";
import "../../styles/cv_header.css";

import { faker } from "@faker-js/faker";

function CV_Header_Contact({ updateResumeData, firstName, lastName, setActiveSection, onEdit, resumeData }) {
    const [headerContactInfo, setHeaderContactInfo] = useState(() => {
        const savedData = localStorage.getItem("contactInfo");
        return savedData
            ? JSON.parse(savedData)
            : {
                  email: faker.internet.email({ firstName: firstName, lastName: lastName }),
                  phone: faker.phone.number(),
                  address: `${faker.location.streetAddress()}, ${faker.location.state({
                      abbreviated: true,
                  })} ${faker.location.zipCode()}`,
              };
    });

    useEffect(() => {
        localStorage.setItem("contactInfo", JSON.stringify(headerContactInfo));
        updateResumeData("headerContactInfo", headerContactInfo);
    }, [headerContactInfo]);

    useEffect(() => {
        if (resumeData && resumeData.headerContactInfo !== headerContactInfo) {
            setHeaderContactInfo(resumeData.headerContactInfo);
        }
    }, [resumeData]);

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
                        key={headerContactInfo.email}
                        prefix="Email: "
                        initialText={headerContactInfo.email}
                        setterFunction={(newEmail) => updateContactField("email", newEmail)}
                        setActiveSection={setActiveSection}
                        onEdit={onEdit}
                    ></EditableText>
                </li>
                <li>
                    <EditableText
                        key={headerContactInfo.phone}
                        prefix="Phone: "
                        initialText={headerContactInfo.phone}
                        setterFunction={(newPhone) => updateContactField("phone", newPhone)}
                        setActiveSection={setActiveSection}
                        onEdit={onEdit}
                    ></EditableText>
                </li>
                <li>
                    <EditableText
                        key={headerContactInfo.address}
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
