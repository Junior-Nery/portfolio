import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importando o estilo do Bootstrap
import './App.css'; // Este arquivo pode ser usado para adicionar estilos específicos do aplicativo, se necessário

// Componente funcional para o portfólio
function Portfolio() {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="#welcome-section">
            Início
          </a>
          <a className="navbar-brand" href="#projects">
            Projetos
          </a>
          {/* Adicione mais links de navegação, se necessário */}
        </div>
      </nav>

      {/* Seção de boas-vindas */}
      <section id="welcome-section" className="bg-light text-center py-5">
        <h1 className="display-4">
          <span className="text-uppercase font-weight-bold">
            ANTONIO VICENTE DANTAS JÚNIOR
          </span>
        </h1>
      </section>

      {/* Seção de projetos */}
      <section id="projects" className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="card mb-4 shadow-sm">
                <div className="card-body">
                  <h2 className="card-title">Projeto 1</h2>
                  <p className="card-text">Descrição do Projeto 1</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      {/* Corrigindo o aviso jsx-a11y/anchor-is-valid */}
                      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                      <a href="/" className="btn btn-sm btn-outline-secondary">
                        Ver Projeto
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Adicione mais colunas para outros projetos, se necessário */}
          </div>
        </div>
      </section>

      {/* Rodapé */}
      <footer className="text-center mt-5">
        <p>&copy; 2023 Antonio Vicente Dantas Júnior</p>
        {/* Corrigindo o aviso react/jsx-no-target-blank */}
        <a
          id="profile-link"
          href="https://github.com/jrnery21"
          target="_blank"
          rel="noopener noreferrer"
          className="text-dark"
        >
          GitHub
        </a>
      </footer>
    </div>
  );
}

export default Portfolio;
