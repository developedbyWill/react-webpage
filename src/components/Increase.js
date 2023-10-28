import React from "react";

const Increase = ({ setCount }) => {
  const increment = () => {
    setCount((count) => count + 1);
  };

  return <button onClick={increment}>Increase</button>;
};

export default Increase;
