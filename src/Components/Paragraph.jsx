import React from "react";

const Paragraph = () => {
  return (
    <div>
      <div
        style={{
          color: "#1C5FA8",
          fontFamily: "sans-serif",
          marginTop: "10px",
          fontWeight: "bold",
          fontSize: "30px",
          display: "flex",
          backgroundColor: "#F7F7F7",
        }}
        className="container-fluid"
      >
        <p>
          <strong style={{ marginLeft: "270px" }}>
            Looking a solution for your project?
          </strong>
          <h6 style={{ color: "black", marginLeft: "260px" }}>
            <strong style={{ color: "black" }}>
              Make an appointment today with one of our solution expert
            </strong>
          </h6>
        </p>
        <button
          style={{
            height: "50px",
            border: "2px solid #1C5FA8",
            marginLeft: "90px",
            marginTop: "15px",
            borderRadius: "10px",
          }}
          class=""
        >
          <h6 style={{ padding: "13px", color: "#1C5FA8", fontSize: "15px" }}>
            <strong style={{}}>MAKE AN APPOINTMENT</strong>
          </h6>
        </button>
      </div>
    </div>
  );
};
export default Paragraph;
