import React from "react";
import style from "./TasksPage.module.css";
import Calendar from "./Calendar/Calendar";
import DailyTasks from "./DailyTasks/DailyTasks";

const TasksPage = () => {
    return (
        <div className={style.tasksPageWrapper}>
            <h3>My Tasks</h3>
            <Calendar/>
            <DailyTasks/>
        </div>
    );
}

export default TasksPage;