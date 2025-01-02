import React, { useState } from "react";
import "./index.css";
import CV_Header from "./components/CV_Header/CV_Header.jsx";
import CV_Objective from "./components/CV_Objective/CV_Objective.jsx";
import CV_Education from "./components/CV_Education/CV_Education.jsx";
import CV_Toolbar from "./components/CV_Toolbar/CV_Toolbar.jsx";
import CV_Experience from "./components/CV_Experience/CV_Experience.jsx";

const App = () => {
    const [isPrintMode, setIsPrintMode] = useState(false);

    const handleSetMode = (modeButtonClick) => {
        setIsPrintMode(modeButtonClick);
    };

    return (
        <>
            <CV_Toolbar handleSetMode={handleSetMode} />
            <CV_Header isPrintMode={isPrintMode} />
            <CV_Objective />
            <CV_Education />
            <CV_Experience />
        </>
    );
};

export default App;
