import React from 'react';
import { Container, Inner, Pane, Title, SubTitle, Image } from './styles/jumbotron';

export default function Jumbotron({ children, direction = 'row', ...restProps }) {
  return (
    <Container {...restProps}>
      <Inner direction={direction}>{children}</Inner>
    </Container>
  );
}

Jumbotron.Pane = function JumbotronPane({ children, ...restProps }) {
  return <Pane {...restProps}>{children}</Pane>;
};

Jumbotron.Title = function JumbotronTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Jumbotron.SubTitle = function JumbotronSubTitle({ children, ...restProps }) {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};

Jumbotron.Image = function JumbotronImage({ ...restProps }) {
  return <Image {...restProps} />;
};
