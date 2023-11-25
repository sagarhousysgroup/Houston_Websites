import React from "react";

const Section4 = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <strong>
              <h1>Our Solutions</h1>
            </strong>
            <p>
              in eveniet deserunt dolores error asperiores aperiam tempora in
              eveniet deserunt dolores error asperiores aperiam tempora. in
              eveniet deserunt dolores error asperiores aperiam tempora in
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3">
            <div style={{ borderRadius: "10px" }} className="card">
              <img
                style={{ borderRadius: "10px" }}
                src="pms1.jpg"
                className="card-img-top"
                alt="Image 1"
              />
            </div>
            <h5 className="card-title">Parking Management System</h5>
          </div>
          <div className="col-md-3">
            <div style={{ borderRadius: "10px" }} className="card">
              <img
                style={{ borderRadius: "10px" }}
                src="pms1.jpg"
                className="card-img-top"
                alt="Image 2"
              />
            </div>
            <h5 className="card-title">Parking Guidance System</h5>
          </div>
          <div className="col-md-3">
            <div style={{ borderRadius: "10px" }} className="card">
              <img
                style={{ borderRadius: "10px" }}
                src="pms1.jpg"
                className="card-img-top"
                alt="Image 3"
              />
            </div>
            <h5 className="card-title">Traffic Management System</h5>
          </div>
          <div className="col-md-3">
            <div style={{ borderRadius: "10px" }} className="card">
              <img
                style={{ borderRadius: "10px" }}
                src="pms1.jpg"
                className="card-img-top"
                alt="Image 4"
              />
            </div>
            <h5 className="card-title">Auto-Fare Collection System</h5>
          </div>
        </div>
        <div className="row mt-1">
          <div className="col-12 text-center">
            <button className="btn btn-primary">Explore More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section4;
