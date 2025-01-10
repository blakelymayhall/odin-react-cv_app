import { useState, useEffect } from "react";
import "../../styles/CV_Education/cv_education.css";
import CV_Education_Row from "./CV_Education_Row";
import { CV_App_Modes } from "../../App";
import { CV_App_Editable_Sections } from "../../App";
import AddRemoveContentButton from "../AddRemoveContentButton";

import { faker } from "@faker-js/faker";

function CV_Education({ appMode, activeSection, setActiveSection }) {
    const educations = [
        {
            schoolName: `Washington University in St. Louis`,
            degree: `M.S. Aerospace Engineering`,
            graduationDate: `Aug 2021`,
            GPA: `4.0 / 4.0`,
        },
        {
            schoolName: `Missouri University of Science and Technology (Missouri S&T)`,
            degree: `B.S. Aerospace Engineering`,
            graduationDate: `May 2019`,
            GPA: `4.0 / 4.0`,
        },
    ];

    const [educationState, setEducationState] = useState(() => {
        const savedData = localStorage.getItem("educations");
        return savedData ? JSON.parse(savedData) : educations;
    });

    useEffect(() => {
        localStorage.setItem("educations", JSON.stringify(educationState));
    }, [educationState]);

    const modifyEducation = (eduIndex) => {
        return (newEducation) => {
            let edusCopy = [...educationState];
            edusCopy[eduIndex] = newEducation;
            setEducationState(edusCopy);
        };
    };

    const addEducationRow = () => {
        let edusCopy = [...educationState];
        edusCopy.unshift({
            schoolName: `${faker.food.vegetable()} University`,
            degree: `M.S. ${faker.food.vegetable()} ${faker.food.fruit()}`,
            graduationDate: `${faker.date.month({ abbreviated: true, context: true })} ${faker.date
                .between({
                    from: "2000-01-01T00:00:00.000Z",
                    to: Date.now(),
                })
                .getFullYear()
                .toString()}`,
            GPA: `${(Math.random() * 4).toFixed(2)} / 4.0`,
        });
        setEducationState(edusCopy);
    };

    const removeEducationRow = () => {
        let edusCopy = [...educationState];
        edusCopy.pop();
        setEducationState(edusCopy);
    };

    const isActiveSection = () => {
        return appMode == CV_App_Modes.EDIT && activeSection == CV_App_Editable_Sections.EDUCATION;
    };

    return (
        <div id="educationSection" className={isActiveSection() ? "activeSection" : ""}>
            <div id="educationContainer">
                {isActiveSection() && (
                    <AddRemoveContentButton
                        buttonID="addEducationButton"
                        sectionFunction={addEducationRow}
                        buttonText="Add Education"
                    />
                )}
                <p id="educationTitle">Education:</p>
                <div id="educationRows">
                    {educationState.map((education, index) => {
                        return (
                            <CV_Education_Row
                                key={education.degree}
                                educationRow={education}
                                setterFunction={modifyEducation(index)}
                                setActiveSection={setActiveSection}
                            />
                        );
                    })}
                </div>
                {educationState.length > 1 && isActiveSection() && (
                    <AddRemoveContentButton
                        buttonID="removeEducationButton"
                        sectionFunction={removeEducationRow}
                        buttonText="Remove Education"
                    />
                )}
            </div>
        </div>
    );
}

export default CV_Education;
