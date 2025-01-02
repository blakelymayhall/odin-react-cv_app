import { useState, useEffect } from "react";
import "../../styles/CV_header/cv_header.css";
import EditableText from "../EditableText";

import { faker } from "@faker-js/faker";

function CV_Header_Contact({ firstName, lastName }) {
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
    }, [headerContactInfo]);

    const setHeaderEmail = (newEmail) => {
        setHeaderContactInfo({
            email: newEmail,
            phone: headerContactInfo.phone,
            address: headerContactInfo.address,
        });
    };

    const setHeaderPhone = (newPhone) => {
        setHeaderContactInfo({
            email: headerContactInfo.email,
            phone: newPhone,
            address: headerContactInfo.address,
        });
    };

    const setHeaderAddress = (newAddy) => {
        setHeaderContactInfo({
            email: headerContactInfo.email,
            phone: headerContactInfo.phone,
            address: newAddy,
        });
    };

    return (
        <>
            <p id="headerContactTitle">Contact:</p>
            <ul id="headerContact">
                <li>
                    <EditableText
                        prefix="Email: "
                        initialText={headerContactInfo.email}
                        setterFunction={setHeaderEmail}
                    ></EditableText>
                </li>
                <li>
                    <EditableText
                        prefix="Phone: "
                        initialText={headerContactInfo.phone}
                        setterFunction={setHeaderPhone}
                    ></EditableText>
                </li>
                <li>
                    <EditableText
                        prefix="Address: "
                        initialText={headerContactInfo.address}
                        setterFunction={setHeaderAddress}
                    ></EditableText>
                </li>
            </ul>
        </>
    );
}

export default CV_Header_Contact;
