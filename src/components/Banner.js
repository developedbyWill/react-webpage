import React from "react";

class Carousel extends React.Component {
  render() {
    return (
      <div
        id="carouselExampleSlidesOnly"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://images.pexels.com/photos/5981783/pexels-photo-5981783.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="..."
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Carousel;
