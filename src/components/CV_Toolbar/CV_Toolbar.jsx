import { useState, useEffect } from "react";
import CV_Toolbar_Button from "./CV_Toolbar_Button";
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
        handleSetMode(true);
        setTimeout(() => {
            window.print();
            handleSetMode(false);
        }, 0);
    };
    const handlePreviewButtonClicked = () => {
        handleSetMode(true);
    };
    const handleEditButtonClicked = () => {
        handleSetMode(false);
    };
    const handleResetButtonClicked = () => {
        localStorage.clear();
        window.location.reload();
    };
    const handleSettingsButtonClicked = () => alert("Settings button clicked!");

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
