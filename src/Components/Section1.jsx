import React from "react";

const Section1 = () => {
  return (
    <div>
      <div className="container-fluid mt-3">
        <h3 style={{ marginRight: "775px" }}>
          <strong>Twenty years Of Innovation</strong>
        </h3>
        <div className="row">
          <div style={{ height: "250px" }} className="col-lg-6">
            <p style={{ textAlign: "left", marginLeft: "100px" }}>
              Lorem ipsum dolor sit amet sciunt. Corrupti voluptas libero
              facilis praesentium aut! Voluptate,e accusamus ad aliquid
              inventore dig magnam? Lorem ipsum amet sciunt. Corrupti voluptas
              libero facilis praesentium aut! Voluptatee accusamus ad aliquid.
              inventore dignissimos magnam?
              <br /> Lorem ipsum amet sciunt. Corrupti voluptas libero facilis
              praesentium aut! Voluptate,e accusamus ad
            </p>
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <button
                    style={{ marginRight: "30px" }}
                    className="btn btn-info"
                  >
                    View More
                  </button>
                </div>
                <div className="col-md-6">
                  <a
                    style={{ marginRight: "50px", width: "290px" }}
                    href="tel:+180083325255"
                    className="btn btn-info"
                  >
                    <img
                      src="phone.png"
                      alt="Phone Icon"
                      style={{
                        width: "20px",
                        height: "20px",
                        marginRight: "10px",
                      }}
                    />
                    this is contact number 67676e3376
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div style={{ height: "250px" }} className="col-lg-6">
            <img
              style={{
                width: "440px",
                height: "220px",
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
export default Section1;
