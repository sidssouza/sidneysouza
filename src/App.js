import React from 'react';
import './App.css'; // Você precisará criar este arquivo para os estilos

function App() {
  return (
    <div className="App">
      <main className="intro">
        <header className="header">
          <img className="logotipo" src="/img/logo-example.svg" alt="logotipo" />
          <p>Sidney Souza</p>
        </header>

        <h1>UX & UI, product e design de interfaces para boas ideias.</h1>
        <div className="approach">
          <p>Colaboro com e para negócios se destacarem através do design centrado em pessoas e visando desenvolver soluções criativas e inovadoras.</p>

          <p>A partir de pontes entre design e tecnologia, do produtos ou serviço a storytellings que se conectam gerando resultados.</p>
        </div>

        <section>
          <a className="lets_talk" target="_blank" href="https://api.whatsapp.com/send?phone=5548996385263" rel="noopener noreferrer" alt="Falar comigo por Whatsapp">
            Vamos Conversar?<img src="/img/vector-white.svg" alt="um ícone de seta" />
          </a>

          <nav className="social_media">
            <a target="_blank" href="https://api.whatsapp.com/send?phone=5548996385263" rel="noopener noreferrer" alt="Fale comigo pelo WhatsApp"><img src="/img/whatsapp_white.svg" alt="WhatsApp" /></a>
            <a target="_blank" href="https://github.com/sidssouza" rel="noopener noreferrer" alt="Veja meu Github"><img src="/img/github-white.svg" alt="Github" /></a>
            <a target="_blank" href="https://www.behance.net/sidssouza" rel="noopener noreferrer" alt="Conheça meu trabalho"><img src="/img/behance-white.svg" alt="Behance" /></a>
            <a target="_blank" href="https://www.linkedin.com/in/sidneyssouza/" rel="noopener noreferrer" alt="Conecte-se com meu Linkedin"><img src="/img/linkedin_white.svg" alt="Linkedin" /></a>
          </nav>
        </section>
      </main>

      <section>
        <div className="projects">
            <img src="/img/01.jpg" alt="Imagem de projetos" />
            <img src="/img/02.jpg" alt="Imagem de projetos" />
            <img src="/img/03.jpg" alt="Imagem de projetos" />
            <img src="/img/04.jpg" alt="Imagem de projetos" />
            <img src="/img/05.jpg" alt="Imagem de projetos" />
            <img src="/img/06.jpg" alt="Imagem de projetos" />
            <img src="/img/07.jpg" alt="Imagem de projetos" />
            <img src="/img/08.jpg" alt="Imagem de projetos" />
        </div>
      </section>

      <footer className="lets_talk_footer">
        <a target="_blank" href="https://api.whatsapp.com/send?phone=5548996385263" rel="noopener noreferrer" alt="Falar comigo por Whatsapp">
          Vamos Conversar?<img src="/img/vector-white.svg" alt="um ícone de seta" />
        </a>

        <nav className="social_media_footer">
          <a target="_blank" href="https://api.whatsapp.com/send?phone=5548996385263" rel="noopener noreferrer" alt="Fale comigo pelo WhatsApp"><img src="/img/whatsapp_white.svg" alt="WhatsApp" /></a>
          <a target="_blank" href="https://github.com/sidssouza" rel="noopener noreferrer" alt="Veja meu Github"><img src="/img/github-white.svg" alt="Github" /></a>
          <a target="_blank" href="https://www.behance.net/sidssouza" rel="noopener noreferrer" alt="Conheça meu trabalho"><img src="/img/behance-white.svg" alt="Behance" /></a>
          <a target="_blank" href="https://www.linkedin.com/in/sidneyssouza/" rel="noopener noreferrer" alt="Conecte-se com meu Linkedin"><img src="/img/linkedin_white.svg" alt="Linkedin" /></a>
        </nav>
      </footer>
    </div>
  );
}

export default App;