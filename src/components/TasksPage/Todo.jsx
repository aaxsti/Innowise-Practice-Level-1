import React, {useState} from 'react';
import {Button, List, ListItem, ListItemAvatar, ListItemText, Modal} from "@material-ui/core";
import './Todo.css';
import db from './../../firebase'
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';

const Todo = (props) => {
    const [open, setOpen] = useState(false);

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

            <List className='todo-list'>
                <ListItem>
                    {/*<ListItemAvatar>*/}
                    {/*</ListItemAvatar>*/}
                    <ListItemText primary={props.todo.todo} secondary="Description"/>
                </ListItem>
                <button onClick={e => setOpen(true)}>Edit</button>
                <DeleteOutlineIcon onClick={event => {
                    db.collection('todos').doc(props.todo.id).delete()
                }}> </DeleteOutlineIcon>
            </List>
        </div>
    );
}

export default Todo;