import React from 'react';
import { Feature, OptForm, Jumbotron } from '../components';
import { HeaderContainer, FaqsContainer, FooterContainer } from '../containers';

export function Home() {
  return (
    <>
      <HeaderContainer>
        <Feature>
          <Feature.Title>Unlimited films, TV programmes and more.</Feature.Title>
          <Feature.SubTitle>Watch anywhere. Cancel at any time.</Feature.SubTitle>
          <OptForm>
            <OptForm.Input placeholder="Email address" />
            <OptForm.Button>Try it now</OptForm.Button>
            <OptForm.Break />
            <OptForm.Text>Ready to watch? Enter your email to create or restart your membership.</OptForm.Text>
          </OptForm>
        </Feature>
      </HeaderContainer>

      <Jumbotron>
        <Jumbotron.Pane>
          <Jumbotron.Title>Enjoy on your TV.</Jumbotron.Title>
          <Jumbotron.SubTitle>
            Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.
          </Jumbotron.SubTitle>
        </Jumbotron.Pane>
        <Jumbotron.Pane>
          <Jumbotron.Image src="/images/misc/home-tv.jpg" alt="Tiger King on Netflix" />
        </Jumbotron.Pane>
      </Jumbotron>

      <Jumbotron direction="row-reverse">
        <Jumbotron.Pane>
          <Jumbotron.Title>Download your programmes to watch on the go.</Jumbotron.Title>
          <Jumbotron.SubTitle>Save your data and watch all your favourites offline.</Jumbotron.SubTitle>
        </Jumbotron.Pane>
        <Jumbotron.Pane>
          <Jumbotron.Image src="/images/misc/home-mobile.jpg" alt="Tiger King on Netflix" />
        </Jumbotron.Pane>
      </Jumbotron>

      <Jumbotron>
        <Jumbotron.Pane>
          <Jumbotron.Title>Watch everywhere.</Jumbotron.Title>
          <Jumbotron.SubTitle>
            Stream unlimited films and TV programmes on your phone, tablet, laptop and TV without paying more.
          </Jumbotron.SubTitle>
        </Jumbotron.Pane>
        <Jumbotron.Pane>
          <Jumbotron.Image src="/images/misc/home-imac.jpg" alt="Money Heist on Netflix" />
        </Jumbotron.Pane>
      </Jumbotron>

      <FaqsContainer />
      <FooterContainer />
    </>
  );
}
