import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { FirebaseContext } from '../context';
import { Header, Feature } from '../components';
import * as ROUTES from '../constants/routes';
import logo from '../logo.svg';

export function Signin() {
  const history = useHistory();
  const { firebase } = useContext(FirebaseContext);

  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const isInvalid = password === '' || emailAddress === '';

  const handleSignin = (event) => {
    event.preventDefault();

    firebase
      .auth()
      .signInWithEmailAndPassword(emailAddress, password)
      .then(() => {
        setEmailAddress('');
        setPassword('');
        setError('');
        history.push(ROUTES.BROWSE);
      })
      .catch((error) => setError(error.message));
  };

  return (
    <>
      <Header>
        <Header.Frame>
          <Header.Logo src={logo} alt="Netflix" />
          <Header.Link to="/signin">Sign In</Header.Link>
        </Header.Frame>

        <Feature>
          <form onSubmit={handleSignin} method="POST">
            <div>
              Email address
              <input
                value={emailAddress}
                onChange={({ target }) => setEmailAddress(target.value)}
              />
            </div>
            <div>
              Password
              <input
                type="password"
                value={password}
                autoComplete="off"
                onChange={({ target }) => setPassword(target.value)}
              />
            </div>
            <button disabled={isInvalid} type="submit">
              Login
            </button>

            {error && error}
          </form>
        </Feature>
      </Header>
    </>
  );
}
