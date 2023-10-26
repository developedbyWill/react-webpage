import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Card from "./components/Cards";
import Increase from "./components/Increase";
import Decrease from "./components/Decrease";
import Number from "./components/Number";
import Footer from "./components/Footer";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Navbar />
      <Banner />
      <div className="cards">
        <Card
          title="Cards"
          image="/public/image/nice-image.jpg"
          description="Cards Section"
        />
      </div>
      <div className="buttons-container">
        <div className="buttons-column">
          <Increase setCount={setCount} />
          <div className="vertical-space"></div>
          <Decrease setCount={setCount} />
        </div>
        <div className="number-column">
          <Number count={count} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
