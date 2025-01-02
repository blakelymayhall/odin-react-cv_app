import { useState, useEffect } from "react";
import CV_Toolbar_Button from "./CV_Toolbar_Button";
import "../../styles/CV_Toolbar/cv_toolbar.css";

function CV_Toolbar() {
    const [toolbarState, setToolbarState] = useState(0);
    const [componentWidth, setComponentWidth] = useState(0);

    useEffect(() => {
        const updateWidth = () => {
            const bodyStyle = window.getComputedStyle(document.body);
            const bodyMarginLeft = parseFloat(bodyStyle.marginLeft);
            console.log(bodyMarginLeft);
            setComponentWidth(bodyMarginLeft);
        };
        updateWidth();
        window.addEventListener("resize", updateWidth);
        return () => {
            window.removeEventListener("resize", updateWidth);
        };
    }, []);

    const handlePrintClicked = () => alert("Print button clicked!");
    const handlePreviewButtonClicked = () => alert("Preview button clicked!");
    const handleEditButtonClicked = () => alert("Edit button clicked!");
    const handleResetButtonClicked = () => alert("Reset button clicked!");
    const handleSettingsButtonClicked = () => alert("Settings button clicked!");

    return (
        <div id="toolbar" style={{ width: componentWidth + "px" }}>
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
