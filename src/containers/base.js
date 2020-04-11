import React from 'react';
import { Header, Feature, Form, Footer } from '../components';
import logo from '../logo.svg';

export function BaseContainer({ children }) {
  return (
    <>
      <Header>
        <Header.Frame>
          <Header.Logo src={logo} alt="Netflix" />
          <Header.Link to="/signin">Sign In</Header.Link>
        </Header.Frame>

        <Feature>
          <Feature.Title>
            Unlimited films, TV programmes and more.
          </Feature.Title>
          <Feature.SubTitle>
            Watch anywhere. Cancel at any time.
          </Feature.SubTitle>
          <Form>
            <Form.Input placeholder="Email address" />
            <Form.Button>Try it now</Form.Button>
            <Form.Break />
            <Form.Text>
              Ready to watch? Enter your email to create or restart your
              membership.
            </Form.Text>
          </Form>
        </Feature>
      </Header>

      {children}

      <Footer>
        <Footer.Title>Questions? Contact us.</Footer.Title>
        <Footer.Break />
        <Footer.Row>
          <Footer.Column>
            <Footer.Link href="#">FAQ</Footer.Link>
            <Footer.Link href="#">Investor Relations</Footer.Link>
            <Footer.Link href="#">Ways to Watch</Footer.Link>
            <Footer.Link href="#">Corporate Information</Footer.Link>
            <Footer.Link href="#">Netflix Originals</Footer.Link>
          </Footer.Column>

          <Footer.Column>
            <Footer.Link href="#">Help Centre</Footer.Link>
            <Footer.Link href="#">Jobs</Footer.Link>
            <Footer.Link href="#">Terms of Use</Footer.Link>
            <Footer.Link href="#">Contact Us</Footer.Link>
          </Footer.Column>

          <Footer.Column>
            <Footer.Link href="#">Account</Footer.Link>
            <Footer.Link href="#">Redeem gift cards</Footer.Link>
            <Footer.Link href="#">Privacy</Footer.Link>
            <Footer.Link href="#">Speed Test</Footer.Link>
          </Footer.Column>

          <Footer.Column>
            <Footer.Link href="#">Media Centre</Footer.Link>
            <Footer.Link href="#">Buy gift cards</Footer.Link>
            <Footer.Link href="#">Cookie Preferences</Footer.Link>
            <Footer.Link href="#">Legal Notices</Footer.Link>
          </Footer.Column>
        </Footer.Row>
        <Footer.Break />
        <Footer.Text>Netflix United Kingdom</Footer.Text>
      </Footer>
    </>
  );
}
