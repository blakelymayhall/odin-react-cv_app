import { useState } from "react";
import "../../styles/CV_Objective/cv_objective.css";

function CV_Objective() {
    const [objectiveState, setObjectiveState] = useState({
        objectiveText:
            "Software Engineer with a demonstrated history of delivering " +
            "well-structured and efficient products that meet first-time quality standards",
        objectiveVisible: true,
    });

    return (
        <div id="objectiveSection">
            <div id="objectiveContainer">
                <p id="objectiveTitle">Objective:</p>
                <p id="objectiveContent">{objectiveState.objectiveText}</p>
            </div>
        </div>
    );
}

export default CV_Objective;
