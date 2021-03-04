import {useEffect, useState} from "react";
import app from "./firebase";

export const useAuth = (history) => {
    console.log(history)
    const [isLoading, setIsLoading] = useState(true);
    const [user, setUser] = useState(null);

    useEffect(() => {
        app.auth().onAuthStateChanged(function (user) {
            if (user) {
                setUser(app.auth().currentUser);
                console.log(user.uid)
            } else {
                history.push('/login');
            }
            setIsLoading(false)
        });
    })

    return {isLoading, user};
}