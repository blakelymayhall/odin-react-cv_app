import "../../styles/cv_toolbar.css";

function CV_Toolbar_Button({ buttonID = "", buttonText = "", onClick }) {
    return (
        <button id={buttonID} className="toolbarButton" onClick={onClick}>
            {buttonText}
        </button>
    );
}

export default CV_Toolbar_Button;
