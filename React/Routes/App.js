import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './components/Pages/Home';
import Currículo from './components/Pages/Currículo';
import Projetos from './components/Pages/Projetos';
import Contatos from './components/Pages/Contatos';

function App() {
  return(
    <header>
      <BrowserRouter>
        <Routes>
          <Route path="/Home" element={ <Home/> }></Route>
          <Route path="/Currículo" element={ <Currículo/> }></Route>
          <Route path="/Projetos" element={ <Projetos/> }></Route>
          <Route path="/Contatos" element={ <Contatos/> }></Route>
        </Routes>
      </BrowserRouter>
    </header>
  )
}

export default App;
