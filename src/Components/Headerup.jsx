import React from "react";
import "./Headerup.css";
const Headerup = () => {
  return (
    <div style={{ display: "flex" }} className="container">
      <div style={{ paddingLeft: "50px" }} className="li">
        <img src="email.png" alt="" />
      </div>
      <div style={{ marginLeft: "30px" }} className="li">
        contactus@houstonsystem.com
      </div>
      <div style={{ marginLeft: "30px" }} className="li">
        <img src="time.png" alt="" />
      </div>
      <div style={{ paddingRight: "60px" }} className="col-3">
        Mon-sat: 9:00 am-6:00 pm
      </div>
      <div className="display">
        <div style={{ marginRight: "80px" }}>
          <img src="facebook-logo.png" alt="" />
        </div>
        <div style={{ marginRight: "80px" }}>
          <img src="twitter-logo.png" alt="" />
        </div>
        <div>
          <img src="linkedin.png" alt="" />
        </div>
      </div>
      {/* <div style={{ marginLeft: "30px" }} className="li">
        <img src="facebook-logo.png" alt="" />
      </div>
      <div style={{ marginLeft: "200px" }} className="li">
        <img src="twitter-logo.png" alt="" />
      </div>
      <div style={{ marginLeft: "200px" }} className="li">
        <img src="linkedin.png" alt="" />
      </div> */}
    </div>
  );
};
export default Headerup;
