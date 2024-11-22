import { Route, Routes } from "react-router-dom";

import { Disclaimer, TellStory } from "./pages";
import "./App.css";
// import logo from "./logo.svg";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Disclaimer />} />
      <Route path="/TellStory" element={<TellStory />} />
    </Routes>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
