import React from 'react';
import style from "./Calendar.module.css";

const CalendarItem = (props) => {
    return (
        <div className={style.calendarItem}>WeekDay <br/>{props.number}</div>
    );
};

export default CalendarItem;