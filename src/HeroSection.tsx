import React from "react";

interface Props {
  // Define the props for your component here
}

const HeroSection: React.FC<Props> = (props) => {
  // Implement your component logic here

  return (
    <section className="hero is-primary is-bold">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">Bem-vindo ao Exemplo com Bulma</h1>
          <h2 className="subtitle">Um simples modelo para começar</h2>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
