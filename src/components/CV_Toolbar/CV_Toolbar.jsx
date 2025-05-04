import { useState, useEffect, useRef } from "react";
import CV_Toolbar_Button from "./CV_Toolbar_Button";
import { CV_App_Modes } from "../../App";
import "../../styles/cv_toolbar.css";
import js from "@eslint/js";

function CV_Toolbar({ handleSetMode, getResumeData, updateFromUpload }) {
    const [toolbarState, setToolbarState] = useState(0);
    const [componentWidth, setComponentWidth] = useState(0);
    const fileInputRef = useRef(null);

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
        // handleSetMode(CV_App_Modes.SETTINGS);
        alert("Not Implemented - In Development");
    };
    const handleImportButtonClicked = () => {
        fileInputRef.current.click();
    };
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                const jsonData = JSON.parse(e.target.result);
                updateFromUpload(jsonData);
            } catch (error) {
                console.error("Invalid JSON file:", error);
            }
        };
        reader.readAsText(file);
    };
    const handleExportButtonClicked = () => {
        const jsonString = JSON.stringify(getResumeData(), null, 2);
        const blob = new Blob([jsonString], { type: "application/json" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "data.json";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    };

    return (
        <>
            <div id="leftToolbar" className="toolbar hide-on-print" style={{ width: componentWidth + "px" }}>
                <CV_Toolbar_Button buttonID="printButton" buttonText="Print" onClick={handlePrintClicked} />
                <CV_Toolbar_Button
                    buttonID="previewButton"
                    buttonText="Preview Mode"
                    onClick={handlePreviewButtonClicked}
                />
                <CV_Toolbar_Button buttonID="editButton" buttonText="Edit Mode" onClick={handleEditButtonClicked} />
                <CV_Toolbar_Button buttonID="resetButton" buttonText="Reset" onClick={handleResetButtonClicked} />
                <CV_Toolbar_Button
                    buttonID="settingsButton"
                    buttonText="Settings"
                    onClick={handleSettingsButtonClicked}
                />
            </div>
            <div id="rightToolbar" className="toolbar hide-on-print" style={{ width: componentWidth + "px" }}>
                <CV_Toolbar_Button buttonID="importButton" buttonText="Import" onClick={handleImportButtonClicked} />
                <input
                    type="file"
                    accept=".json"
                    ref={fileInputRef}
                    style={{ display: "none" }}
                    onChange={handleFileChange}
                />
                <CV_Toolbar_Button buttonID="exportButton" buttonText="Export" onClick={handleExportButtonClicked} />
            </div>
        </>
    );
}

export default CV_Toolbar;
