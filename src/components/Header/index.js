import React, { Component } from 'react';

import { MdAccountCircle } from 'react-icons/md'
import { Container } from './styles';

import logo from '../../assets/facebook.png';

export default class Header extends Component {
  render() {
    return  (
    <Container>
      <img src={logo} alt="Facebook logo" />

      <div>
        <strong>Meu perfil</strong>
        <MdAccountCircle size={36} color="#FFFFFF" />
      </div>
    </Container>
    )
  }
}
