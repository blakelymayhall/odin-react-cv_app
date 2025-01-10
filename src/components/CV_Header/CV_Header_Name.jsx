import { useState, useEffect } from "react";
import "../../styles/CV_header/cv_header.css";
import EditableText from "../EditableText";

function CV_Header_Name({ firstName, lastName, setActiveSection, onEdit }) {
    const [headerName, setHeaderName] = useState(() => {
        const savedData = localStorage.getItem("headerName");
        return savedData ? JSON.parse(savedData) : `${firstName} ${lastName}`;
    });

    useEffect(() => {
        localStorage.setItem("headerName", JSON.stringify(headerName));
    }, [headerName]);

    return (
        <div id="headerNameContainer">
            <EditableText
                textID="headerName"
                initialText={headerName}
                setterFunction={setHeaderName}
                setActiveSection={setActiveSection}
                onEdit={onEdit}
            />
        </div>
    );
}

export default CV_Header_Name;
