import React, {useState, useEffect} from "react";
import style from "./SignUp.module.css";
import app from "../../firebase";
import 'firebase/auth'
import 'firebase/database'
import 'firebase/storage'
import 'firebase/messaging'
import {NavLink, withRouter} from "react-router-dom";

const SignUp = ({history}) => {
    const [formInfo, setFormInfo] = useState({})

    useEffect(() => {
        const db = app.database();
        const name = db.ref('name');
    }, [])

    const handleSignUp = () => {
        const {email, password} = formInfo;
        app.auth().createUserWithEmailAndPassword(email, password)
            .then(response => {
                console.log(response);
            })
            .catch(error => console.log(error));

        history.push('/tasks');

        // firebase.auth().signInWithEmailAndPassword(email, password)
        //     .then(() => {
        //         setHasAccount(true);
        //     })
        //     .catch(error => console.log(error));
    }

    return (
        <div className={style.registerPageWrapper}>
            <form className={style.registerForm} onSubmit={handleSignUp}>
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
            </form>
        </div>
    );
}

export default withRouter(SignUp);