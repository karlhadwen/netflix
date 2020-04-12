import React from 'react';
import { Feature, OptForm, Card } from '../components';
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

      <Card>
        <Card.Pane>
          <Card.Title>Enjoy on your TV.</Card.Title>
          <Card.SubTitle>
            Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.
          </Card.SubTitle>
        </Card.Pane>
        <Card.Pane>
          <Card.Image src="/images/misc/home-tv.jpg" alt="Tiger King on Netflix" />
        </Card.Pane>
      </Card>

      <Card direction="row-reverse">
        <Card.Pane>
          <Card.Title>Download your programmes to watch on the go.</Card.Title>
          <Card.SubTitle>Save your data and watch all your favourites offline.</Card.SubTitle>
        </Card.Pane>
        <Card.Pane>
          <Card.Image src="/images/misc/home-mobile.jpg" alt="Tiger King on Netflix" />
        </Card.Pane>
      </Card>

      <Card>
        <Card.Pane>
          <Card.Title>Watch everywhere.</Card.Title>
          <Card.SubTitle>
            Stream unlimited films and TV programmes on your phone, tablet, laptop and TV without paying more.
          </Card.SubTitle>
        </Card.Pane>
        <Card.Pane>
          <Card.Image src="/images/misc/home-imac.jpg" alt="Money Heist on Netflix" />
        </Card.Pane>
      </Card>

      <FaqsContainer />
      <FooterContainer />
    </>
  );
}
