import React from 'react';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { Container, Input, Break, Button, Text } from './styles/Form';

export function Form({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Form.Input = function FormInput({ ...restProps }) {
  return <Input {...restProps} />;
};

Form.Button = function FormButton({ children, ...restProps }) {
  return (
    <Button {...restProps}>
      {children} <ChevronRightIcon fontSize="large" />
    </Button>
  );
};

Form.Text = function FormText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

Form.Break = function FormBreak({ ...restProps }) {
  return <Break {...restProps} />;
};
