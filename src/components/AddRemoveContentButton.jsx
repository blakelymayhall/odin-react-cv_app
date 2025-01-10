import React, { useState } from "react";
import "../index.css";

const AddRemoveContentButton = ({ buttonID, className = "addSectionButton", sectionFunction, buttonText }) => {
    return (
        <button id={buttonID} className={className} onClick={sectionFunction}>
            {buttonText}
        </button>
    );
};

export default AddRemoveContentButton;
