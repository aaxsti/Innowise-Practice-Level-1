import React, {useEffect, useState} from "react";
import style from "./TaskInfo.module.css";
import {Button, FormControl, TextField} from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';
import firebase from "firebase";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import {NavLink, withRouter} from "react-router-dom";
import app from "../../../firebase";

const TasksInfo = (props) => {
    const [todo, setTodo] = useState([]);
    const [input, setInput] = useState('');
    const [textarea, setTextarea] = useState('');

    useEffect(() => {
        // Getting task by ?id in firebase?
    }, [])

    const addTodo = (event) => {
        const db = app.firestore();
        event.preventDefault();
        db.collection('todos').add({
            todo: input,
            description: textarea,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })
        // setTodos([...todos, input]);
        setInput('');
        setTextarea('');
        // Redirect to tasksPage
        props.history.push('/tasks');
    }

    return (
        <div className={style.taskInfoWrapper}>

            <h3>Today`s Task</h3>
            <div className={style.taskNameBlock}>
                props.todo.todoById
            </div>

            <FormControl>
                <div className={style.formWrapper}>
                    <div className={style.formElement}>
                        <TextField
                            className={style.formElement}
                            id="filled-multiline-flexible"
                            label="Task name"
                            multiline
                            rowsMax={3}
                            variant="filled"
                            value={input}
                            onChange={event => setInput(event.target.value)}
                        />
                    </div>
                    <div className={style.formElement}>
                        <TextField
                            className={style.formElement}
                            id="filled-multiline-static"
                            label="Description"
                            multiline
                            rows={3}
                            defaultValue=""
                            variant="filled"
                            value={textarea}
                            onChange={event => setTextarea(event.target.value)}
                        />
                    </div>
                    <div className={style.formElement + ' ' + style.addTaskButton}>
                        <NavLink to={'/tasks'}>
                            <Button variant="contained"> &nbsp;&nbsp;<ArrowBackIosIcon fontSize="small"/></Button>
                        </NavLink>
                        <Button onClick={addTodo} disabled={!input} type="submit" variant="contained">Add a new
                            task<AddIcon/>
                        </Button>
                    </div>
                </div>
            </FormControl>

            {/*<form>*/}
            {/*    <FormControl>*/}
            {/*        <InputLabel>Write a Todo</InputLabel>*/}
            {/*        <Input type='text' value={input} onChange={event => setInput(event.target.value)}/>*/}
            {/*    </FormControl>*/}
            {/*    <Button disabled={!input} type="submit" onClick={addTodo} variant="contained">Add todo</Button>*/}
            {/*</form>*/}

        </div>
    );
}

export default withRouter(TasksInfo);