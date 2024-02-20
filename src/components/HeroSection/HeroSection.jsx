import React from "react";
import {
  HeroSectionContainer,
  HeroTitle,
  HeroSubtitle,
  HeroButton,
} from "./HeroSectionStyle";

const HeroSection = () => {
  return (
    <>
      <HeroSectionContainer>
        <HeroTitle> Desenvolvimento Web Criativo e Inovador</HeroTitle>
        <HeroSubtitle>
          Criando experiências web modernas e responsivas
        </HeroSubtitle>
        <HeroButton href="#projects">Ver Projetos</HeroButton>
      </HeroSectionContainer>
    </>
  );
};

export default HeroSection;


//C:\Users\Eric\OneDrive\Área de Trabalho\Projetos\AAAAAAAAAAAAPORTFÓLIO\eric-reis-portfolio\src\components\HeroSection\HeroSection.jsx