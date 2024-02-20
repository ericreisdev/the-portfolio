import React from "react";
import { Img, Nav, Ul, Li, HeaderContent, LinkNav } from "./HeaderStyle";
import Logo from "../../assets/img/logo-png.png";

const Header = () => {
  return (
    <>
      <HeaderContent>
        <Nav>
          <Ul>
            <Li>
              <Img src={Logo} alt="Logo" />
            </Li>
            <Li>
              <LinkNav href="#home">Home</LinkNav>
            </Li>
            <Li>
              <LinkNav href="#projects">Projetos</LinkNav>
            </Li>
            <Li>
              <LinkNav href="#about">Sobre Mim</LinkNav>
            </Li>
            <Li>
              <LinkNav href="#contact">Contato</LinkNav>
            </Li>
          </Ul>
        </Nav>
      </HeaderContent>
    </>
  );
};

export default Header;
//C:\Users\Eric\OneDrive\Área de Trabalho\Projetos\AAAAAAAAAAAAPORTFÓLIO\eric-reis-portfolio\src\components\Header\Header.jsx
