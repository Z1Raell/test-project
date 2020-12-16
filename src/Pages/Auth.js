import React, { useEffect, useState } from 'react';
import firebase from 'firebase'

const Auth = () => {
    const [auth, setAuth] = useState({
        email: '',
        password: '',
        hesAcaunt: false,
    });
    useEffect(() => {
        //const db = firebase.database();
        console.log(auth);
    });

    const handleCheng = ({ target: { value, id } }) => {
        setAuth(prev => ({
            ...prev, ...{
                [id]: value
            }
        }))
    }
    const createAcaunt = () => {
        const { email, password } = auth
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .catch(erorr => console.log(erorr));
    }
    const sigInAcaunt = () => {
        const { email, password } = auth
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(setAuth({ hesAcaunt: true }))
            .catch(erorr => console.log(erorr))
    }
    const { hesAcaunt } = auth
    if (hesAcaunt) {
        return (
            <div>Congrotulations your log in</div>
        )
    } else {
        return (
            <div>
                <div className="auth-blog">
                    <input type="text"
                        placeholder="email"
                        id="email"
                        onChange={handleCheng}
                    />
                    <input type="password"
                        placeholder="password"
                        id="password"
                        onChange={handleCheng}
                    />
                    <input type="button" onClick={sigInAcaunt} value="Sign In" />
                    <input type="button" onClick={createAcaunt} value="Sign up" />
                </div>
            </div>
        );
    }

}

export default Auth;
