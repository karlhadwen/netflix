import React from 'react';
import { Container, Group, Item, Cta } from './styles/Card';

export function Card({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Card.Group = function CardGroup({ children, ...restProps }) {
  return <Group {...restProps}>{children}</Group>;
};

Card.Item = function CardItem({ children, ...restProps }) {
  return <Item {...restProps}>{children}</Item>;
};

Card.Cta = function CardCta({ backgroundSrc, children, ...restProps }) {
  return (
    <Cta backgroundSrc={backgroundSrc} {...restProps}>
      {children}
    </Cta>
  );
};

// loading state on cards (placeholder)
// trigger dropdown panel
