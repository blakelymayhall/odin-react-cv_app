import { useState, useEffect } from "react";
import EditableText from "../EditableText";
import { CV_App_Modes } from "../../App";
import { CV_App_Editable_Sections } from "../../App";
import "../../styles/cv_skills.css";

import { faker } from "@faker-js/faker";

function CV_Skills({ setActiveSection, appMode, activeSection }) {
    const [skills, setSkills] = useState(() => {
        const savedData = localStorage.getItem("skills");
        return savedData
            ? JSON.parse(savedData)
            : [
                  faker.lorem.sentence({ min: 1, max: 1 }).slice(0, -1),
                  faker.lorem.sentence({ min: 1, max: 1 }).slice(0, -1),
                  faker.lorem.sentence({ min: 1, max: 1 }).slice(0, -1),
                  faker.lorem.sentence({ min: 1, max: 1 }).slice(0, -1),
                  faker.lorem.sentence({ min: 1, max: 1 }).slice(0, -1),
                  faker.lorem.sentence({ min: 1, max: 1 }).slice(0, -1),
                  faker.lorem.sentence({ min: 1, max: 1 }).slice(0, -1),
                  faker.lorem.sentence({ min: 1, max: 1 }).slice(0, -1),
                  faker.lorem.sentence({ min: 1, max: 1 }).slice(0, -1),
                  faker.lorem.sentence({ min: 1, max: 1 }).slice(0, -1),
                  faker.lorem.sentence({ min: 1, max: 1 }).slice(0, -1),
                  faker.lorem.sentence({ min: 1, max: 1 }).slice(0, -1),
              ];
    });

    useEffect(() => {
        localStorage.setItem("skills", JSON.stringify(skills));
    }, [skills]);

    const isActiveSection = () => {
        return appMode == CV_App_Modes.EDIT && activeSection == CV_App_Editable_Sections.SKILLS;
    };

    const modifySkill = (skillIndex) => {
        return (newSkill) => {
            let skillsCopy = [...skills];
            skillsCopy[skillIndex] = newSkill;
            setSkills(skillsCopy);
        };
    };

    return (
        <div id="skillsSection" className={isActiveSection() ? "activeSection" : ""}>
            <div id="skillsContainer">
                <p id="skillTitle">Skills:</p>
                <div id="skillsGrid">
                    {skills.map((skill, index) => {
                        return (
                            <EditableText
                                key={skill}
                                initialText={skill}
                                setterFunction={modifySkill(index)}
                                setActiveSection={setActiveSection}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default CV_Skills;
