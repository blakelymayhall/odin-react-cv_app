import { useState, useEffect } from "react";
import "../../styles/CV_Experience/cv_experience.css";
import CV_Experience_Row from "./CV_Experience_Row";
import AddSubContentControls from "../AddSubContentControls";
import { faker } from "@faker-js/faker";

function CV_Experience() {
    const generateRandomDateRange = () => {
        const date1 = faker.date.between({
            from: "2000-01-01T00:00:00.000Z",
            to: Date.now(),
        });

        const date2 = faker.date.between({
            from: date1,
            to: Date.now(),
        });

        return `${faker.date.month({ abbreviated: true, context: true })} ${date1
            .getFullYear()
            .toString()} to ${faker.date.month({ abbreviated: true, context: true })} ${date2
            .getFullYear()
            .toString()} `;
    };

    const experiences = [
        {
            companyName: faker.company.name(),
            companyLocation: `${faker.location.city()}, ${faker.location.state({ abbreviated: true })}`,
            jobs: [
                {
                    jobTitle: `${faker.company.buzzVerb()} ${faker.company.buzzNoun()}`,
                    jobDateRange: generateRandomDateRange(),
                    jobBullets: [
                        faker.lorem.sentence({ min: 8, max: 14 }),
                        faker.lorem.sentence({ min: 8, max: 14 }),
                        faker.lorem.sentence({ min: 8, max: 14 }),
                        faker.lorem.sentence({ min: 8, max: 14 }),
                    ],
                },
            ],
        },
        {
            companyName: faker.company.name(),
            companyLocation: `${faker.location.city()}, ${faker.location.state({ abbreviated: true })}`,
            jobs: [
                {
                    jobTitle: `${faker.company.buzzVerb()} ${faker.company.buzzNoun()}`,
                    jobDateRange: generateRandomDateRange(),
                    jobBullets: [
                        faker.lorem.sentence({ min: 8, max: 14 }),
                        faker.lorem.sentence({ min: 8, max: 14 }),
                        faker.lorem.sentence({ min: 8, max: 14 }),
                        faker.lorem.sentence({ min: 8, max: 14 }),
                    ],
                },
            ],
        },
        {
            companyName: faker.company.name(),
            companyLocation: `${faker.location.city()}, ${faker.location.state({ abbreviated: true })}`,
            jobs: [
                {
                    jobTitle: `${faker.company.buzzVerb()} ${faker.company.buzzNoun()}`,
                    jobDateRange: generateRandomDateRange(),
                    jobBullets: [
                        faker.lorem.sentence({ min: 8, max: 14 }),
                        faker.lorem.sentence({ min: 8, max: 14 }),
                        faker.lorem.sentence({ min: 8, max: 14 }),
                    ],
                },
            ],
        },
    ];

    const [experienceState, setExperienceState] = useState(() => {
        const savedData = localStorage.getItem("experiences");
        return savedData ? JSON.parse(savedData) : experiences;
    });

    useEffect(() => {
        localStorage.setItem("experiences", JSON.stringify(experienceState));
    }, [experienceState]);

    const modifyExperience = (expIndex) => {
        return (newExperience) => {
            let expCopys = [...experienceState];
            expCopys[expIndex] = newExperience;
            setExperienceState(expCopys);
        };
    };

    return (
        <div id="experienceSection">
            <AddSubContentControls />
            <div id="experienceContainer">
                <p id="experienceTitle">Experience:</p>
                <div id="experienceRows">
                    {experienceState.map((experience, index) => {
                        return (
                            <CV_Experience_Row
                                key={experience.companyName}
                                experienceRow={experience}
                                setterFunction={modifyExperience(index)}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default CV_Experience;
