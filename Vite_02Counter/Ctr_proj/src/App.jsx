import { useState } from 'react' // Importing the useState hook from React
import reactLogo from './assets/react.svg' // Importing the React logo image
import viteLogo from '/vite.svg' // Importing the Vite logo image
import './App.css' // Importing the App component's CSS file

function App() {
  // Initializing a state variable 'counter' with an initial value of 15
  let [counter, setCounter] = useState(15)

  // Defining a function 'addValue' to increment the 'counter' state
  const addValue = () => {     //arrow function
    // Incrementing the counter value by 1
    setCounter(counter + 1)
  }

  const decValue = () => {
    // Decrementing the counter value by 1
    setCounter(counter - 1)
  }

  // Returning the JSX elements for the App component
  return (
    <>
      <h1>Coffee aur React</h1> 
      <h2>Counter value: {counter}</h2> 

      {/* Creating a button element with an onClick event handler */}
      <button onClick={addValue}>Add value {counter}</button>     
      
      <br />
      
      {/* Creating another button element */}
      <button onClick={decValue}>Decrease value {counter}</button>
    </>
  )
}

export default App // Exporting the App component as the default export