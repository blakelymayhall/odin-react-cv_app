import { useState } from "react";
import "../../styles/CV_Education/cv_education.css";
import EditableText from "../EditableText";

function CV_Education_Row({ educationRow, setterFunction, setActiveSection, onEdit }) {
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
                setActiveSection={setActiveSection}
                onEdit={onEdit}
            />
            <EditableText
                textClass="educationDegree"
                initialText={educationRowState.degree}
                setterFunction={(newDegree) => updateEducationField("degree", newDegree)}
                setActiveSection={setActiveSection}
                onEdit={onEdit}
            />
            <EditableText
                textClass="educationDate"
                initialText={educationRowState.graduationDate}
                setterFunction={(newDate) => updateEducationField("graduationDate", newDate)}
                setActiveSection={setActiveSection}
                onEdit={onEdit}
            />
            <EditableText
                prefix="GPA: "
                textClass="educationGPA"
                initialText={educationRowState.GPA}
                setterFunction={(newGPA) => updateEducationField("GPA", newGPA)}
                setActiveSection={setActiveSection}
                onEdit={onEdit}
            />
        </div>
    );
}

export default CV_Education_Row;
