import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/logo.png';
import Button from '../button';
//import ButtonLink from '../components/buttonlink';
import './menu.css';

function Menu() {
  return (
    <nav className="Menu">
      <Link to="/">
        <img className="Logo" src={Logo} alt="AluraFlix"></img>
      </Link>

      <Button as={Link} className="ButtonLink" to="/cadastro/video">
        Novo vídeo
      </Button>

      {/* <ButtonLink className="ButtonLink" href="/">
        Novo vídeo
      </ButtonLink> */}
    </nav>
  );
}

export default Menu;