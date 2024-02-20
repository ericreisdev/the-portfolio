import styled from "styled-components";

export const HeroSectionContainer = styled.div`
  
  color: #202020; // Quase preto
  text-align: center;
  padding: 1rem 2rem;
  margin-top: 1em;
  width: 86rem;
  /* background-color: #D6D6D6;  */
`;

export const HeroTitle = styled.h1`
 font-size: 3rem; // Tamanho maior para mais destaque
  margin-bottom: 1rem;
  color: #202020;
  font-weight: bold; // Negrito para o título
`;

export const HeroSubtitle = styled.p`
font-size: 1.8rem; // Ligeiramente maior para melhor legibilidade
  margin-bottom: 2rem;
  color: #333533; // Um tom mais claro para contraste
`;

export const HeroButton = styled.a`
 background-color: #FFEE32;
  color: #202020;
  padding: 12px 35px; // Um pouco maior para destacar
  text-decoration: none;
  font-weight: bold;
  border-radius: 5px;
  transition: background-color 0.3s ease, transform 0.3s ease;
  &:hover {
    background-color: #FFD100;
    transform: scale(1.05); // Efeito de zoom ao passar o mouse
  }
`;


//C:\Users\Eric\OneDrive\Área de Trabalho\Projetos\AAAAAAAAAAAAPORTFÓLIO\eric-reis-portfolio\src\components\HeroSection\HeroSectionStyle.js