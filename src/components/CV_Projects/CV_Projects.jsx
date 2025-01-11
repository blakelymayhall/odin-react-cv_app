import { useState, useEffect } from "react";
import EditableText from "../EditableText";
import { CV_App_Modes } from "../../App";
import { CV_App_Editable_Sections } from "../../App";
import AddRemoveContentButton from "../AddRemoveContentButton";
import "../../styles/cv_projects.css";

import { faker } from "@faker-js/faker";

function CV_Projects({ setActiveSection, appMode, activeSection }) {
    const [projects, setProjects] = useState(() => {
        const savedData = localStorage.getItem("projects");
        return savedData
            ? JSON.parse(savedData)
            : [
                  faker.lorem.sentence({ min: 4, max: 7 }).slice(0, -1),
                  faker.lorem.sentence({ min: 4, max: 7 }).slice(0, -1),
                  faker.lorem.sentence({ min: 4, max: 7 }).slice(0, -1),
                  faker.lorem.sentence({ min: 4, max: 7 }).slice(0, -1),
                  faker.lorem.sentence({ min: 4, max: 7 }).slice(0, -1),
              ];
    });

    useEffect(() => {
        localStorage.setItem("projects", JSON.stringify(projects));
    }, [projects]);

    const isActiveSection = () => {
        return appMode == CV_App_Modes.EDIT && activeSection == CV_App_Editable_Sections.PROJECTS;
    };

    const modifyProjects = (projectIndex) => {
        return (newProject) => {
            let projCopy = [...projCopy];
            projCopy[projectIndex] = newProject;
            setProjects(projCopy);
        };
    };

    const addProject = () => {
        let projCopy = [...projects];
        projCopy.unshift("New Project");
        setProjects(projCopy);
    };

    const removeProject = () => {
        let projCopy = [...projects];
        projCopy.pop();
        setProjects(projCopy);
    };

    return (
        <div id="projectsSection" className={isActiveSection() ? "activeSection" : ""}>
            <div id="projectsContainer">
                <p id="projectsTitle">Projects:</p>
                <div id="projectsList">
                    {appMode == CV_App_Modes.EDIT && activeSection == CV_App_Editable_Sections.PROJECTS && (
                        <AddRemoveContentButton
                            buttonID="addLinkButton"
                            sectionFunction={addProject}
                            buttonText="Add Project"
                        />
                    )}
                    {projects.map((project, index) => {
                        return (
                            <EditableText
                                key={project}
                                initialText={project}
                                setterFunction={modifyProjects(index)}
                                setActiveSection={setActiveSection}
                            />
                        );
                    })}
                    {appMode == CV_App_Modes.EDIT && activeSection == CV_App_Editable_Sections.PROJECTS && (
                        <AddRemoveContentButton
                            buttonID="addLinkButton"
                            sectionFunction={removeProject}
                            buttonText="Remove Project"
                        />
                    )}
                </div>
            </div>
        </div>
    );
}

export default CV_Projects;
