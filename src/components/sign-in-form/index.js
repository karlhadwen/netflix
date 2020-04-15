import React from 'react';
import { Container, Error, Base, Title, Text, TextSmall, Link, Input, Submit } from './styles/sign-in-form';

export default function SignInForm({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

SignInForm.Error = function SignInFormError({ children, ...restProps }) {
  return <Error {...restProps}>{children}</Error>;
};

SignInForm.Base = function SignInFormBase({ children, ...restProps }) {
  return <Base {...restProps}>{children}</Base>;
};

SignInForm.Title = function SignInFormTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

SignInForm.Text = function SignInFormText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

SignInForm.TextSmall = function SignInFormTextSmall({ children, ...restProps }) {
  return <TextSmall {...restProps}>{children}</TextSmall>;
};

SignInForm.Link = function SignInFormLink({ children, ...restProps }) {
  return <Link {...restProps}>{children}</Link>;
};

SignInForm.Input = function SignInFormInput({ children, ...restProps }) {
  return <Input {...restProps}>{children}</Input>;
};

SignInForm.Submit = function SignInFormSubmit({ children, ...restProps }) {
  return <Submit {...restProps}>{children}</Submit>;
};
