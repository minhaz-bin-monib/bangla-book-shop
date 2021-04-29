import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';
import { Button } from 'react-bootstrap';
import "./Login.css"



const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }


    var provider = new firebase.auth.GoogleAuthProvider();
    const handleSignIn = () => {
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                var user = result.user;
                setLoggedInUser(user)
                history.replace(from)
            }).catch((error) => {
                var errorMessage = error.message;
            });
    }


    return (
        <div>

            <h2 className="heading-control"><strong>Sign in for further process:</strong></h2>
            <Button className="button-control" onClick={handleSignIn} variant="success" size="lg" active>
                Sign in with Google
            </Button>

        </div>
    );
};

export default Login;