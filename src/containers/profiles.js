import React from 'react';
import { Header, Profiles } from '../components';
import * as ROUTES from '../constants/routes';
import logo from '../logo.svg';

export default function SelectProfileContainer({ setProfileId }) {
  const users = [
    {
      id: 1,
      picture:
        'https://occ-0-300-299.1.nflxso.net/dnm/api/v6/Z-WHgqd_TeJxSuha8aZ5WpyLcX8/AAAABcajaPMIn6RTpZwlTX_yLKqTPZkVc7owkIoRDi-qM76YH-6SyMzI5Cf87b_JdcOGck3lqEEZITIFXklDFrCpkD44SF78.png?r=f80',
      name: 'Selene',
    },
    {
      id: 2,
      picture:
        'https://occ-0-300-299.1.nflxso.net/dnm/api/v6/Z-WHgqd_TeJxSuha8aZ5WpyLcX8/AAAABfKQX3GD92_it5CxSGbQbLUaes21NHll7a9jASfp89GAzF3wSUKb5WVgTNeTztGYJBsNZXsRaIJJkIaoAhqGW8oNpWzi.png?r=c71',
      name: 'Karl',
    },
    {
      id: 3,
      picture:
        'https://occ-0-300-299.1.nflxso.net/dnm/api/v6/Z-WHgqd_TeJxSuha8aZ5WpyLcX8/AAAABabrP5g3F65zxO5zBS8dnLAPHSRloWynCP9OtjSUevFh2tkXWzV348Y5OpcxDiHHVlAcvjYvxhUZ0cFJMV3y1mU5RzrN.png?r=06d',
      name: 'Steve',
    },
  ];

  return (
    <>
      <Header bg={false}>
        <Header.Frame>
          <Header.Logo to={ROUTES.HOME} src={logo} alt="Netflix" />
        </Header.Frame>
      </Header>

      <Profiles>
        <Profiles.Title>Who's watching?</Profiles.Title>
        <Profiles.List>
          {users.map((userProfile) => (
            <Profiles.User key={userProfile.id} onClick={() => setProfileId(userProfile.id)}>
              <Profiles.Picture src={userProfile.picture} />
              <Profiles.Name>{userProfile.name}</Profiles.Name>
            </Profiles.User>
          ))}
        </Profiles.List>
      </Profiles>
    </>
  );
}
