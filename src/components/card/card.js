import React from 'react';
import { Container, Inner, Pane, Title, SubTitle, Image } from './styles/Card';

export function Card({ children, direction = 'row', ...restProps }) {
  return (
    <Container {...restProps}>
      <Inner direction={direction}>{children}</Inner>
    </Container>
  );
}

Card.Pane = function CardPane({ children, ...restProps }) {
  return <Pane {...restProps}>{children}</Pane>;
};

Card.Title = function CardTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Card.SubTitle = function CardSubTitle({ children, ...restProps }) {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};

Card.Image = function CardImage({ ...restProps }) {
  return <Image {...restProps} />;
};
