import { useState } from "react";
import CV_Header_Name from "./CV_Header_Name";
import CV_Header_Contact from "./CV_Header_Contact";
import CV_Header_Links from "./CV_Header_Links";
import "../../styles/CV_header/cv_header.css";

import { faker } from "@faker-js/faker";

function CV_Header({ isPrintMode }) {
    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();

    return (
        <div id="headerSection">
            <CV_Header_Name firstName={firstName} lastName={lastName} />
            <div id="headerInfoRow">
                <CV_Header_Contact firstName={firstName} lastName={lastName} />
                <CV_Header_Links isPrintMode={isPrintMode} />
            </div>
            <div className="lineBreak"></div>
        </div>
    );
}

export default CV_Header;
