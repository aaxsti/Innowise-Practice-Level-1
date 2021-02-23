import React, {useState} from "react";
import style from "./DailyTasks.module.css";
import DailyTask from "./DailyTask/DailyTask";


const DailyTasks = () => {

    return (
        <div className={style.dailyTasksWrapper}>
            <h3>3 Tasks Today</h3>
            <DailyTask/>
            <DailyTask/>
            <DailyTask/>
        </div>
    );
}

export default DailyTasks;