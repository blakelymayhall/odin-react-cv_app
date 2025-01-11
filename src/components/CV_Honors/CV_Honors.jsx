import { useState, useEffect } from "react";
import EditableText from "../EditableText";
import { CV_App_Modes } from "../../App";
import { CV_App_Editable_Sections } from "../../App";
import "../../styles/cv_honors.css";

import { faker } from "@faker-js/faker";

function CV_Honors({ setActiveSection, appMode, activeSection }) {
    const [honors, setHonors] = useState(() => {
        const savedData = localStorage.getItem("honors");
        return savedData
            ? JSON.parse(savedData)
            : [
                  faker.lorem.sentence({ min: 4, max: 7 }).slice(0, -1),
                  faker.lorem.sentence({ min: 4, max: 7 }).slice(0, -1),
                  faker.lorem.sentence({ min: 4, max: 7 }).slice(0, -1),
                  faker.lorem.sentence({ min: 4, max: 7 }).slice(0, -1),
                  faker.lorem.sentence({ min: 4, max: 7 }).slice(0, -1),
              ];
    });

    useEffect(() => {
        localStorage.setItem("honors", JSON.stringify(honors));
    }, [honors]);

    const isActiveSection = () => {
        return appMode == CV_App_Modes.EDIT && activeSection == CV_App_Editable_Sections.HONORS;
    };

    const modifyHonor = (honorIndex) => {
        return (newHonor) => {
            let honorsCopy = [...honors];
            honorsCopy[honorIndex] = newHonor;
            setHonors(honorsCopy);
        };
    };

    return (
        <div id="honorsSection" className={isActiveSection() ? "activeSection" : ""}>
            <div id="honorsContainer">
                <p id="honorsTitle">Honors & Activities:</p>
                <div id="honorsList">
                    {honors.map((honor, index) => {
                        return (
                            <EditableText
                                key={honor}
                                initialText={honor}
                                setterFunction={modifyHonor(index)}
                                setActiveSection={setActiveSection}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default CV_Honors;
