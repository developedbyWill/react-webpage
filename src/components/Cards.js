import React from "react";
import Item from "./Item";

class Cards extends React.Component {
  render() {
    return (
      <div className="item-types section">
        <h1 className="text-center">CARDS</h1>
        <div className="row">
          <Item
            imgSrc="https://images.pexels.com/photos/6480812/pexels-photo-6480812.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load"
            title="Just Do It!"
            text="Card 1"
          />
          <Item
            imgSrc="https://images.pexels.com/photos/4576304/pexels-photo-4576304.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load"
            title="Love > Hate"
            text="Card 2"
          />
          <Item
            imgSrc="https://images.pexels.com/photos/8051968/pexels-photo-8051968.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load"
            title="Elite Mentality"
            text="Card 3"
          />
        </div>
      </div>
    );
  }
}

export default Cards;
