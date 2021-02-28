import React, {useEffect, useState} from "react";
import style from "./TasksPage.module.css";
import Calendar from "./Calendar/Calendar";
import DailyTasks from "./DailyTasks/DailyTasks";
import {NavLink} from "react-router-dom";
import {Button, FormControl, Input, InputLabel} from "@material-ui/core";
import Todo from "./Todo";
import app from "../../firebase";


const TasksPage = () => {
    const [todos, setTodos] = useState([]);
    const [hasAccount, setHasAccount] = useState(false);

    app.auth().onAuthStateChanged(function (user) {
        if (user) {
            setHasAccount(true);
            console.log('Signed in');
        } else {
            setHasAccount(false);
            console.log('NOT Signed in');
        }
    });


    // When the app loads, we need to listen to the database
    // and fetch new todos as they get added/removed
    useEffect(() => {
        // Snapshot listen database changes
        const db = app.firestore();
        db.collection('todos')
            .orderBy('timestamp', 'desc')
            .onSnapshot(snapshot => {
                // console.log(snapshot.docs.map((doc => doc.data())));
                setTodos(snapshot.docs.map(doc => ({
                    id: doc.id,
                    todo: doc.data().todo,
                    description: doc.data().description
                })))
            });
    }, []);

    return (
        <div className={style.tasksPageWrapper}>
            <h3>My Tasks
                {hasAccount
                    ? <Button
                        variant="outlined"
                        onClick={() => app.auth().signOut()}>
                        Sign out
                    </Button>
                    : <NavLink to='/login'>
                        <Button variant="outlined">
                            Sign in
                        </Button>
                    </NavLink>
                }
            </h3>

            <Calendar/>

            {/*<DailyTasks/>*/}

            <ul>
                {todos.map(todo => (
                    <Todo todo={todo}/>
                ))}
            </ul>

            <NavLink to={'/taskinfo'} className={style.addButtonWrapper}>
                <Button variant="contained">Add task</Button>
            </NavLink>

        </div>
    );
}

export default TasksPage;