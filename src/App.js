// import logo from './logo.svg';
// import portrait from "./aaron-yacher-portrait.jpg";
import "./App.css";
import About from "./components/About"
import Navigation from "./components/Navigation";

import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navigation />

      </header>

      <main>
        <About />

      </main>

        <Footer />

    </div>
  );
}

export default App;
