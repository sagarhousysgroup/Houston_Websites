import React from "react";

const Section3 = () => {
  const sectionStyle = {
    backgroundColor: "#F7F7F7",
    height: "380px",
  };

  return (
    <div style={sectionStyle}>
      <div className="container-fluid mt-3">
        <h3 style={{ marginRight: "860px" }}>
          <strong>Our Recent Projects</strong>
        </h3>
        <div className="row">
          <div style={{ height: "250px" }} className="col-lg-6">
            <p style={{ textAlign: "left", marginLeft: "100px" }}>
              Lorem ipsum dolor sit amet sciunt. Corrupti voluptas libero
              facilis praesentium aut! Voluptate,e accusamus ad aliquid
              inventore dig magnam? Lorem ipsum amet sciunt. Corrupti voluptas
            </p>
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <ul style={{ listStyle: "none" }}>
                    <h6>
                      Supreme court of india
                      <br />
                      <p style={{ marginRight: "80px" }}>Delhi,india</p>
                    </h6>
                    <h6 style={{ marginRight: "80px" }}>
                      Goa Airport
                      <br />
                      <p style={{ fontSize: "15px" }}>Goa,india</p>
                    </h6>
                    <h6 style={{ marginRight: "60px" }}>
                      Riverfront Park
                      <br />
                      <p style={{ fontSize: "15px" }}>Rajasthan,india</p>
                    </h6>
                  </ul>
                </div>
                <div className="col-md-6">
                  <ul style={{ listStyle: "none" }}>
                    <h6>
                      Supreme court of india
                      <br />
                      <p style={{ marginRight: "80px" }}>Delhi,india</p>
                    </h6>
                    <h6 style={{ marginRight: "80px" }}>
                      Goa Airport
                      <br />
                      <p>Goa,india</p>
                    </h6>
                    <h6 style={{ marginRight: "60px" }}>
                      Riverfront Park
                      <br />
                      <p style={{ fontSize: "15px" }}>Rajasthan,india</p>
                    </h6>
                  </ul>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <button
                    style={{ marginLeft: "80px", width: "230px" }}
                    className="btn btn-info"
                  >
                    Explore More
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div style={{ height: "250px" }} className="col-lg-6">
            <img
              style={{
                width: "440px",
                height: "270px",
                border: "2px solid #1C5FA8",
                borderRadius: "20px",
              }}
              src="innov.jpg"
              alt="ghghgh"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;
