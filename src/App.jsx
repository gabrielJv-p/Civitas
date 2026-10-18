import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home.jsx';
import Chamados from './components/Chamados.jsx';
import NovoChamado from './components/NovoChamado.jsx';
import Perfil from './components/Perfil.jsx';

function App() {
  return (
    <BrowserRouter>
      <section>
        <Routes>
          <Route path="/" element={<Home nome="Luiza" />} />
          <Route path="/Chamados" element={<Chamados />} />
          <Route path="/NovoChamado" element={<NovoChamado />} />
          <Route path="/Perfil" element={<Perfil />} />
        </Routes>
      </section>
    </BrowserRouter>
  );
}

export default App;