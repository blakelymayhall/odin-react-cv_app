import { useState } from "react";
import EditableText from "../EditableText";
import CV_Experience_Job from "./CV_Experience_Job";
import { CV_App_Modes } from "../../App";
import { CV_App_Editable_Sections } from "../../App";
import AddRemoveContentButton from "../AddRemoveContentButton";
import { faker } from "@faker-js/faker";
import "../../styles/cv_experience.css";

function CV_Experience_Row({
    experienceRow,
    appMode,
    activeSection,
    companyIndex,
    activeCompanyIndex,
    setterFunction,
    setActiveSection,
    onEdit,
}) {
    const [experienceRowState, setExperienceRowState] = useState(experienceRow);

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

    const updateExperienceField = (fieldName, newValue) => {
        const newExperienceRow = { ...experienceRowState, [fieldName]: newValue };
        setExperienceRowState(newExperienceRow);
        setterFunction(newExperienceRow);
    };

    const modifyJob = (jobIndex) => {
        return (newJob) => {
            let jobCopies = [...experienceRow.jobs];
            jobCopies[jobIndex] = newJob;
            updateExperienceField("jobs", jobCopies);
        };
    };

    const addJob = () => {
        let jobCopies = [...experienceRowState.jobs];
        jobCopies.unshift({
            jobTitle: `${faker.company.buzzVerb()} ${faker.company.buzzNoun()}`,
            jobDateRange: generateRandomDateRange(),
            jobBullets: [
                faker.lorem.sentence({ min: 8, max: 14 }),
                faker.lorem.sentence({ min: 8, max: 14 }),
                faker.lorem.sentence({ min: 8, max: 14 }),
                faker.lorem.sentence({ min: 8, max: 14 }),
            ],
        });
        updateExperienceField("jobs", jobCopies);
    };

    const removeJob = () => {
        let jobCopies = [...experienceRowState.jobs];
        jobCopies.pop();
        updateExperienceField("jobs", jobCopies);
    };

    return (
        <div className="experienceRow page-break">
            <EditableText
                textClass="experienceCompanyName"
                initialText={experienceRowState.companyName}
                setterFunction={(newCompanyName) => {
                    updateExperienceField("companyName", newCompanyName);
                }}
                setActiveSection={setActiveSection}
                onEdit={onEdit}
            ></EditableText>
            <EditableText
                textClass="experienceCompanyLocation"
                initialText={experienceRowState.companyLocation}
                setterFunction={(newCompanyLocation) => {
                    updateExperienceField("companyLocation", newCompanyLocation);
                }}
                setActiveSection={setActiveSection}
                onEdit={onEdit}
            ></EditableText>
            {experienceRowState.jobs.map((job, jobIndex) => {
                return (
                    <div className="experienceJob" key={job.jobTitle}>
                        {appMode == CV_App_Modes.EDIT &&
                            activeSection == CV_App_Editable_Sections.EXPERIENCE &&
                            companyIndex == activeCompanyIndex && (
                                <AddRemoveContentButton
                                    className="addJobButton"
                                    sectionFunction={addJob}
                                    buttonText="Add Job"
                                />
                            )}
                        <CV_Experience_Job
                            experienceJob={job}
                            appMode={appMode}
                            activeSection={activeSection}
                            activeCompanyIndex={activeCompanyIndex}
                            companyIndex={companyIndex}
                            setterFunction={modifyJob(jobIndex)}
                            setActiveSection={setActiveSection}
                            onEdit={onEdit}
                        />
                        {experienceRowState.jobs.length > 1 &&
                            appMode == CV_App_Modes.EDIT &&
                            activeSection == CV_App_Editable_Sections.EXPERIENCE &&
                            companyIndex == activeCompanyIndex && (
                                <AddRemoveContentButton
                                    className="removeJobButton"
                                    sectionFunction={() => {
                                        removeJob(jobIndex);
                                    }}
                                    buttonText="Remove Job"
                                />
                            )}
                    </div>
                );
            })}
        </div>
    );
}

export default CV_Experience_Row;
