import { useEffect, useState } from "react";
import { getFirestore,collection, getDocs } from "firebase/firestore";


export default function useContent(target) {
    
    const[content, setContent] = useState([]);
    const db = getFirestore();
    
    useEffect( () =>{
             
        const fetchData = async () => {
            const querySnapshot = await getDocs(collection(db, target));
            const Content = querySnapshot.docs.map((doc) => ({
                ...doc.data(),
                docId: doc.id

            }))

            setContent(Content);
        }

        fetchData();
        return () => {};
        
    }, [db, target])

    
    return {[target]:content}

}

