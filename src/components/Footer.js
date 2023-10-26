import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <footer
        style={{
          backgroundColor: "#f0f0f0",
          padding: "20px 0",
          textAlign: "center",
        }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-4">
              <h4>Contact Us</h4>
              <p>Accra, Ghana</p>
              <p>East Cantonment, 1 Omanba Close</p>
              <p>Amansan House</p>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-6">
              <hr style={{ backgroundColor: "#ccc" }} />
              <p style={{ color: "#666" }}>
                {" "}
                Copyright &copy; 2023 <a href="/">Will Inc.</a> All rights
                reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
