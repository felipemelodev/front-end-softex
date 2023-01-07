import logo from './logo.svg';
import './App.css';
import HelloWorld from './components/HelloWorld/HelloWorld';
import Dados from './components/Dados/Dados';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <HelloWorld />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Luis Felipe Silva de Melo
        </p>
        <Dados idade = "19 / " profissao = "Desenvolvedor Front-End / " cidade = "Petrolina" />
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
