import React, {useState} from 'react';
import {Button, Checkbox, List, ListItem, ListItemAvatar, ListItemIcon, ListItemText, Modal} from "@material-ui/core";
import style from "./Todo.module.css";
import db from './../../firebase'
import EditIcon from '@material-ui/icons/Edit';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import app from "./../../firebase";

const Todo = (props) => {
    const [open, setOpen] = useState(false);
    const [checked, setChecked] = useState(0);

    const handleOpen = () => {
        setOpen(true);
    };

    return (
        <div>
            <Modal
                open={open}
                onClose={e => setOpen(false)}
            >
                <div>
                    <h1>Modal window</h1>
                    <button onClick={e => setOpen(false)}>Close</button>
                </div>
            </Modal>

            <div className={style.listBlock}>

                <List dense>
                        <ListItem>
                            <ListItemIcon>
                                <Checkbox
                                    edge="start"

                                    tabIndex={-1}
                                    disableRipple
                                    inputProps={1}
                                />
                            </ListItemIcon>
                            <ListItemText
                                primary={props.todo.todo}
                                secondary={props.todo.description}
                            />
                            <Button onClick={e => setOpen(true)}><EditIcon fontSize="medium"/></Button>
                            <HighlightOffIcon fontSize="medium" onClick={event => {
                                app.firestore().collection('todos').doc(props.todo.id).delete()
                            }}> </HighlightOffIcon>
                        </ListItem>
                </List>

            {/*<List className={style.todoList}>*/}
            {/*    <ListItem alignItems='center'>*/}
            {/*        /!*<ListItemAvatar>*!/*/}
            {/*        /!*</ListItemAvatar>*!/*/}
            {/*        <ListItemText primary={props.todo.todo} secondary={props.todo.description}/>*/}

            {/*        <Button onClick={e => setOpen(true)}><EditIcon fontSize="medium"/></Button>*/}

            {/*        <HighlightOffIcon fontSize="medium" onClick={event => {*/}
            {/*            app.firestore().collection('todos').doc(props.todo.id).delete()*/}
            {/*        }}> </HighlightOffIcon>*/}
            {/*    </ListItem>*/}
            {/*</List>*/}
            </div>
        </div>
    );
}

export default Todo;