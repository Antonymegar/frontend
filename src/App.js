import './App.css';
import React, { useState } from "react";
import "./App.css";
import Phone from "./Phone";
import Africastalking from 'africastalking-client'

const App = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = async () => {
    setClicked(true);
    };

  return (
    <div className="app">
      <header className="App-header">
        <h1>React &amp; Voice  Phone</h1>
      </header>

      <main>
        {!clicked && <button onClick={handleClick}>Connect to Phone</button>}

        { <Phone ></Phone>}
      </main>

      <footer>
        <p>
         <a>Built on Africa's  Talking Voice by Antony Murugu</a>
        </p>
      </footer>
    </div>
  );
};

export default App;
