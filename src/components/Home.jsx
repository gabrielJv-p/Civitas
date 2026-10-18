import {
  Bell, Search, MapPin, Headset, Phone, ShieldAlert, HeartPulse,
  House, List, Plus, User,
} from "lucide-react";
import "./HomeLayout.css";
import { Link } from "react-router-dom";


const servicos = [
  { id: "ouvidoria", rotulo: "Ouvidoria", icone: Headset, alerta: false, rota:"/Ouvidoria" },
  { id: "telefones", rotulo: "Telefones úteis", icone: Phone, alerta: false, rota:"/Telefones" },
  { id: "defesa-civil", rotulo: "Defesa Civil", icone: ShieldAlert, alerta: true, rota: "/DefesaCivil" },
  { id: "saude", rotulo: "Unidades de saúde", icone: HeartPulse, alerta: false, rota:"/Upas" },
];

const etapas = ["Recebido", "Em análise", "Em campo", "Resolvido"];

export default function Home({ nome = "[nome]", etapaAtual = 2 }) {
  return (
    <main className="home">
      <header className="home__topo">
        <div>
          <p className="home__saudacao">Bem-vindo(a)</p>
          <h1 className="home__nome">Olá, {nome}</h1>
        </div>
        <Link to="/Notificacoes" className="btn-icone" aria-label="Notificações" style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center' }}>
          <Bell size={22} strokeWidth={1.8} />
        </Link>
      </header>

      <label className="busca">
        <Search size={20} strokeWidth={1.8} aria-hidden="true" />
        <input type="text" placeholder="O que você precisa hoje?" />
      </label>

      <section className="destaque">
        <div className="destaque__texto">
          <h2>Viu um problema na sua rua?</h2>
          <p>Registre com foto e localização e acompanhe até a solução.</p>
          <Link 
            to="/NovoChamado" 
            className="btn-amarelo" 
            style={{ 
              textDecoration: 'none', 
              display: 'inline-flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              boxSizing: 'border-box' 
            }}
          >
            Novo chamado
          </Link>
        </div>
        <div className="destaque__icone">
          <MapPin size={32} strokeWidth={1.8} aria-hidden="true" />
        </div>
      </section>

      <section className="status">
        <div className="status__linha">
          <h2>Seu chamado em andamento</h2>
          <span className="status__tag">{etapas[etapaAtual - 1]}</span>
        </div>
        <div className="status__barra">
          {etapas.map((e, i) => (
            <span key={e} className={i < etapaAtual ? "ativo" : ""} />
          ))}
        </div>
        <p className="status__legenda">{etapas.join(" · ")}</p>
      </section>

      <nav className="servicos" aria-label="Serviços">
        {servicos.map(({ id, rotulo, icone: Icone, alerta, rota }) => (
          <Link key={id} to={rota} className={`servico ${alerta ? "servico--alerta" : ""}`}>
            <span className="servico__icone">
              <Icone size={22} strokeWidth={1.8} aria-hidden="true" />
            </span>
            <span className="servico__rotulo">{rotulo}</span>
          </Link>
        ))}
      </nav>  

      <article className="noticia">
        <p className="noticia__tag">Notícia</p>
        <h3>
          Prefeitura realiza recapeamento asfáltico na Avenida Renato de Castro
          Leitão, em Jardim Atlântico
        </h3>
      </article>

      <nav className="barra" aria-label="Navegação principal">
        <button className="barra__item barra__item--ativo">
          <House size={22} strokeWidth={1.8} aria-hidden="true" />
          Início
        </button>
      <Link to="/Chamados" className="barra__item" style={{ textDecoration: 'none', color: 'inherit', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <List size={22} strokeWidth={1.8} aria-hidden="true" />
          Chamados
        </Link>
        <Link to="/NovoChamado" className="barra__fab" aria-label="Novo chamado">
          <Plus size={24} strokeWidth={2.4} />
        </Link>
        <Link to="/Perfil" className="barra__item">
          <User size={22} strokeWidth={1.8} aria-hidden="true" />
          Perfil
        </Link>
      </nav>
    </main>
  );
}
