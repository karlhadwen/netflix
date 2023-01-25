import { useState } from "react";
import { useNavigate } from 'react-router-dom'; // useHistory was replaced by useNavigate
import { FooterContainer } from "../containers/footer";
import { HeaderContainer } from "../containers/header";
import { Form } from "../components";
import { getAuth, signInWithEmailAndPassword} from 'firebase/auth';
import * as ROUTES from '../constants/routes';

export default function Signin(){

    const navigate = useNavigate();
    const auth = getAuth();
    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword]= useState('');
    const [error, setError] = useState('');

    const isInvalid = password === '' || emailAddress === '';

    const handleSignin = (event) => {
        event.preventDefault();
        
        return (
            
          signInWithEmailAndPassword(auth, emailAddress, password)
          .then(() => {
          navigate(ROUTES.BROWSE);
          })
          .catch((error) => {
            setEmailAddress('');
            setPassword('');
            setError(error.message);
          })    
        )    
    }
    
    return(
        <>
            <HeaderContainer>
                <Form>
                    <Form.Title>Sign In</Form.Title>
                    {error && <Form.Error>{error}</Form.Error>}

                    <Form.Base onSubmit={handleSignin} method="POST">
                        <Form.Input 
                        placeholder="Email Adress" 
                        value={emailAddress} 
                        onChange={({ target }) => setEmailAddress(target.value)}
                        />
                        <Form.Input 
                        type="password"
                        autoComplete="off"
                        placeholder="Password" 
                        value={password} 
                        onChange={({ target }) => setPassword(target.value)}
                        />
                        <Form.Submit disabled={isInvalid} type="submit">
                            Sign In
                        </Form.Submit>
                    </Form.Base>
                    <Form.Text>
                        New To Netflix? <Form.Link to="/signup">Sign Up now.</Form.Link>
                    </Form.Text>
                    <Form.TextSmall>
                        This page is protected by Google reCAPTCHA to ensure you're not a bot.
                        Learn more.
                    </Form.TextSmall>
                </Form>
            </HeaderContainer>
            <FooterContainer />
        </>
    )
}