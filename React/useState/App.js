import logo from './logo.svg';
import './App.css';
import Dados from './components/Dados/Dados';
import Cliques from './components/Cliques/Cliques';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>
          Luis Felipe Silva de Melo
        </h2>
        <Dados idade="19 / " cidade="Petrolina" />
        <Cliques />
      </header>
    </div>
  );
}

export default App;

