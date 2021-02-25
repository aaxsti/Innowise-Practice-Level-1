import React, {useEffect, useState} from "react";
import style from "./TasksPage.module.css";
import Calendar from "./Calendar/Calendar";
import DailyTasks from "./DailyTasks/DailyTasks";
import {NavLink} from "react-router-dom";
import {Button, FormControl, Input, InputLabel} from "@material-ui/core";
import Todo from "./Todo";
import db from '../../firebase';
import firebase from "firebase";

const TasksPage = () => {
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState('');

    // When the app loads, we need to listen to the database
    // and fetch new todos as they get added/removed
    useEffect(() => {
        // Snapshot listen database changes
        db.collection('todos')
            .orderBy('timestamp', 'desc')
            .onSnapshot(snapshot => {
                // console.log(snapshot.docs.map((doc => doc.data())));
                setTodos(snapshot.docs.map(doc => ({id: doc.id, todo: doc.data().todo})))
            });
    }, []);

    const addTodo = (event) => {
        event.preventDefault();
        db.collection('todos').add({
            todo: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })
        // setTodos([...todos, input]);
        setInput('');
    }

    return (
        <div className={style.tasksPageWrapper}>
            <h3>My Tasks</h3>
            <Calendar/>


            <form>
                <FormControl>
                    <InputLabel>Write a Todo</InputLabel>
                    <Input type='text' value={input} onChange={event => setInput(event.target.value)}/>
                </FormControl>
                <Button disabled={!input} type="submit" onClick={addTodo} variant="contained">Add todo</Button>
            </form>

            {/*<DailyTasks/>*/}

            <ul>
                {todos.map(todo => (
                    <Todo todo={todo}/>
                ))}
            </ul>

            {/*<NavLink to={'/taskInfo'} className={style.addButtonWrapper}>*/}
            {/*    <button className={style.addButton}>Add a New Task</button>*/}
            {/*</NavLink>*/}
        </div>
    );
}

export default TasksPage;