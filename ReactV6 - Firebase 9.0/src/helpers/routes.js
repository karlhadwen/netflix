import { Navigate } from "react-router-dom";
import { getAuth } from "firebase/auth";


export function UserRedirect({children, path}){
    
    const auth = getAuth();
    const user = auth.currentUser;

        if(!user){
            return children
        }else{
           return <Navigate to={path}/>
        }

}

export function ProtectedRoute({children, path}){
    
    const auth = getAuth();
    const user = auth.currentUser;
  
        if(user){
            return children
            
        }else{   
           return <Navigate to={path}/>
        }

}