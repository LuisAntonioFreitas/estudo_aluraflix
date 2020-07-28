import React from 'react';
import Logo from '../../assets/img/logo.png';
import Button from '../button';
//import ButtonLink from '../components/buttonlink';
import './menu.css';

function Menu() {
  return (
    <nav className="Menu">
      <a href="/">
        <img className="Logo" src={Logo} alt="AluraFlix"></img>
      </a>

      <Button as="a" className="ButtonLink" href="/">
        Novo vídeo
      </Button>

      {/* <ButtonLink className="ButtonLink" href="/">
        Novo vídeo
      </ButtonLink> */}
    </nav>
  );
}

export default Menu;