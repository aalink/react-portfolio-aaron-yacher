// import logo from './logo.svg';
import portrait from "./aaron-yacher-portrait.jpg"
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={portrait} className="App-logo" alt="logo" />
        <p>
          {/* Edit <code>src/App.js</code> and save to reload. */}
          AARON YACHER
        </p>
        <a
          className="App-link"
          href="https://github.com/aalink"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </header>
    </div>
  );
}

export default App;
