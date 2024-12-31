import { useState } from "react";
import "../../styles/CV_Education/cv_education.css";
import EditableText from "../EditableText";

function CV_Education_Row() {
    const [educationRow, setEducationRow] = useState({
        schoolName: "Washington University in St Louis",
        degree: "M.S. Aerospace Engineering",
        graduationDate: "Aug 2021",
        GPA: "4.0 / 4.0",
    });

    return (
        <div className="educationRow">
            <EditableText textClass="educationSchoolName" initialText={educationRow.schoolName}></EditableText>
            <EditableText textClass="educationDegree" initialText={educationRow.degree}></EditableText>
            <EditableText textClass="educationDate" initialText={educationRow.graduationDate}></EditableText>
            <EditableText prefix="GPA: " textClass="educationGPA" initialText={educationRow.GPA}></EditableText>
        </div>
    );
}

export default CV_Education_Row;
