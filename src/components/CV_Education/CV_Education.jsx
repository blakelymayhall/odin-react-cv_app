import { useState, useEffect } from "react";
import "../../styles/CV_Education/cv_education.css";
import CV_Education_Row from "./CV_Education_Row";
import AddSubContentControls from "../AddSubContentControls";

import { faker } from "@faker-js/faker";

function CV_Education() {
    const educations = [
        {
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
        },
        {
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

    return (
        <div id="educationSection">
            <AddSubContentControls />
            <div id="educationContainer">
                <p id="educationTitle">Education:</p>
                <div id="educationRows">
                    {educationState.map((education, index) => {
                        return (
                            <CV_Education_Row
                                key={education.degree}
                                educationRow={education}
                                setterFunction={modifyEducation(index)}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default CV_Education;
