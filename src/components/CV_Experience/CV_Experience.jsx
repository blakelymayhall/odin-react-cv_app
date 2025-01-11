import { useState, useEffect } from "react";
import CV_Experience_Row from "./CV_Experience_Row";
import AddRemoveContentButton from "../AddRemoveContentButton";
import { CV_App_Modes } from "../../App";
import { CV_App_Editable_Sections } from "../../App";
import { faker } from "@faker-js/faker";
import "../../styles/cv_experience.css";

function CV_Experience({ appMode, activeSection, setActiveSection }) {
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
                        faker.lorem.sentence({ min: 8, max: 10 }),
                        faker.lorem.sentence({ min: 8, max: 10 }),
                        faker.lorem.sentence({ min: 8, max: 10 }),
                        faker.lorem.sentence({ min: 8, max: 10 }),
                    ],
                },
                {
                    jobTitle: `${faker.company.buzzVerb()} ${faker.company.buzzNoun()}`,
                    jobDateRange: generateRandomDateRange(),
                    jobBullets: [
                        faker.lorem.sentence({ min: 8, max: 10 }),
                        faker.lorem.sentence({ min: 8, max: 10 }),
                        faker.lorem.sentence({ min: 8, max: 10 }),
                        faker.lorem.sentence({ min: 8, max: 10 }),
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
                        faker.lorem.sentence({ min: 8, max: 10 }),
                        faker.lorem.sentence({ min: 8, max: 10 }),
                        faker.lorem.sentence({ min: 8, max: 10 }),
                        faker.lorem.sentence({ min: 8, max: 10 }),
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
                        faker.lorem.sentence({ min: 8, max: 10 }),
                        faker.lorem.sentence({ min: 8, max: 10 }),
                        faker.lorem.sentence({ min: 8, max: 10 }),
                    ],
                },
            ],
        },
    ];

    const [experienceState, setExperienceState] = useState(() => {
        const savedData = localStorage.getItem("experiences");
        return savedData ? JSON.parse(savedData) : experiences;
    });

    const [companyIndexBeingEdited, setCompanyIndexBeingEdited] = useState(-1);

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

    const handleEdit = (companyIndex = -1) => {
        setCompanyIndexBeingEdited(companyIndex);
    };

    const addExperience = () => {
        let expCopys = [...experienceState];
        expCopys.unshift({
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
        });
        setExperienceState(expCopys);
    };

    const removeExperience = () => {
        let expCopys = [...experienceState];
        expCopys.pop();
        setExperienceState(expCopys);
    };

    const isActiveSection = () => {
        return appMode == CV_App_Modes.EDIT && activeSection == CV_App_Editable_Sections.EXPERIENCE;
    };

    return (
        <div id="experienceSection" className={isActiveSection() ? "activeSection" : ""}>
            <div id="experienceContainer">
                {isActiveSection() && (
                    <AddRemoveContentButton
                        buttonID="addExperienceButton"
                        sectionFunction={addExperience}
                        buttonText="Add Experience"
                    />
                )}
                <p id="experienceTitle">Experience:</p>
                <div id="experienceRows">
                    {experienceState.map((experience, index) => {
                        return (
                            <CV_Experience_Row
                                key={experience.companyName}
                                experienceRow={experience}
                                appMode={appMode}
                                activeSection={activeSection}
                                activeCompanyIndex={companyIndexBeingEdited}
                                companyIndex={index}
                                setterFunction={modifyExperience(index)}
                                setActiveSection={setActiveSection}
                                onEdit={() => handleEdit(index)}
                            />
                        );
                    })}
                </div>
                {experienceState.length > 1 && isActiveSection() && (
                    <AddRemoveContentButton
                        buttonID="removeExperienceButton"
                        sectionFunction={removeExperience}
                        buttonText="Remove Experience"
                    />
                )}
            </div>
        </div>
    );
}

export default CV_Experience;
