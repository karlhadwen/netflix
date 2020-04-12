import React, { useContext } from 'react';
import { FirebaseContext } from '../context';

export function Browse() {
  const { firebase } = useContext(FirebaseContext);

  return (
    <p>
      Browse...
      <button type="button" onClick={() => firebase.auth().signOut()}>
        Sign Out
      </button>
    </p>
  );
}
