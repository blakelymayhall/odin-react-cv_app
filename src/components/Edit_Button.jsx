import { useState } from "react";
import "../index.css";

function Edit_Button({ onClick }) {
    const [editButton, setEditButton] = useState(0);

    return <button className="editButton" onClick={onClick}></button>;
}

export default Edit_Button;
