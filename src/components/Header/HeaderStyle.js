import styled from "styled-components";

export const HeaderContent = styled.div`
color: black;
margin-right: 60em;
margin-top: -20em;

`;

export const Img = styled.img`
  display: flex;
  margin-top: -2rem;
  height: 5rem;
  width: 8rem;
  transition: transform 0.3s ease; // Adiciona transição suave
  &:hover {
    transform: rotate(360deg); // Gira o logo ao passar o mouse
  }
  
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: center; // Centraliza o nav
`;

export const Ul = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  list-style: none; // Remove os marcadores padrão de lista
  padding: 0; // Remove o padding padrão
`;

export const Li = styled.li`
  margin: 0 10px; // Adiciona um espaço entre os itens
  // Adicione aqui mais estilos para os itens da lista, se necessário
`;

export const LinkNav = styled.a`
  color: black;
  transition: color 0.3s ease;
  &:hover {
    color: #FFD100; // Muda a cor ao passar o mouse
  }
`;

//C:\Users\Eric\OneDrive\Área de Trabalho\Projetos\AAAAAAAAAAAAPORTFÓLIO\eric-reis-portfolio\src\components\Header\HeaderStyle.js
