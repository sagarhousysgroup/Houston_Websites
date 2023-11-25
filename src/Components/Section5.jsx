import React from "react";
const Section5 = () => {
  const blueQuotesStyle = {
    color: "blue",
  };
  return (
    <div>
      <div
        className="container"
        style={{
          backgroundColor: "#F7F7F7",
          marginTop: "30px",
          height: "250px",
          borderRadius: "20px",
        }}
      >
        <div className="row">
          <div className="col-12 text-center">
            <strong>
              <h2
                style={{
                  marginTop: "20px",
                  fontWeight: "bold",
                  color: "#1C5FA8",
                }}
              >
                See What Clients are Saying
              </h2>
            </strong>
            <p>Paragraph text in the middle</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div
              style={{ borderRadius: "10px", border: "2px solid #1C5FA8" }}
              className="card"
            >
              <div className="card-body">
                <p style={blueQuotesStyle}>
                  &ldquo;This is a testimonial from a satisfied customer. Great
                  product!&rdquo;
                </p>
                <h5 className="card-title">John hacker</h5>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div
              style={{ borderRadius: "10px", border: "2px solid #1C5FA8" }}
              className="card"
            >
              <div className="card-body">
                <p style={blueQuotesStyle}>
                  &ldquo;I love this service. It has made my life so much
                  easier.&rdquo;
                </p>
                <h5 className="card-title">John Smith</h5>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div
              style={{ borderRadius: "10px", border: "2px solid #1C5FA8" }}
              className="card"
            >
              <div className="card-body">
                <p style={blueQuotesStyle}>
                  &ldquo;Outstanding support! The team really goes above and
                  beyond.&rdquo;
                </p>
                <h5 className="card-title">John doe</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Section5;
