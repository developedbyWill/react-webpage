import React from "react";

class Item extends React.Component {
  render() {
    return (
      <div className="col-md-3">
        <div className="card">
          <img
            src={this.props.imgSrc}
            className="caption"
            alt={this.props.title}
          />
          <h3>{this.props.title}</h3>
          <div className="card-body">
            <p className="card-text">{this.props.text}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Item;
