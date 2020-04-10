import React from 'react';
import {
  Container,
  Title,
  SubTitle,
  Text,
  Form,
  Input,
  Button,
} from './styles/Feature';

export function Feature({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Feature.Title = function FeatureTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Feature.SubTitle = function FeatureSubTitle({ children, ...restProps }) {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};

Feature.Text = function FeatureSubTitle({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

Feature.Form = function FeatureForm({ children, ...restProps }) {
  return <Form {...restProps}>{children}</Form>;
};

Feature.Input = function FeatureInput({ ...restProps }) {
  return <Input {...restProps} />;
};

Feature.Button = function FeatureButton({ children, ...restProps }) {
  return <Button {...restProps}>{children}</Button>;
};
