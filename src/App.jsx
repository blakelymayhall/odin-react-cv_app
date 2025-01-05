import React, { useState } from "react";
import "./index.css";
import CV_Header from "./components/CV_Header/CV_Header.jsx";
import CV_Objective from "./components/CV_Objective/CV_Objective.jsx";
import CV_Education from "./components/CV_Education/CV_Education.jsx";
import CV_Toolbar from "./components/CV_Toolbar/CV_Toolbar.jsx";
import CV_Experience from "./components/CV_Experience/CV_Experience.jsx";

export const CV_App_Modes = {
    PRINT: "print",
    EDIT: "edit",
    SETTINGS: "settings",
};

const App = () => {
    const [CV_App_Mode, setCV_App_Mode] = useState(CV_App_Modes.EDIT);

    const handleSetMode = (CV_App_Mode) => {
        setCV_App_Mode(CV_App_Mode);
    };

    return (
        <>
            <CV_Toolbar handleSetMode={handleSetMode} />
            <CV_Header isPrintMode={CV_App_Mode == CV_App_Modes.PRINT} />
            <CV_Objective />
            <CV_Education />
            <CV_Experience />
        </>
    );
};

export default App;
