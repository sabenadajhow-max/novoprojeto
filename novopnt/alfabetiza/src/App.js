import logo from './logo2.png';
import './App.css';
import Header from './Header';

function App() {
  return (
    <div className="App">
      <Header/>

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        <h1> Alfabetiza +</h1>
        </a>
      </header>
    </div>
  );
}

export default App;
