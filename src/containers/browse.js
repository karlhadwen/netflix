import React, { useState, useContext } from 'react';
import { Card, Header } from '../components';
import * as ROUTES from '../constants/routes';
import logo from '../logo.svg';
import { FirebaseContext } from '../context/firebase';
import { SelectProfileContainer, FooterContainer } from '.';

export default function BrowseContainer({ slides }) {
  const [selection, setSelection] = useState('series');
  const [profile, setProfile] = useState({});
  const { firebase } = useContext(FirebaseContext);
  const user = firebase.auth().currentUser || {};

  return profile.displayName ? (
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
          <Header.Group>
            <Header.Search />
            <Header.Profile onClick={() => console.log('hellooooooooooooo')}>
              <Header.Picture src={`/images/users/${user.photoURL}.png`} />
              <Header.Dropdown>
                <Header.Group>
                  <Header.Picture src={`/images/users/${user.photoURL}.png`} />
                  <Header.Link>{user.displayName}</Header.Link>
                </Header.Group>
                <Header.Group>
                  <Header.Link onClick={() => firebase.auth().signOut()}>Sign out</Header.Link>
                </Header.Group>
              </Header.Dropdown>
            </Header.Profile>
          </Header.Group>
        </Header.Frame>
      </Header>

      <Card.Group>
        {slides[selection].map((slideItem) => (
          <Card key={`${slideItem.title}-${slideItem.genre}`}>
            <Card.Title>{slideItem.title}</Card.Title>
            <Card.Entities>
              {slideItem.data.map((item) => (
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
  ) : (
    <SelectProfileContainer user={user} setProfile={setProfile} />
  );
}
