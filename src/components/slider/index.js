import React from 'react';
import { Container, Title } from './styles/Slider';

export function Slider({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Slider.Title = function SliderTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

// loading state on Sliders (placeholder)
// trigger dropdown panel
