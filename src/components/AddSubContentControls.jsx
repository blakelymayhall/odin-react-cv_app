import "../index.css";

function AddSubContentControls({ topPos = "10mm", leftPos = "3mm" }) {
    return (
        <div
            className="addSubtractContentButtons"
            style={{
                position: "absolute",
                top: `${topPos}`,
                left: `${leftPos}`,
            }}
        >
            <button className="addButton"></button>
            <button className="removeButton"></button>
        </div>
    );
}

export default AddSubContentControls;
