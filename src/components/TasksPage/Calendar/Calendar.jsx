import React from "react";
import style from "./Calendar.module.css";
import Carousel from "react-elastic-carousel";
import CalendarItem from "./CalendarItem";

const Calendar = (props) => {
    const breakPoints = [
        {width: 1, itemsToShow: 1},
        {width: 200, itemsToShow: 3},
        {width: 500, itemsToShow: 4},
        {width: 800, itemsToShow: 5},
    ]

    return (
        <div className={style.calendarWrapper}>
            <Carousel
                breakPoints={breakPoints}
                showArrows={false}
                pagination={false}
                itemsToScroll={3}
            >
                <CalendarItem number="1"/>
                <CalendarItem number="2"/>
                <CalendarItem number="3"/>
                <CalendarItem number="4"/>
                <CalendarItem number="5"/>
                <CalendarItem number="6"/>
                <CalendarItem number="7"/>
                <CalendarItem number="8"/>
                <CalendarItem number="9"/>
                <CalendarItem number="10"/>
            </Carousel>
        </div>
    );
}

export default Calendar;