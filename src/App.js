import React from 'react';
import { Wrapper, Header, Feature } from './components';
import './App.css';
import logo from './logo.svg';

export function App() {
  return (
    <Wrapper>
      <Header>
        <Header.Image src={logo} alt="Netflix" />
        <Header.Button>Sign In</Header.Button>
      </Header>

      <Feature>
        <Feature.Title>Unlimited films, TV programmes and more.</Feature.Title>
        <Feature.SubTitle>Watch anywhere. Cancel at any time.</Feature.SubTitle>
        <Feature.Form>
          <Feature.Input placeholder="Email address" />
          <Feature.Button>Try it now</Feature.Button>
        </Feature.Form>
        <Feature.Text>
          Ready to watch? Enter your email to create or restart your membership.
        </Feature.Text>
      </Feature>
    </Wrapper>
  );
}
