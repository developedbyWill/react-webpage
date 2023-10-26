import React from "react";

const Increase = ({ setCount }) => {
  const increment = () => {
    setCount((count) => count + 1);
  };

  return <button onClick={increment}>Increase</button>;
};

export default Increase;

// Functionality: The Increase component is designed to increase the current count value by 1 each time its button is clicked.

// Props: The component accepts setCount as a prop. This function when invoked will change the count state in the App component.

// State: The Increase component has no state of its own.

// Methods: The increment method is designed to use the setCount function to increase the count value by 1 each time it's called.

// Rendered JSX: The component renders a button that, when clicked, calls the increment function, thus raising the count by 1.

// Let's imagine this component a type of machine, an 'Increase' machine which has a button.

// When you press the button on 'Increase' machine, it causes a mechanism inside the machine (our increment function) to add one to a number you can't see.
//  The setCount is a tool that the machine uses to change this invisible number. With each click on the buttons, the machine tells this tool to add or subtract one from the invisible number.

// The component use React's props to pass down the setCount function from its parent component. This allows us to set the state of the count in the parent component.
