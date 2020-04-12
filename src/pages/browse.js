import React, { useState } from 'react';
import { BrowseContainer, FooterContainer, SelectProfileContainer } from '../containers';
import * as ROUTES from '../constants/routes';
import logo from '../logo.svg';
import { Header } from '../components';

export function Browse() {
  const [profileId, setProfileId] = useState(null);

  return profileId ? (
    <>
      <Header bg={false}>
        <Header.Frame>
          <Header.Logo to={ROUTES.HOME} src={logo} alt="Netflix" />
        </Header.Frame>
      </Header>
      <BrowseContainer />
      <FooterContainer />
    </>
  ) : (
    <SelectProfileContainer setProfileId={setProfileId} />
  );
}
