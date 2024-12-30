import { useState } from "react";
import "../../styles/CV_Education/cv_education.css";
import CV_Education_Row from "./CV_Education_Row";

function CV_Education() {
    const [educationState, setEducationState] = useState(0);

    return (
        <div id="educationSection">
            <div id="educationContainer">
                <p id="educationTitle">Education:</p>
                <div id="educationRows">
                    <CV_Education_Row />
                    <CV_Education_Row />
                </div>
            </div>
        </div>
    );
}

export default CV_Education;
