import React from "react";
import style from "./TaskInfo.module.css";
import {Button, FormControl, Input, InputLabel, TextField} from "@material-ui/core";


const TasksPage = () => {
    return (
        <div className={style.taskInfoWrapper}>
            <h3>Today`s Task</h3>

            <TextField
                id="filled-multiline-static"
                label="Add todo"
                multiline
                rows={4}
                defaultValue=""
                variant="filled"
            />

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

export default TasksPage;