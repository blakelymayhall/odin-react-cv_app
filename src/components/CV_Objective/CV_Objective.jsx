import { useState, useEffect } from "react";
import "../../styles/CV_Objective/cv_objective.css";
import EditableText from "../EditableText";

function CV_Objective() {
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

    return (
        <div id="objectiveSection">
            <div id="objectiveContainer">
                <p id="objectiveTitle">Objective:</p>
                <EditableText
                    textID="objectiveContent"
                    initialText={objectiveState}
                    setterFunction={setObjectiveState}
                ></EditableText>
            </div>
        </div>
    );
}

export default CV_Objective;
