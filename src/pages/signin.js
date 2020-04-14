import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { FirebaseContext } from '../context/firebase';
import { SignInForm } from '../components';
import { HeaderContainer, FooterContainer } from '../containers';
import * as ROUTES from '../constants/routes';

export default function Signin() {
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
      <HeaderContainer>
        <SignInForm>
          <SignInForm.Title>Sign In</SignInForm.Title>
          {error && <SignInForm.Error>{error}</SignInForm.Error>}

          <SignInForm.Base onSubmit={handleSignin} method="POST">
            <SignInForm.Input
              placeholder="Email address"
              value={emailAddress}
              onChange={({ target }) => setEmailAddress(target.value)}
            />
            <SignInForm.Input
              type="password"
              value={password}
              autoComplete="off"
              placeholder="Password"
              onChange={({ target }) => setPassword(target.value)}
            />
            <SignInForm.Submit disabled={isInvalid} type="submit">
              Sign In
            </SignInForm.Submit>
          </SignInForm.Base>

          <SignInForm.Text>
            New to Netflix? <SignInForm.Link>Sign up now.</SignInForm.Link>
          </SignInForm.Text>
          <SignInForm.TextSmall>
            This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.
          </SignInForm.TextSmall>
        </SignInForm>
      </HeaderContainer>
      <FooterContainer />
    </>
  );
}
