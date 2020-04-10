import React from 'react';
import { Container, Frame, Button, Logo } from './styles/Header';

export function Header({ children, ...restProps }) {
  return <Frame {...restProps}>{children}</Frame>;
}

Header.Frame = function HeaderFrame({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
};

Header.Logo = function HeaderLogo({ ...restProps }) {
  return <Logo {...restProps} />;
};

Header.Button = function HeaderButton({ children, ...restProps }) {
  return <Button {...restProps}>{children}</Button>;
};
