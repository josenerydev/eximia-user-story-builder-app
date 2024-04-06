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
          <h1 className="title">Bem-vindo ao Eximia Story Builder</h1>
          <h2 className="subtitle">
            A ferramenta definitiva para transformar ideias em User Stories concisas e impactantes. Agilize seu planejamento e fomente a colaboração com histórias que orientam o desenvolvimento focado no usuário.
          </h2>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
