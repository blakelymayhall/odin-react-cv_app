import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import CV_Header from "./components/CV_Header/CV_Header.jsx";
import CV_Objective from "./components/CV_Objective/CV_Objective.jsx";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <CV_Header />
        <CV_Objective />
    </StrictMode>
);
