import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import CV_Header from "./components/CV_Header/CV_Header.jsx";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <CV_Header />
    </StrictMode>
);
