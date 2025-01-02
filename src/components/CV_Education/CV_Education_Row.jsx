import { useState } from "react";
import "../../styles/CV_Education/cv_education.css";
import EditableText from "../EditableText";

function CV_Education_Row({ educationRow, setterFunction }) {
    const [educationRowState, setEducationRowState] = useState(educationRow);

    const updateEducationField = (fieldName, newValue) => {
        const newEducationRow = { ...educationRowState, [fieldName]: newValue };
        setEducationRowState(newEducationRow);
        setterFunction(newEducationRow);
    };

    return (
        <div className="educationRow">
            <EditableText
                textClass="educationSchoolName"
                initialText={educationRowState.schoolName}
                setterFunction={(newSchool) => updateEducationField("schoolName", newSchool)}
            />
            <EditableText
                textClass="educationDegree"
                initialText={educationRowState.degree}
                setterFunction={(newDegree) => updateEducationField("degree", newDegree)}
            />
            <EditableText
                textClass="educationDate"
                initialText={educationRowState.graduationDate}
                setterFunction={(newDate) => updateEducationField("graduationDate", newDate)}
            />
            <EditableText
                prefix="GPA: "
                textClass="educationGPA"
                initialText={educationRowState.GPA}
                setterFunction={(newGPA) => updateEducationField("GPA", newGPA)}
            />
        </div>
    );
}

export default CV_Education_Row;
