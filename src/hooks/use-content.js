import { useEffect, useState, useContext } from 'react';
import { FirebaseContext } from '../context/firebase';

// with the profile id updating, this is going to get called again and again,
// need to figure out how to stop that
export default function useContent(target) {
  // const [content, setContent] = useState([]);
  // const { firebase } = useContext(FirebaseContext);

  // useEffect(() => {
  //   firebase
  //     .firestore()
  //     .collection(target)
  //     .get()
  //     .then((snapshot) => {
  //       const allContent = snapshot.docs.map((contentObj) => ({
  //         ...contentObj.data(),
  //         docId: contentObj.id,
  //       }));

  //       console.log('allContent', JSON.stringify(allContent));

  //       setContent(allContent);
  //     })
  //     .catch((error) => {
  //       console.log(error.message);
  //     });
  // }, []);

  return { [target]: [] };
  // return { [target]: content };
}
