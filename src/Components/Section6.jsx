import React from "react";

const Section6 = () => {
  return (
    <div>
      <div style={{ marginTop: "10px" }} className="container">
        <h3 style={{ marginTop: "20px", fontWeight: "bold", color: "#1C5FA8" }}>
          Products for Sale
        </h3>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam,
          magnam! Eum nam minus similique a pariatur inventore nostrum suscipit,
          nemo expedita aut quisquam esse aliquid maiores? Doloremque odit quam
        </p>

        <div className="row">
          <div className="col-md-3">
            <div style={{ borderRadius: "10px" }} className="card">
              <img
                style={{ borderRadius: "10px" }}
                src="tunrnstile.jpg"
                className="card-img-top"
                alt="Card 1"
              />
            </div>
            <h5 className="card-title">Ticket Barriers</h5>
            <p className="card-text">45000 rs</p>
          </div>
          <div className="col-md-3">
            <div style={{ borderRadius: "10px" }} className="card">
              <img
                style={{ borderRadius: "10px" }}
                src="tunrnstile.jpg"
                className="card-img-top"
                alt="Card 2"
              />
            </div>
            <h5 className="card-title">Ticket Barriers</h5>
            <p className="card-text">45000 rs</p>
          </div>
          <div className="col-md-3">
            <div style={{ borderRadius: "10px" }} className="card">
              <img
                style={{ borderRadius: "10px" }}
                src="tunrnstile.jpg"
                className="card-img-top"
                alt="Card 3"
              />
            </div>
            <h5 className="card-title">Ticket Barriers</h5>
            <p className="card-text">45000 rs</p>
          </div>
          <div className="col-md-3">
            <div style={{ borderRadius: "10px" }} className="card">
              <img
                style={{ borderRadius: "10px" }}
                src="tunrnstile.jpg"
                className="card-img-top"
                alt="Card 4"
              />
            </div>
            <h5 className="card-title">Ticket Barriers</h5>
            <p className="card-text">45000 rs</p>
          </div>
          {/* Repeat the same structure for other cards */}
        </div>

        <div className="text-center" style={{ marginTop: "10px" }}>
          <button className="btn btn-primary">View All Products</button>
        </div>
      </div>
    </div>
  );
};
export default Section6;
