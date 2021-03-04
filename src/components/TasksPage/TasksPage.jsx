import React, {useEffect, useState} from "react";
import style from "./TasksPage.module.css";
import Calendar from "./Calendar/Calendar";
import DailyTasks from "./DailyTasks/DailyTasks";
import {NavLink, withRouter} from "react-router-dom";
import {Button, FormControl, Input, InputLabel} from "@material-ui/core";
import Todo from "./Todo";
import app from "../../firebase";
import firebase from "firebase";
import {useAuth} from "../../useAuth";

const TasksPage = ({history}) => {
    const {isLoading, user} = useAuth(history);

    // const [hasAccount, setHasAccount] = useState(false);
    const [todos, setTodos] = useState([]);
    const [error, setError] = useState('');

    const signOut = () => {
        app.auth().signOut()
            .then(() => {
                history.push('/login');
            })
            .catch(error => setError(error));
    };

    const handleDelete = (id) => {
        setTodos(todos.filter(todo => id !== todo.id));
    }

    // When the app loads, we need to listen to the database
    // and fetch new todos as they get added/removed
    useEffect(() => {

        console.log(user)
        if (user) {
            const db = app.firestore();
            db.collection('todos').where('author', '==', user.uid)
                .get()
                .then((doc) => {
                    const todos = doc.docs.map(doc => ({id: doc.id, ...doc.data()}));
                    console.log(todos)
                    console.log(doc)
                        setTodos(todos)
                })
                .catch(error => setError(error));
        }

    }, [error, user]);

    return (
        <>
            {isLoading ? null :
                (
                    <div className={style.tasksPageWrapper}>
                        <h3>My Tasks {user.email}
                            {<Button
                                variant="outlined"
                                onClick={signOut}>
                                Sign out
                            </Button>
                            }
                        </h3>

                        <Calendar/>

                        {/*<DailyTasks/>*/}

                        <ul>
                            {todos.map(todo => (
                                <Todo todo={todo} handleDelete={handleDelete}/>
                            ))}
                        </ul>

                        <NavLink to={'/taskinfo'} className={style.addButtonWrapper}>
                            <Button variant="contained">Add task</Button>
                        </NavLink>

                    </div>
                )}

        </>
    );
}

export default withRouter(TasksPage);