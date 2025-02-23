import { useState, useEffect } from "react";
import EditableText from "../EditableText";
import { CV_App_Modes } from "../../App";
import { CV_App_Editable_Sections } from "../../App";
import "../../styles/cv_objective.css";

function CV_Objective({ updateResumeData, setActiveSection, appMode, activeSection, resumeData }) {
    const [objectiveState, setObjectiveState] = useState(() => {
        const savedData = localStorage.getItem("objective");
        return savedData
            ? JSON.parse(savedData)
            : "Software Engineer with a demonstrated history of delivering " +
                  "well-structured and efficient products that meet first-time quality standards";
    });

    useEffect(() => {
        localStorage.setItem("objective", JSON.stringify(objectiveState));
        updateResumeData("objective", objectiveState);
    }, [objectiveState]);

    useEffect(() => {
        if (resumeData && resumeData.objective.trim() !== objectiveState.trim()) {
            setObjectiveState(resumeData.objective);
        }
    }, [resumeData]);

    const isActiveSection = () => {
        return appMode == CV_App_Modes.EDIT && activeSection == CV_App_Editable_Sections.OBJECTIVE;
    };

    return (
        <div id="objectiveSection" className={isActiveSection() ? "activeSection" : ""}>
            <div id="objectiveContainer">
                <p id="objectiveTitle">Objective:</p>
                <EditableText
                    key={objectiveState}
                    textID="objectiveContent"
                    initialText={objectiveState}
                    setterFunction={setObjectiveState}
                    setActiveSection={setActiveSection}
                ></EditableText>
            </div>
        </div>
    );
}

export default CV_Objective;
