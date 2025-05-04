import { useState } from "react";
import EditableText from "../EditableText";
import "../../styles/cv_education.css";

function CV_Education_Row({ educationRow, setterFunction, setActiveSection }) {
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
            />
            <EditableText
                textClass="educationDegree"
                initialText={educationRowState.degree}
                setterFunction={(newDegree) => updateEducationField("degree", newDegree)}
                setActiveSection={setActiveSection}
            />
            <EditableText
                textClass="educationDate"
                initialText={educationRowState.graduationDate}
                setterFunction={(newDate) => updateEducationField("graduationDate", newDate)}
                setActiveSection={setActiveSection}
            />
        </div>
    );
}

export default CV_Education_Row;
