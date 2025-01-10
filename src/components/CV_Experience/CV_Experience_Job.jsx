import { useState } from "react";
import "../../styles/CV_Experience/cv_experience.css";
import EditableText from "../EditableText";
import AddRemoveContentButton from "../AddRemoveContentButton";
import { CV_App_Editable_Sections } from "../../App";
import { CV_App_Modes } from "../../App";
import { faker } from "@faker-js/faker";

function CV_Experience_Job({
    experienceJob,
    appMode,
    activeSection,
    activeCompanyIndex,
    companyIndex,
    setterFunction,
    setActiveSection,
    onEdit,
}) {
    const [experienceJobState, setExperienceJobState] = useState(experienceJob);

    const updateJobField = (fieldName, newValue) => {
        const newJobState = { ...experienceJobState, [fieldName]: newValue };
        setExperienceJobState(newJobState);
        setterFunction(newJobState);
    };

    const modifyBullet = (bulletIndex) => {
        return (newBulletText) => {
            let bulletList = [...experienceJob.jobBullets];
            bulletList[bulletIndex] = newBulletText;
            updateJobField("jobBullets", bulletList);
        };
    };

    const addBullet = () => {
        let bulletList = [...experienceJob.jobBullets];
        bulletList.unshift(faker.lorem.sentence({ min: 8, max: 14 }));
        updateJobField("jobBullets", bulletList);
    };

    const removeBullet = () => {
        let bulletList = [...experienceJob.jobBullets];
        bulletList.pop();
        updateJobField("jobBullets", bulletList);
    };

    return (
        <div className="experienceJob">
            <EditableText
                textClass="experienceJobName"
                initialText={experienceJob.jobTitle}
                setterFunction={(newJobTitle) => updateJobField("jobTitle", newJobTitle)}
                setActiveSection={setActiveSection}
                onEdit={onEdit}
            />
            <ul className="experienceJobBullets">
                {appMode == CV_App_Modes.EDIT &&
                    activeSection == CV_App_Editable_Sections.EXPERIENCE &&
                    companyIndex == activeCompanyIndex && (
                        <AddRemoveContentButton
                            className="addBulletButton"
                            sectionFunction={addBullet}
                            buttonText="Add Bullet"
                        />
                    )}
                {experienceJob.jobBullets.map((jobBullet, bulletIdx) => {
                    return (
                        <li key={jobBullet}>
                            <EditableText
                                textClass="jobBullet"
                                initialText={jobBullet}
                                setterFunction={modifyBullet(bulletIdx)}
                                setActiveSection={setActiveSection}
                                onEdit={onEdit}
                            />
                        </li>
                    );
                })}
                {appMode == CV_App_Modes.EDIT &&
                    activeSection == CV_App_Editable_Sections.EXPERIENCE &&
                    companyIndex == activeCompanyIndex && (
                        <AddRemoveContentButton
                            className="removeBulletButton"
                            sectionFunction={removeBullet}
                            buttonText="Remove Bullet"
                        />
                    )}
            </ul>
            <EditableText
                textClass="experienceJobDateRange"
                initialText={experienceJob.jobDateRange}
                setterFunction={(newJobDateRange) => updateJobField("jobDateRange", newJobDateRange)}
                setActiveSection={setActiveSection}
                onEdit={onEdit}
            />
        </div>
    );
}

export default CV_Experience_Job;
