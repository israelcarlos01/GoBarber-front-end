import React from 'react';
import { Link } from 'react-router-dom';

import Notifications from '../Notifications';

import logo from '../../assets/logo.svg';
import Israel from '../../assets/Israel.jpg';

import { Container, Content, Profile } from './styles';

function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="GoBarber" />
          <Link to="/dashboard">DASHBOARD</Link>
        </nav>

        <aside>
          <Notifications />

          <Profile>
            <div>
              <strong>Israel Carlos</strong>
              <Link to="/profile">Meu perfil</Link>
            </div>
            <img src={Israel} alt="Eu" />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}

export default Header;
