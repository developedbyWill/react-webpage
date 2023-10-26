import React from "react";

const Decrease = ({ setCount }) => {
  const decrement = () => {
    setCount((count) => count - 1);
  };

  return <button onClick={decrement}>Decrease</button>;
};

export default Decrease;
