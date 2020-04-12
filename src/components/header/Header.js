import React, { useContext, createContext } from 'react';
import { Link as ReachRouterLink } from 'react-router-dom';
import { Container, Background, Link, Logo } from './styles/Header';

export const LinkContext = createContext();

export function Header({ bg = true, to, children, ...restProps }) {
  return (
    <LinkContext.Provider value={{ to }}>
      {bg ? <Background {...restProps}>{children}</Background> : children}
    </LinkContext.Provider>
  );
}

Header.Frame = function HeaderFrame({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
};

Header.Logo = function HeaderLogo({ to, ...restProps }) {
  return (
    <ReachRouterLink to={to}>
      <Logo {...restProps} />
    </ReachRouterLink>
  );
};

Header.Link = function HeaderButton({ children, ...restProps }) {
  const { to } = useContext(LinkContext);

  return (
    <Link to={to} {...restProps}>
      {children}
    </Link>
  );
};
