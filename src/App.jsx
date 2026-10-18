import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home.jsx';
import Chamados from './components/Chamados.jsx';
import NovoChamado from './components/NovoChamado.jsx';
import Perfil from './components/Perfil.jsx';
import Ouvidoria from './components/Ouvidoria.jsx';
import TelefonesUteis from './components/Telefones.jsx';
import DefesaCivil from './components/DefesaCivil.jsx';
import UnidadesSaude from './components/Upas.jsx';
import Notificacoes from './components/Notificacoes.jsx';

function App() {
  return (
    <BrowserRouter>
      <section>
        <Routes>
          <Route path="/" element={<Home nome="Luiza" />} />
          <Route path="Chamados" element={<Chamados />} />
          <Route path="/NovoChamado" element={<NovoChamado />} />
          <Route path="/Perfil" element={<Perfil />} />
          <Route path="/Ouvidoria" element={<Ouvidoria />} />
          <Route path="/Telefones" element={<TelefonesUteis />} />
          <Route path="/DefesaCivil" element={<DefesaCivil />} />
          <Route path="/Upas" element={<UnidadesSaude />} />
          <Route path="/Notificacoes" element={<Notificacoes />} />
        </Routes>
      </section>
    </BrowserRouter>
  );
}

export default App;