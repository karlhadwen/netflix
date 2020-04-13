import React from 'react';
import { Card, Header } from '../components';
import * as ROUTES from '../constants/routes';
import { FooterContainer } from './footer';
import logo from '../logo.svg';

export function BrowseContainer({ selection, setSelection, slides }) {
  return (
    <>
      <Header bg={false}>
        <Header.Frame>
          <Header.Group>
            <Header.Logo to={ROUTES.HOME} src={logo} alt="Netflix" />
            <Header.Link active={selection === 'series' ? 'true' : 'false'} onClick={() => setSelection('series')}>
              Series
            </Header.Link>
            <Header.Link active={selection === 'films' ? 'true' : 'false'} onClick={() => setSelection('films')}>
              Films
            </Header.Link>
          </Header.Group>
        </Header.Frame>
      </Header>

      <Card.Group>
        {slides.map((slideItem) => (
          <Card key={`${slideItem.title}-${slideItem.genre}`}>
            <Card.Title>{slideItem.title}</Card.Title>
            <Card.Entities>
              {slideItem.data?.map((item) => (
                <Card.Item key={item.docId}>
                  <Card.Image src={`/images/${selection}/${item.genre}/${item.slug}/small.jpg`} />
                  <Card.Meta>
                    <Card.SubTitle>{item.title}</Card.SubTitle>
                    <Card.Text>{item.description}</Card.Text>
                  </Card.Meta>
                </Card.Item>
              ))}
            </Card.Entities>
          </Card>
        ))}
      </Card.Group>

      <FooterContainer />
    </>
  );
}
