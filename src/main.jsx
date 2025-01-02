import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import CV_Header from "./components/CV_Header/CV_Header.jsx";
import CV_Objective from "./components/CV_Objective/CV_Objective.jsx";
import CV_Education from "./components/CV_Education/CV_Education.jsx";
import CV_Toolbar from "./components/CV_Toolbar/CV_Toolbar.jsx";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <CV_Toolbar />
        <CV_Header />
        <CV_Objective />
        <CV_Education />
    </StrictMode>
);
