import {
  Bell, Search, MapPin, Headset, Phone, ShieldAlert, HeartPulse,
  House, List, Plus, User,
} from "lucide-react";
import "./HomeLayout.css";

const servicos = [
  { id: "ouvidoria", rotulo: "Ouvidoria", icone: Headset, alerta: false },
  { id: "telefones", rotulo: "Telefones úteis", icone: Phone, alerta: false },
  { id: "defesa-civil", rotulo: "Defesa Civil", icone: ShieldAlert, alerta: true },
  { id: "saude", rotulo: "Unidades de saúde", icone: HeartPulse, alerta: false },
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
        <button className="btn-icone" aria-label="Notificações">
          <Bell size={22} strokeWidth={1.8} />
        </button>
      </header>

      <label className="busca">
        <Search size={20} strokeWidth={1.8} aria-hidden="true" />
        <input type="text" placeholder="O que você precisa hoje?" />
      </label>

      <section className="destaque">
        <div className="destaque__texto">
          <h2>Viu um problema na sua rua?</h2>
          <p>Registre com foto e localização e acompanhe até a solução.</p>
          <button className="btn-amarelo">Novo chamado</button>
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
        {servicos.map(({ id, rotulo, icone: Icone, alerta }) => (
          <button key={id} className={`servico ${alerta ? "servico--alerta" : ""}`}>
            <span className="servico__icone">
              <Icone size={22} strokeWidth={1.8} aria-hidden="true" />
            </span>
            <span className="servico__rotulo">{rotulo}</span>
          </button>
        ))}
      </nav>

      <article className="noticia">
        {/* Troque pela imagem real: <img src={...} alt="" /> */}
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
        <button className="barra__item">
          <List size={22} strokeWidth={1.8} aria-hidden="true" />
          Chamados
        </button>
        <button className="barra__fab" aria-label="Novo chamado">
          <Plus size={24} strokeWidth={2.4} />
        </button>
        <button className="barra__item">
          <User size={22} strokeWidth={1.8} aria-hidden="true" />
          Perfil
        </button>
      </nav>
    </main>
  );
}
