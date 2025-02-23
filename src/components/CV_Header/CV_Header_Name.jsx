import { useState, useEffect } from "react";
import EditableText from "../EditableText";
import "../../styles/cv_header.css";

function CV_Header_Name({ updateResumeData, firstName, lastName, setActiveSection, onEdit, resumeData }) {
    const [headerName, setHeaderName] = useState(() => {
        const savedData = localStorage.getItem("headerName");
        return savedData ? JSON.parse(savedData) : `${firstName} ${lastName}`;
    });

    useEffect(() => {
        localStorage.setItem("headerName", JSON.stringify(headerName));
        updateResumeData("headerName", headerName);
    }, [headerName]);

    useEffect(() => {
        if (resumeData && resumeData.headerName !== headerName) {
            setHeaderName(resumeData.headerName);
        }
    }, [resumeData]);

    return (
        <div id="headerNameContainer">
            <EditableText
                key={headerName}
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
