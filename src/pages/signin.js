import React, { useState } from 'react';
import { firebase } from '../firebase';
import { Header, Feature, Footer } from '../components';
import logo from '../logo.svg';

export function Signin() {
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const isInvalid = password === '' || emailAddress === '';

  const handleSignin = (event) => {
    event.preventDefault();

    firebase
      .auth()
      .signInWithEmailAndPassword(emailAddress, password)
      .then((authUser) => console.log('authUser', authUser))
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
