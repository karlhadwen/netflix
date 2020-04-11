import React, { useContext, createContext } from 'react';
import { Container, Frame, Link, Logo } from './styles/Header';

export const LinkContext = createContext();

export function Header({ to, children, ...restProps }) {
  return (
    <LinkContext.Provider value={{ to }}>
      <Frame {...restProps}>{children}</Frame>
    </LinkContext.Provider>
  );
}

Header.Frame = function HeaderFrame({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
};

Header.Logo = function HeaderLogo({ ...restProps }) {
  return <Logo {...restProps} />;
};

Header.Link = function HeaderButton({ children, ...restProps }) {
  const { to } = useContext(LinkContext);

  return (
    <Link to={to} {...restProps}>
      {children}
    </Link>
  );
};
