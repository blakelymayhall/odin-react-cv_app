import { useState, useEffect } from "react";
import "../../styles/CV_Experience/cv_experience.css";
import CV_Experience_Row from "./CV_Experience_Row";
import AddRemoveContentButton from "../AddRemoveContentButton";
import { CV_App_Modes } from "../../App";
import { CV_App_Editable_Sections } from "../../App";
import { faker } from "@faker-js/faker";

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
            companyName: "The Boeing Company",
            companyLocation: `St. Charles, MO`,
            jobs: [
                {
                    jobTitle: `Collaborative Weapons Project Lead`,
                    jobDateRange: "Oct 2024 to Present (5 mos)",
                    jobBullets: [
                        "Led development efforts for the modeling, simulation, and system implementation of network enabled weapons ",
                        "Planned, refined, and released engineering work to team of cross-discipline engineers",
                        "Established project-level requirements, version control strategy, continuous integration (CI) capabilities, and interface control documents",
                        "Collaborated with an external team and championed Boeing's strategic interests in autonomous flight",
                    ],
                },
                {
                    jobTitle: `Guidance & Control Engineer III`,
                    jobDateRange: "April 2024 to Present (10 mos)",
                    jobBullets: [
                        "Worked with international customers to resolve high-priority system failures, leveraging model-based engineering to identify root causes",
                        "Ported legacy FORTRAN rocket simulation into MATRIXx environment and improved modeling",
                        "Developed C++ based REPL layer and VSCode ext. for MATRIXx to reduce analysis time",
                    ],
                },
                {
                    jobTitle: `Guidance & Control Engineer I-II`,
                    jobDateRange: "June 2019 to Aug 2023 (4 yr 3 mos)",
                    jobBullets: [
                        "Developed plugin for Linux-based distributed system simulation to model the interface and Operational Flight Program (OFP) of a weapon in a collaborative weapons simulation",
                        "Enabled process for C++ simulation capability on Linux High Performance Computing clusters",
                    ],
                },
            ],
        },
        {
            companyName: "Ag Leader Technology",
            companyLocation: `Ames, IA`,
            jobs: [
                {
                    jobTitle: `Senior Software Engineer`,
                    jobDateRange: "Aug 2023 to April 2024 (9 mos)",
                    jobBullets: [
                        "Championed Scrum process change to improve work traceability and force deliberate testing",
                        "Initiated and led efforts to establish enhanced process documentation and code practices",
                        "Integrated legacy standard agricultural software into a modern device framework and enhanced the user interface",
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
