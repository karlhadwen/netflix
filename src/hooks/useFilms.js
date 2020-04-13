import { useEffect, useState, useContext } from 'react';
import { FirebaseContext } from '../context';

export const useFilms = () => {
  const [films, setFilms] = useState([]);
  const { firebase } = useContext(FirebaseContext);

  useEffect(() => {
    firebase
      .firestore()
      .collection('films')
      .get()
      .then((snapshot) => {
        const allFilms = snapshot.docs.map((filmsObj) => ({
          ...filmsObj.data(),
          docId: filmsObj.id,
        }));

        setFilms(allFilms);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  return { films };
};
