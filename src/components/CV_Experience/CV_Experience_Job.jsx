import { useState } from "react";
import "../../styles/CV_Experience/cv_experience.css";
import EditableText from "../EditableText";

function CV_Experience_Job({ experienceJob, setterFunction }) {
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

    return (
        <div className="experienceJob">
            <EditableText
                textClass="experienceJobName"
                initialText={experienceJob.jobTitle}
                setterFunction={(newJobTitle) => updateJobField("jobTitle", newJobTitle)}
            />
            <ul className="experienceJobBullets">
                {experienceJob.jobBullets.map((jobBullet, bulletIdx) => {
                    return (
                        <li key={jobBullet}>
                            <EditableText
                                textClass="jobBullet"
                                initialText={jobBullet}
                                setterFunction={modifyBullet(bulletIdx)}
                            />
                        </li>
                    );
                })}
            </ul>
            <EditableText
                textClass="experienceJobDateRange"
                initialText={experienceJob.jobDateRange}
                setterFunction={(newJobDateRange) => updateJobField("jobDateRange", newJobDateRange)}
            />
        </div>
    );
}

export default CV_Experience_Job;
