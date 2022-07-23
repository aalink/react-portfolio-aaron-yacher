// import logo from './logo.svg';
import portrait from "./aaron-yacher-portrait.jpg"
import './App.css';
// import About from "./components/About"
// import Google from "./components/Google"
import Navbar from "./components/Navbar"



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Aaron Yacher</p>
        <a
          className="App-link"
          href="https://github.com/aalink"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      <Navbar />

      <img src={portrait} className="App-logo" alt="logo" />

      </header>
    </div>
  );
}

export default App;
