import { useState } from "react";
import "../../styles/CV_Education/cv_education.css";
import CV_Education_Row from "./CV_Education_Row";

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

    return (
        <div id="educationSection">
            <div id="educationContainer">
                <p id="educationTitle">Education:</p>
                <div id="educationRows">
                    {educations.map((education) => {
                        return <CV_Education_Row key={education.degree} educationRow={education} />;
                    })}
                </div>
            </div>
        </div>
    );
}

export default CV_Education;
