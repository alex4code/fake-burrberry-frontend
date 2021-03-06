import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logo from '../images/logo.svg';

const LogoLink = styled(Link)`margin: auto;`;

const Logo = styled.img`
  display: block;
  margin: 0 auto;
  height: 0.75rem;
  @media (min-width: 48rem) {
    height: 1rem;
  }
`;

export default () => (
  <LogoLink to="/">
    <Logo src={logo} alt="logo" />
  </LogoLink>
);
