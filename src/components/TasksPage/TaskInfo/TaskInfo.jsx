import React, {useEffect, useState} from "react";
import style from "./TaskInfo.module.css";
import {Button, FormControl, TextField} from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import {NavLink, useParams, withRouter} from "react-router-dom";
import app from "../../../firebase";
import firebase from 'firebase/app'
import {useAuth} from "../../../useAuth";

const db = app.firestore();

const TasksInfo = ({history, match, ...props}) => {
    const {isLoading, user} = useAuth(history);
    const {id: taskId} = useParams();
    const [input, setInput] = useState('');
    const [textarea, setTextarea] = useState('');


    useEffect(() => {
        if (taskId) {
            db.collection('todos').doc(taskId).get().then(doc => {
                if (doc.exists) {
                    let task = doc.data()
                    setInput(task.todo);
                    setTextarea(task.description);
                }
            })
        }
    }, [])


    const changeTodo = () => {
        db.collection('todos').doc(taskId).update({
            todo: input,
            description: textarea,
        })
    }

    const addTodo = (event) => {
        event.preventDefault();
        console.log(user.uid)

        db.collection('todos').add({
            todo: input,
            description: textarea,
            author: user.uid,
            checked: false,
            createdAt: new Date()
        })

        // const res = db.collection('todos').doc(user.uid).get().then(doc => {
        //     console.log(doc.data())
        //     const newTodo = {
        //         id: new Date().valueOf(),
        //         todo: input,
        //         description: textarea
        //     }
        //
        //     db.collection('todos').doc(user.uid).set({
        //         todos: [...doc.data().todos, newTodo]
        //     });
        //
        // });


        // Local state:
        // setTodos([...todos, input]);
        setInput('');
        setTextarea('');
        // Redirect to tasksPage
        history.push('/tasks');
    }

    return (
        <>
            {isLoading ? null :
                (
                    <div className={style.taskInfoWrapper}>

                        <h3>Today`s Task {user.email + ' ' + user.uid}</h3>
                        <div className={style.taskNameBlock}>
                            props.todo.todoById / New Task
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
                                        inputProps={{
                                            maxLength: 60,
                                        }}
                                        onChange={event => setInput(event.target.value)}
                                    />
                                </div>
                                <div className={style.formElement}>
                                    <TextField
                                        className={style.formElement}
                                        id="filled-multiline-static"
                                        label="Description"
                                        multiline
                                        rows={2}
                                        defaultValue=""
                                        variant="filled"
                                        inputProps={{
                                            maxLength: 70,
                                        }}
                                        value={textarea}
                                        onChange={event => setTextarea(event.target.value)}
                                    />
                                </div>
                                <div className={style.formElement + ' ' + style.addTaskButton}>
                                    <NavLink to={'/tasks'}>
                                        <Button variant="contained"> &nbsp;&nbsp;<ArrowBackIosIcon
                                            fontSize="small"/></Button>
                                    </NavLink>
                                    <Button onClick={taskId ? changeTodo : addTodo} disabled={!input} type="submit" variant="contained">Add a
                                        new
                                        task<AddIcon/>
                                    </Button>
                                </div>
                            </div>
                        </FormControl>
                    </div>
                )
            }

        </>
    );
}

export default withRouter(TasksInfo);