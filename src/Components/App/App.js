import Header from "../Header/Header";
import Cover from "../Cover/Cover";
import { Route, Switch } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Cover />
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
