import "./Accordion.css";
import { useState } from "react";

const Accordion = (acc) => {
  const [status, setStatus] = useState("inactive");

  const toggleStatus = () => {
    if (status === "inactive") {
      setStatus("active");
    } else {
      setStatus("inactive");
    }
  };
  if (status === "inactive") {
    return (
      <>
        <button className="accordion" onClick={toggleStatus}>
          {acc.headline}
        </button>
        <div className="panel" style={{ maxHeight: "0px" }}>
          <p>{acc.text}</p>
        </div>
      </>
    );
  } else {
    return (
      <>
        <button className="accordion active" onClick={toggleStatus}>
          {acc.headline}
        </button>
        <div
          className="panel"
          style={{ maxHeight: document.body.scrollHeight }}
        >
          <p>{acc.text}</p>
        </div>
      </>
    );
  }
};

export default Accordion;
