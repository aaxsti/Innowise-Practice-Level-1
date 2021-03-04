import React, {useEffect, useState} from "react";
// import style from "./Login.module.css";
import style from "../SignUp/SignUp.module.css";
import app from "../../firebase";
import {NavLink, Redirect, withRouter} from "react-router-dom";
import {toast, ToastContainer} from "react-toastify";

const Login = ({history}) => {
    const [formInfo, setFormInfo] = useState({});
    const [hasAccount, setHasAccount] = useState(false);
    const [error, setError] = useState('');

    const handleLogin = () => {
        const {email, password} = formInfo;
        app.auth().signInWithEmailAndPassword(email, password)
            .then(() => {
                setHasAccount(true);
                history.push('/tasks');
            })
            .catch(error => setError(error));
    };

    useEffect(() => {
        if (error) {
            toast.info(error.message);
        }
    }, [error])

    return (
        <div className={style.registerPageWrapper}>
            <form className={style.registerForm}>
                <h3>Login</h3>
                <hr/>
                <div>
                    <input type="email" name="email" id="email" placeholder="Email" autoComplete="off"
                           required onChange={e => setFormInfo({...formInfo, email: e.currentTarget.value})}/>
                </div>
                <div>
                    <input type="password" name="password" id="password" placeholder="Password" autoComplete="off"
                           required onChange={e => setFormInfo({...formInfo, password: e.currentTarget.value})}/>
                </div>
                <button type="button" onClick={handleLogin}>Login</button>
                <NavLink to='/signup'>
                    <label>Create user</label>
                </NavLink>
            </form>
        </div>
    );
}

export default withRouter(Login);