import { useState, useEffect } from "react";
import CV_Toolbar_Button from "./CV_Toolbar_Button";
import { CV_App_Modes } from "../../App";
import "../../styles/CV_Toolbar/cv_toolbar.css";

function CV_Toolbar({ handleSetMode }) {
    const [toolbarState, setToolbarState] = useState(0);
    const [componentWidth, setComponentWidth] = useState(0);

    useEffect(() => {
        const updateWidth = () => {
            const bodyStyle = window.getComputedStyle(document.body);
            const bodyMarginLeft = parseFloat(bodyStyle.marginLeft);
            setComponentWidth(bodyMarginLeft);
        };
        updateWidth();
        window.addEventListener("resize", updateWidth);
        return () => {
            window.removeEventListener("resize", updateWidth);
        };
    }, []);

    const handlePrintClicked = () => {
        handleSetMode(CV_App_Modes.PRINT);
        setTimeout(() => {
            window.print();
            handleSetMode(CV_App_Modes.EDIT);
        }, 0);
    };
    const handlePreviewButtonClicked = () => {
        handleSetMode(CV_App_Modes.PRINT);
    };
    const handleEditButtonClicked = () => {
        handleSetMode(CV_App_Modes.EDIT);
    };
    const handleResetButtonClicked = () => {
        localStorage.clear();
        window.location.reload();
    };
    const handleSettingsButtonClicked = () => {
        handleSetMode(CV_App_Modes.SETTINGS);
    };

    return (
        <div id="toolbar" className="hide-on-print" style={{ width: componentWidth + "px" }}>
            <CV_Toolbar_Button buttonID="printButton" buttonText="Print" onClick={handlePrintClicked} />
            <CV_Toolbar_Button
                buttonID="previewButton"
                buttonText="Preview Mode"
                onClick={handlePreviewButtonClicked}
            />
            <CV_Toolbar_Button buttonID="editButton" buttonText="Edit Mode" onClick={handleEditButtonClicked} />
            <CV_Toolbar_Button buttonID="resetButton" buttonText="Reset" onClick={handleResetButtonClicked} />
            <CV_Toolbar_Button buttonID="settingsButton" buttonText="Settings" onClick={handleSettingsButtonClicked} />
        </div>
    );
}

export default CV_Toolbar;
