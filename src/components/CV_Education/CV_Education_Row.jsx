import { useState } from "react";
import "../../styles/CV_Education/cv_education.css";
import EditableText from "../EditableText";

function CV_Education_Row({ educationRow, setterFunction }) {
    const [educationRowState, setEducationRowState] = useState(educationRow);

    const setEducationSchool = (newSchool) => {
        let newEducationRow = { ...educationRowState, schoolName: newSchool };
        setEducationRowState(newEducationRow);
        setterFunction(newEducationRow);
    };

    const setEducationDegree = (newDegree) => {
        let newEducationRow = { ...educationRowState, degree: newDegree };
        setEducationRowState(newEducationRow);
        setterFunction(newEducationRow);
    };

    const setEducationDate = (newDate) => {
        let newEducationRow = { ...educationRowState, graduationDate: newDate };
        setEducationRowState(newEducationRow);
        setterFunction(newEducationRow);
    };

    const setEducationGPA = (newGPA) => {
        let newEducationRow = { ...educationRowState, GPA: newGPA };
        setEducationRowState(newEducationRow);
        setterFunction(newEducationRow);
    };

    return (
        <div className="educationRow">
            <EditableText
                textClass="educationSchoolName"
                initialText={educationRowState.schoolName}
                setterFunction={setEducationSchool}
            ></EditableText>
            <EditableText
                textClass="educationDegree"
                initialText={educationRowState.degree}
                setterFunction={setEducationDegree}
            ></EditableText>
            <EditableText
                textClass="educationDate"
                initialText={educationRowState.graduationDate}
                setterFunction={setEducationDate}
            ></EditableText>
            <EditableText
                prefix="GPA: "
                textClass="educationGPA"
                initialText={educationRowState.GPA}
                setterFunction={setEducationGPA}
            ></EditableText>
        </div>
    );
}

export default CV_Education_Row;
