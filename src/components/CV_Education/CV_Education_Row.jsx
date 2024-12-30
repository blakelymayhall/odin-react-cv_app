import { useState } from "react";
import "../../styles/CV_Education/cv_education.css";

function CV_Education_Row() {
    const [educationRow, setEducationRow] = useState({
        schoolName: "Washington University in St Louis",
        degree: "M.S. Aerospace Engineering",
        graduationDate: "Aug 2021",
        GPA: "4.0 / 4.0",
    });

    return (
        <div className="educationRow">
            <p className="educationSchoolName">{educationRow.schoolName}</p>
            <p className="educationDegree">{educationRow.degree}</p>
            <p className="educationDate">{educationRow.graduationDate}</p>
            <p className="educationGPA">GPA: {educationRow.GPA}</p>
        </div>
    );
}

export default CV_Education_Row;
