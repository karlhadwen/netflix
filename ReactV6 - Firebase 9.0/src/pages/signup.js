import { useState} from "react";
import { useNavigate } from 'react-router-dom'; // useHistory was replaced by useNavigate
import { FooterContainer } from "../containers/footer";
import { HeaderContainer } from "../containers/header";
import { Form } from "../components";
import { createUserWithEmailAndPassword, updateProfile, getAuth } from "firebase/auth";
import * as ROUTES from '../constants/routes';

export default function Signup(){

    const navigate = useNavigate();
    const auth = getAuth();
    const [firstName, setFirstName] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const isInvalid = firstName === '' || password === '' || emailAddress === '';

    const handleSignup = (event) =>{

        event.preventDefault();

        return(
            
        createUserWithEmailAndPassword(auth, emailAddress, password)
        .then((userCredential) =>{
            const user= userCredential.user;
            updateProfile(user, { 
            displayName: firstName,
            photoURL: Math.floor(Math.random() * 5) + 1,
            }
          )
        }
        )
          .then(() => {
            navigate(ROUTES.BROWSE);
          })
      
        .catch((error) => {
            setFirstName('');
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
                <Form.Title>Sign Up</Form.Title>
                {error && <Form.Error>{error}</Form.Error>}
                <Form.Base onSubmit={handleSignup} method="POST">
                    <Form.Input placeholder="First Name" value={firstName} onChange={({target}) => setFirstName(target.value)} />
                    <Form.Input placeholder="Email Address" value={emailAddress} onChange={({target}) => setEmailAddress(target.value)} />
                    <Form.Input placeholder="Password" value={password} onChange={({target}) => setPassword(target.value)} />
                    <Form.Submit disabled={isInvalid} type="submit">
                        Sign Up
                    </Form.Submit>
                </Form.Base>
                <Form.Text>
                    Already a user? <Form.Link to="/signin">Sign in now</Form.Link>
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