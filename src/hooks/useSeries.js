import { useEffect, useState, useContext } from 'react';
import { FirebaseContext } from '../context';

export const useSeries = () => {
  const [series, setSeries] = useState([]);
  const { firebase } = useContext(FirebaseContext);

  useEffect(() => {
    firebase
      .firestore()
      .collection('series')
      .get()
      .then((snapshot) => {
        const allSeries = snapshot.docs.map((seriesObj) => ({
          ...seriesObj.data(),
          docId: seriesObj.id,
        }));

        setSeries(allSeries);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  return { series };
};
