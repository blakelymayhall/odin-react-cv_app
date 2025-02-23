import { useState, useEffect } from "react";
import EditableText from "../EditableText";
import { CV_App_Modes } from "../../App";
import { CV_App_Editable_Sections } from "../../App";
import AddRemoveContentButton from "../AddRemoveContentButton";
import "../../styles/cv_honors.css";

import { faker } from "@faker-js/faker";

function CV_Honors({ updateResumeData, setActiveSection, appMode, activeSection, resumeData }) {
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
        updateResumeData("honors", honors);
    }, [honors]);

    useEffect(() => {
        if (resumeData && resumeData.honors !== honors) {
            setHonors(resumeData.honors);
        }
    }, [resumeData]);

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

    const addHonor = () => {
        let honorsCopy = [...honors];
        honorsCopy.unshift("New Honor/Activity");
        setHonors(honorsCopy);
    };

    const removeHonor = () => {
        let honorsCopy = [...honors];
        honorsCopy.pop();
        setHonors(honorsCopy);
    };

    return (
        <div id="honorsSection" className={isActiveSection() ? "activeSection" : ""}>
            <div id="honorsContainer">
                <p id="honorsTitle">Honors & Activities:</p>
                <div id="honorsList">
                    {appMode == CV_App_Modes.EDIT && activeSection == CV_App_Editable_Sections.HONORS && (
                        <AddRemoveContentButton
                            buttonID="addLinkButton"
                            sectionFunction={addHonor}
                            buttonText="Add Honor/Activity"
                        />
                    )}
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
                    {appMode == CV_App_Modes.EDIT && activeSection == CV_App_Editable_Sections.HONORS && (
                        <AddRemoveContentButton
                            buttonID="addLinkButton"
                            sectionFunction={removeHonor}
                            buttonText="Remove Honor/Activity"
                        />
                    )}
                </div>
            </div>
        </div>
    );
}

export default CV_Honors;
