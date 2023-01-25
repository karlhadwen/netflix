import { useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged } from "firebase/auth";

export default function useAuthListener(){

    const [user, setUser] = useState(
        JSON.parse(localStorage.getItem('authUser'))
    )
    const auth = getAuth();

    useEffect(() =>{

        onAuthStateChanged(auth, (user) => {
            if (user) {
                localStorage.setItem('authUser', JSON.stringify(user));
                setUser(user);
            } else {
                localStorage.removeItem('authUser');
                setUser(null);
            }
        })    
            
    })

    return {user}
}