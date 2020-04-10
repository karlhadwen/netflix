import React from 'react';
import { Container } from './styles/Wrapper';

export function Wrapper({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}
