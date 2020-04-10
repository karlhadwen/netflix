import React from 'react';
import { Container, Button, Image } from './styles/Header';

export function Header({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Header.Image = function HeaderImage({ ...restProps }) {
  return <Image {...restProps} />;
};

Header.Button = function HeaderButton({ children, ...restProps }) {
  return <Button {...restProps}>{children}</Button>;
};
