import React from 'react'; // Importing the React library
import ReactDOM from 'react-dom/client'; // Importing the ReactDOM library
import App from './App';

// Defining a functional component named MyApp
function MyApp() {
  return (
    <div>
      <h1>Custom App | Coffee</h1> // Displaying a heading with the text "Custom App | Coffee"
    </div>
  );
}

// Defining an object named anotherElement
const anotherElement = (
  /* This object is not being used anywhere in the code */
  <a href="https://youtube.com" target="_blank">Vist youTube</a>
);

// Defining a string variable named anotherUser
const anotherUser = "coffee aur react";

// Creating a React element using React.createElement
const reactElement = React.createElement(
  'a', // The type of element to create (in this case, an anchor tag)
  {
    href: 'https://youtube.com', // The href attribute of the anchor tag
    target: '_blank' // The target attribute of the anchor tag
  },
  'Visit youTube' // The text content of the anchor tag
);

// Rendering the reactElement to the DOM
ReactDOM.createRoot(document.getElementById('root')).render(
  reactElement
);