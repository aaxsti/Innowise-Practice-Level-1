import React, {useState, useEffect} from "react";
import style from "./Register.module.css";
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import 'firebase/storage'
import 'firebase/messaging'


const Register = () => {
    const [formInfo, setFormInfo] = useState({})

    useEffect(() => {
        const db = firebase.database();
        const name = db.ref('name');
        name.on('value', elem => {
            console.log(elem.val())
        });
    }, [])

    const handleSubmit = () => {
        const {email, password} = formInfo;
        console.log(email, password)
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(response => {
                console.log(response);
            })
            .catch(error => console.log(error));

        // firebase.auth().signInWithEmailAndPassword(email, password)
        //     .then(() => {
        //         setHasAccount(true);
        //     })
        //     .catch(error => console.log(error));

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
                <button type="button" onClick={handleSubmit}>Sign up</button>
            </form>
        </div>
    );
}

export default Register;