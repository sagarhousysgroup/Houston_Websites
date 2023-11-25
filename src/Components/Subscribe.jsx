import React from "react";

const Subscribe = () => {
  return (
    <div>
      <div
        style={{
          backgroundColor: "#1C5FA8",
          marginTop: "30px",
          height: "100px",
          borderRadius: "5px",
        }}
        className="container-fluid mt-5"
      >
        <div className="row">
          <div className="col-md-4">
            <p style={{ color: "white", float: "center" }}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt
              accusantium assumenda quod cupiditate, beatae porro rem
              praesentium iure excepturi. Non eaque ad, tempora deserunt
              excepturi nihil pariatur libero animi quod.
            </p>
          </div>
          <div className="col-md-4 text-center">
            <div className="input-group">
              <input
                style={{
                  borderRadius: "10px",
                  marginTop: "30px",
                  marginLeft: "30px",
                }}
                type="text"
                className="form-control"
                placeholder="Search..."
              />
              <div className="input-group-append"></div>
            </div>
          </div>
          <div className="col-md-4 text-right">
            <button style={{ marginTop: "30px" }} className="btn btn-success">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
