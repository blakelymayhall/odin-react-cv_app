import { useState } from "react";
import "../../styles/CV_Education/cv_education.css";
import EditableText from "../EditableText";

function CV_Education_Row({ educationRow, setterFunction }) {
    const [educationRowState, setEducationRowState] = useState(educationRow);

    const setEducationSchool = (newSchool) => {
        let newEducationRow = { ...educationRowState, schoolName: newSchool };
        setEducationRowState(newEducationRow);
        console.log(newEducationRow);
        setterFunction(newEducationRow);
    };

    const setEducationDegree = (newDegree) => {
        setEducationRowState({ ...educationRowState, degree: newDegree });
    };

    const setEducationDate = (newDate) => {
        setEducationRowState({ ...educationRowState, graduationDate: newDate });
    };

    const setEducationGPA = (newGPA) => {
        setEducationRowState({ ...educationRowState, GPA: newGPA });
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
