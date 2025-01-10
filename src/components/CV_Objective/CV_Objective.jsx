import { useState, useEffect } from "react";
import "../../styles/CV_Objective/cv_objective.css";
import EditableText from "../EditableText";
import { CV_App_Modes } from "../../App";
import { CV_App_Editable_Sections } from "../../App";

function CV_Objective({ setActiveSection, appMode, activeSection }) {
    const [objectiveState, setObjectiveState] = useState(() => {
        const savedData = localStorage.getItem("objective");
        return savedData
            ? JSON.parse(savedData)
            : "Software Engineer with a demonstrated history of delivering " +
                  "well-structured and efficient products that meet first-time quality standards";
    });

    useEffect(() => {
        localStorage.setItem("objective", JSON.stringify(objectiveState));
    }, [objectiveState]);

    const isActiveSection = () => {
        return appMode == CV_App_Modes.EDIT && activeSection == CV_App_Editable_Sections.OBJECTIVE;
    };

    return (
        <div id="objectiveSection" className={isActiveSection() ? "activeSection" : ""}>
            <div id="objectiveContainer">
                <p id="objectiveTitle">Objective:</p>
                <EditableText
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
