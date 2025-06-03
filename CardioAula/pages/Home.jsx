import React from 'react';
import '../pages/home.css';

function Home() {
  const servicos = [
    {
      icone: '🆘',
      titulo: 'Salvar Vidas',
      descricao: 'Garanta sua saude e de quem você ama.'
    },
    {
      icone: '🆘',
      titulo: 'Salvar Vidas',
      descricao: 'Garanta sua saude e de quem você ama.'
    },
    {
      icone: '🆘',
      titulo: 'Salvar Vidas',
      descricao: 'Garanta sua saude e de quem você ama.'
    },
    {
      icone: '🆘',
      titulo: 'Salvar Vidas',
      descricao: 'Garanta sua saude e de quem você ama.'
    }
  ];

  const depoimentos = [
    {
      nome: 'Ana Carolina',
      texto: 'Consigo salvar meu nenem que estava se engasgando!',
      avatar: '👩'
    },
    {
      nome: 'Carlos Eduardo',
      texto: 'Salvei um idoso na praia.',
      avatar: '👨'
    },
    {
      nome: 'Mariana Silva',
      texto: 'Consigo ajudar meu pai que é cardiaco.',
      avatar: '👩'
    }
  ];

  return (
    <div className="nutricao-container">
      {/* Hero Section */}
      <section className="nutricao-hero">
        <div className="hero-content">
          <h1>Primeiros Socorros</h1>
          <p className="hero-subtitle">Seu futuro começa pela sua atitude</p>
          <button className="cta-button">Comece a aprender</button>
        </div>
      </section>

      {/* Sobre */}
      <section className="sobre-section">
        <div className="sobre-content">
          <h2 className="section-title">Sobre Nossos Métodos</h2>
          <p className="sobre-text">
          Na SOS Emergências, priorizamos ação rápida, conhecimento técnico e calma sob pressão. Nossos métodos são baseados nos protocolos internacionais de atendimento pré-hospitalar, com foco em: <br />

✅ Prevenção de Agravamento – Intervenções imediatas para estabilizar a vítima até a chegada do socorro especializado. <br />

✅ Técnicas Comprovadas – Manobras como RCP, Heimlich e imobilizações realizadas conforme diretrizes da American Heart Association e Cruz Vermelha. <br />

✅ Simplicidade que Salva – Instruções claras e passo a passo para leigos, com linguagem acessível sem perder o rigor técnico. <br />

✅ Preparo Emocional – Treinamos não só as habilidades físicas, mas também o controle do estresse em situações críticas <br />
          </p>
          <div className="destaque-box">
            <p>Mais de <span>1.200</span> vidas salvas com nossos ensinamentos</p>
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section className="servicos-section">
        <h2 className="section-title">Nossos Serviços</h2>
        <div className="servicos-grid">
          {servicos.map((servico, index) => (
            <div key={index} className="servico-card">
              <div className="servico-icone">{servico.icone}</div>
              <h3>{servico.titulo}</h3>
              <p>{servico.descricao}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Depoimentos */}
      <section className="depoimentos-section">
        <h2 className="section-title">Depoimentos</h2>
        <div className="depoimentos-carrossel">
          {depoimentos.map((depoimento, index) => (
            <div key={index} className="depoimento-card">
              <div className="depoimento-avatar">{depoimento.avatar}</div>
              <p className="depoimento-texto">"{depoimento.texto}"</p>
              <p className="depoimento-nome">- {depoimento.nome}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Final */}
      <section className="cta-section">
        <h2>Pronto para espalhar saúde?</h2>
        <p>Faça hoje mesmo sua primeira aula</p>
        <button className="cta-button">Comece Agora</button>
      </section>

      {/* Footer */}
      <footer className="nutricao-footer">
        <div className="footer-content">
          <div className="footer-logo">Primeiros Socorros</div>
          <div className="footer-contato">
            <p>contato@primeirossocorros.com</p>
            <p>(11) 98765-4321</p>
          </div>
          <div className="footer-social">
            <span>📱</span>
            <span>📷</span>
            <span>▶️</span>
          </div>
          <div className="footer-copyright">
            © 2025 Primeiros Socorros. Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;