import React, { useState } from "react";

const EditableText = ({ prefix = "", initialText = "", textClass = "", textID = "", setterFunction }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [text, setText] = useState(prefix + initialText);
    const [unmodifiedText, setUnmodifiedText] = useState("");

    const handleTextClick = () => {
        setIsEditing(true);
        setUnmodifiedText(text);
    };

    const handleBlur = () => {
        setIsEditing(false);
    };

    const handleChange = (e) => {
        setText(prefix + e.target.value);
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            if (text === "") {
                alert("Field cannot be empty");
                setText(unmodifiedText);
                setIsEditing(false);
                return;
            }
            setterFunction(e.target.value);
            setIsEditing(false);
        }
    };

    const handleInputResize = (e) => {
        e.target.style.height = "auto";
        e.target.style.height = `${e.target.scrollHeight}px`;
    };

    const classes = textClass === "" ? "editableText" : `editableText ${textClass}`;

    return (
        <>
            {isEditing ? (
                <textarea
                    value={text.startsWith(prefix) ? text.slice(prefix.length) : text}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    onKeyDown={handleKeyDown}
                    autoFocus
                    className={classes}
                    id={textID}
                    onInput={handleInputResize}
                />
            ) : (
                <span onClick={handleTextClick} className={classes} id={textID}>
                    {text}
                </span>
            )}
        </>
    );
};

export default EditableText;
