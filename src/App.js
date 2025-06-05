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
          <p>Designer e Dev que colabora com e para negócios se destacarem através do design centrado em pessoas e visando desenvolver soluções criativas e inovadoras.</p>
          <p>A partir de pontes entre design e tecnologia, do produtos ou serviço a storytellings que se conectam gerando resultados.</p>
        </div>

        <div className='buttons-intro-page'>
           <a className='down-top-section blog-button' target="_blank" href="https://dev.to/sidssouza" rel="noopener noreferrer">
            <img src="/img/blog-icon.png" alt="logotipo" />
            Leia meu blog
          </a>

          <a className="down-top-section lets_talk" target="_blank" href="https://api.whatsapp.com/send?phone=5548996385263" rel="noopener noreferrer">
            Vamos Conversar?<img src="/img/vector-white.svg" alt="um ícone de seta" />
          </a>
        </div>

        <img className="hand-sid-heading top-down-intro" src="/img/hand-sid.svg" alt="logotipo" />
      </main>

      <section className="clients-section down-top-section">
        <div>
          <h3>Uma jornada colaborativa com marcas influentes e inspiradoras.</h3>
        </div>
        <div className='marqueeInfinityLooping'>
          <div className='marqueeGroup'>
            <ul className='marqueeList'>
              <li><img className='invert' src="/img/logos/logo-1.svg" alt="logotipo" /></li>
              <li><img className='invert' src="/img/logos/logo-2.svg" alt="logotipo" /></li>
              <li><img className='invert' src="/img/logos/logo-3.svg" alt="logotipo" /></li>
              <li><img className='invert' src="/img/logos/logo-4.svg" alt="logotipo" /></li>
              <li><img className='invert' src="/img/logos/logo-5.svg" alt="logotipo" /></li>
              <li><img className='invert' src="/img/logos/logo-6.svg" alt="logotipo" /></li>
              <li><img className='invert' src="/img/logos/logo-7.svg" alt="logotipo" /></li>
              <li><img className='invert' src="/img/logos/logo-8.svg" alt="logotipo" /></li>
              <li><img className='invert' src="/img/logos/logo-9.svg" alt="logotipo" /></li>
              <li><img className='invert' src="/img/logos/logo-10.svg" alt="logotipo" /></li>
              <li><img className='invert' src="/img/logos/logo-11.svg" alt="logotipo" /></li>
              <li><img className='invert' src="/img/logos/logo-12.svg" alt="logotipo" /></li>
              <li><img className='invert' src="/img/logos/logo-13.svg" alt="logotipo" /></li>
              <li><img className='invert' src="/img/logos/logo-14.svg" alt="logotipo" /></li>
              <li><img className='invert' src="/img/logos/logo-15.svg" alt="logotipo" /></li>
            </ul>
            <ul aria-hidden='true' className='marqueeList'>
              <li><img className='invert' src="/img/logos/logo-1.svg" alt="logotipo" /></li>
              <li><img className='invert' src="/img/logos/logo-2.svg" alt="logotipo" /></li>
              <li><img className='invert' src="/img/logos/logo-3.svg" alt="logotipo" /></li>
              <li><img className='invert' src="/img/logos/logo-4.svg" alt="logotipo" /></li>
              <li><img className='invert' src="/img/logos/logo-5.svg" alt="logotipo" /></li>
              <li><img className='invert' src="/img/logos/logo-6.svg" alt="logotipo" /></li>
              <li><img className='invert' src="/img/logos/logo-7.svg" alt="logotipo" /></li>
              <li><img className='invert' src="/img/logos/logo-8.svg" alt="logotipo" /></li>
              <li><img className='invert' src="/img/logos/logo-9.svg" alt="logotipo" /></li>
              <li><img className='invert' src="/img/logos/logo-10.svg" alt="logotipo" /></li>
              <li><img className='invert' src="/img/logos/logo-11.svg" alt="logotipo" /></li>
              <li><img className='invert' src="/img/logos/logo-12.svg" alt="logotipo" /></li>
              <li><img className='invert' src="/img/logos/logo-13.svg" alt="logotipo" /></li>
              <li><img className='invert' src="/img/logos/logo-14.svg" alt="logotipo" /></li>
              <li><img className='invert' src="/img/logos/logo-15.svg" alt="logotipo" /></li>
            </ul>
          </div>
        </div>
      </section>

      <section className="projects-section down-top-section">
        <div className='title-project'>
          <h2>Alguns projetos</h2>
        </div>

        {projectsData.map(project => (
          <ProjectItem key={project.id} project={project} />
        ))}
      </section>

      <footer className="lets_talk_footer down-top-section">
        <a className="lets_talk_footer" target="_blank" href="https://api.whatsapp.com/send?phone=5548996385263" rel="noopener noreferrer">
          Vamos Conversar?<img src="/img/vector-white.svg" alt="um ícone de seta" />
        </a>

        <SocialMedia variant="footer" />
      </footer>
    </div>
  );
}

const SocialMedia = ({ variant = 'default' }) => (
  <nav className={`social_media${variant === 'footer' ? '_footer' : ''}`}>
    <a target="_blank" href="https://api.whatsapp.com/send?phone=5548996385263" rel="noopener noreferrer">
      <img src="/img/whatsapp_white.svg" alt="WhatsApp" />
    </a>
    <a target="_blank" href="https://github.com/sidssouza" rel="noopener noreferrer">
      <img src="/img/github-white.svg" alt="Github" />
    </a>
    <a target="_blank" href="https://dribbble.com/sidssouza" rel="noopener noreferrer">
      <img src="/img/dribbble-logo.svg" alt="Dribbble" />
    </a>
    <a target="_blank" href="https://www.linkedin.com/in/sidneyssouza/" rel="noopener noreferrer">
      <img src="/img/linkedin_white.svg" alt="Linkedin" />
    </a>
  </nav>
);

export default App;