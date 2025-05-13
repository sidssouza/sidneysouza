import React from 'react';
import './App.css';
import ProjectItem from './components/ProjectItem';
import projectsData from './data/projects';

function App() {
  return (
    <div className="App">
      <main className="intro">
        <header className="header">
          <img className="logotipo top-down-intro" src="/img/logo-example.svg" alt="logotipo" />
          <p className='top-down-intro'>Sidney Souza</p>
        </header>

        <h1 className='top-down-intro'>UX & UI, product e design de interfaces para boas ideias.</h1>
        <div className="approach down-top-intro">
          <p>Colaboro com e para negócios se destacarem através do design centrado em pessoas e visando desenvolver soluções criativas e inovadoras.</p>
          <p>A partir de pontes entre design e tecnologia, do produtos ou serviço a storytellings que se conectam gerando resultados.</p>
        </div>

        <section>
          <a className="lets_talk down-top-intro" target="_blank" href="https://api.whatsapp.com/send?phone=5548996385263" rel="noopener noreferrer">
            Vamos Conversar?<img src="/img/vector-white.svg" alt="um ícone de seta" />
          </a>

          <SocialMedia />
        </section>
      </main>

      <section className="projects-section">
        <div className='title-project'>
          <h2>Alguns projetos</h2>
        </div>
        
        {projectsData.map(project => (
          <ProjectItem key={project.id} project={project} />
        ))}
      </section>

      <footer className="lets_talk_footer">
        <a className="lets_talk_footer" target="_blank" href="https://api.whatsapp.com/send?phone=5548996385263" rel="noopener noreferrer">
          Vamos Conversar?<img src="/img/vector-white.svg" alt="um ícone de seta" />
        </a>
        
        <SocialMedia variant="footer" />
      </footer>
    </div>
  );
}

const SocialMedia = ({ variant = 'default' }) => (
  <nav className={`down-top-intro social_media${variant === 'footer' ? '_footer' : ''}`}>
    <a target="_blank" href="https://api.whatsapp.com/send?phone=5548996385263" rel="noopener noreferrer">
      <img src="/img/whatsapp_white.svg" alt="WhatsApp" />
    </a>
    <a target="_blank" href="https://github.com/sidssouza" rel="noopener noreferrer">
      <img src="/img/github-white.svg" alt="Github" />
    </a>
    <a target="_blank" href="https://www.behance.net/sidssouza" rel="noopener noreferrer">
      <img src="/img/behance-white.svg" alt="Behance" />
    </a>
    <a target="_blank" href="https://www.linkedin.com/in/sidneyssouza/" rel="noopener noreferrer">
      <img src="/img/linkedin_white.svg" alt="Linkedin" />
    </a>
  </nav>
);

export default App;