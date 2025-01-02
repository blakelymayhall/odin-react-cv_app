import { useState } from "react";
import "../../styles/CV_Experience/cv_experience.css";
import EditableText from "../EditableText";
import CV_Experience_Job from "./CV_Experience_Job";

function CV_Experience_Row({ experienceRow, setterFunction }) {
    const [experienceRowState, setExperienceRowState] = useState(experienceRow);

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

    return (
        <div className="experienceRow">
            <EditableText
                textClass="experienceCompanyName"
                initialText={experienceRowState.companyName}
                setterFunction={(newCompanyName) => {
                    updateExperienceField("companyName", newCompanyName);
                }}
            ></EditableText>
            <EditableText
                textClass="experienceCompanyLocation"
                initialText={experienceRowState.companyLocation}
                setterFunction={(newCompanyLocation) => {
                    updateExperienceField("companyLocation", newCompanyLocation);
                }}
            ></EditableText>
            {experienceRowState.jobs.map((job, jobIndex) => {
                return (
                    <CV_Experience_Job experienceJob={job} key={job.jobTitle} setterFunction={modifyJob(jobIndex)} />
                );
            })}
        </div>
    );
}

export default CV_Experience_Row;
