import { useState } from "react";
import Edit_Button from "../Edit_Button";
import "../../styles/CV_header/cv_header.css";
import EditableText from "../EditableText";

import { faker } from "@faker-js/faker";

function CV_Header_Name({ firstName, lastName }) {
    const [headerName, setHeaderName] = useState(`${firstName} ${lastName}`);

    const handleEdit = () => {
        const newName = prompt("Enter new name:", headerName);

        if (newName !== null) setHeaderName(newName);
    };

    return (
        <div id="headerNameContainer">
            <EditableText textID="headerName" initialText={headerName}></EditableText>
        </div>
    );
}

export default CV_Header_Name;
