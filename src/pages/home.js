import React from 'react';

import { Card } from '../components';
import { BaseContainer, FaqsContainer } from '../containers';

export function Home() {
  return (
    <BaseContainer>
      <Card>
        <Card.Pane>
          <Card.Title>Enjoy on your TV.</Card.Title>
          <Card.SubTitle>
            Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray
            players and more.
          </Card.SubTitle>
        </Card.Pane>
        <Card.Pane>
          <Card.Image
            src="/images/misc/home-tv.jpg"
            alt="Tiger King on Netflix"
          />
        </Card.Pane>
      </Card>

      <Card direction="row-reverse">
        <Card.Pane>
          <Card.Title>Download your programmes to watch on the go.</Card.Title>
          <Card.SubTitle>
            Save your data and watch all your favourites offline.
          </Card.SubTitle>
        </Card.Pane>
        <Card.Pane>
          <Card.Image
            src="/images/misc/home-mobile.jpg"
            alt="Tiger King on Netflix"
          />
        </Card.Pane>
      </Card>

      <Card>
        <Card.Pane>
          <Card.Title>Watch everywhere.</Card.Title>
          <Card.SubTitle>
            Stream unlimited films and TV programmes on your phone, tablet,
            laptop and TV without paying more.
          </Card.SubTitle>
        </Card.Pane>
        <Card.Pane>
          <Card.Image
            src="/images/misc/home-imac.jpg"
            alt="Money Heist on Netflix"
          />
        </Card.Pane>
      </Card>

      <FaqsContainer />
    </BaseContainer>
  );
}
