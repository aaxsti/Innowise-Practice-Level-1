import React, {useState, useEffect} from "react";
import style from "./SignUp.module.css";
import app, {users} from "../../firebase";
import 'firebase/auth'
import 'firebase/database'
import 'firebase/storage'
import 'firebase/messaging'
import {NavLink, withRouter} from "react-router-dom";

const SignUp = ({history}) => {
    const [formInfo, setFormInfo] = useState({});
    const [error, setError] = useState('');

    // const db = app.firestore();

    useEffect(() => {

    }, [])

    const handleSignUp = () => {
        const db = app.firestore();
        const {email, password} = formInfo;
        app.auth().createUserWithEmailAndPassword(email, password)
            .then(user => {
                db.collection('users').doc(user.user.uid).set({
                    email: email
                });
                db.collection('todos').doc(user.user.uid).set({
                    todos: []
                });
                console.log(user);
                history.push('/tasks');
            })
            .catch(error => setError(error));
    }

    return (
        <div className={style.registerPageWrapper}>
            <form className={style.registerForm}>
                <h3>Sign up</h3>
                <hr/>
                <div>
                    <input type="email" name="email" id="email" placeholder="Email" autoComplete="off"
                           required onChange={e => setFormInfo({...formInfo, email: e.currentTarget.value})}/>
                </div>
                <div>
                    <input type="password" name="password" id="password" placeholder="Password" autoComplete="off"
                           required onChange={e => setFormInfo({...formInfo, password: e.currentTarget.value})}/>
                </div>
                <button type="button" onClick={handleSignUp}>Sign up</button>
                <NavLink to='/login'>
                    <label>Login</label>
                </NavLink>
                <div>
                    {error}
                </div>
            </form>
        </div>
    );
}

export default withRouter(SignUp);