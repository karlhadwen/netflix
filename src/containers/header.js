import React from 'react';
import { Header } from '../components';
import * as ROUTES from '../constants/routes';
import logo from '../logo.svg';

export function HeaderContainer({ children }) {
  return (
    <Header>
      <Header.Frame>
        <Header.Logo to={ROUTES.HOME} src={logo} alt="Netflix" />
        <Header.Link to={ROUTES.SIGN_IN}>Sign In</Header.Link>
      </Header.Frame>
      {children}
    </Header>
  );
}
