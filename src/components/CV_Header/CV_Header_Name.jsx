import { useState } from "react";
import Edit_Button from "../Edit_Button";
import "../../styles/CV_header/cv_header.css";

function CV_Header_Name() {
    const [headerName, setHeaderName] = useState("Blakely Mayhall");

    const handleEdit = () => {
        const newName = prompt("Enter new name:", headerName);

        if (newName !== null) setHeaderName(newName);
    };

    return (
        <div id="headerNameContainer">
            <h1 id="headerName">{headerName}</h1>
        </div>
    );
}

export default CV_Header_Name;
