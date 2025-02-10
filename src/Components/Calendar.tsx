import { previousDay, isSameDay, startOfMonth, endOfMonth, startOfWeek, endOfWeek, eachDayOfInterval, format, addDays, subDays } from "date-fns";
import { useEffect, useState } from "react";
import Button from "./Button";
import { FlexBox } from "../styledComponents";
import { ReactComponent as ForwardIcon } from '../icons/arrow_right_2.svg';
import { ReactComponent as BackIcon } from '../icons/arrow_left_2.svg';
import { ReactComponent as CalendarIcon } from '../icons/calendar_2.svg';

function Calendar() {
    const today = new Date();

    function getCalendarDays(year: number, month: number) {
        const firstDayOfMonth = startOfMonth(new Date(year, month));
        const lastDayOfMonth = endOfMonth(firstDayOfMonth);

        const calendarStart = startOfWeek(firstDayOfMonth);
        const calendarEnd = endOfWeek(lastDayOfMonth);

        const days = eachDayOfInterval({ start: calendarStart, end: calendarEnd });

        return days;
    }


    const day = today.getDay();
    const month = today.getMonth();
    const year = today.getFullYear();
    const currentMonthDays = getCalendarDays(year, month);
    const [selectedDate, setSelectedDate] = useState<Date>(today)
    const [calendarDays, setCalendarDays] = useState(currentMonthDays);
    const [calendarMonth, setCalendarMonth] = useState<number>(month);

    function updateMonth(month: number) {
        const newCalendarDays = getCalendarDays(year, month);
        setCalendarDays(newCalendarDays);
    }



    useEffect(() => {
        // console.log(calendarDays)
        // console.log(calendarDays.map(day => format(day, "yyyy-MM-dd")));
    }, [calendarDays])

    function renderTableBody(month: number) {
        const weeks = [];
        for (let i = 0; i < calendarDays.length; i += 7) {
            weeks.push(calendarDays.slice(i, i + 7));
        }
        // weeks.map((week, weekIndex) => (
        //     week.map((day, dayIndex) => (
        //         console.log(day)
        //     ))
        // ))

        return (
            <tbody>
                {weeks.map((week, weekIndex) => (
                    <tr key={weekIndex}>
                        {week.map((day, dayIndex) => (
                            <td key={dayIndex}>{renderCalendarDay(day)}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        );
    }

    function renderCalendarDay(day: Date) {

        const isInsideMonth = day.getMonth() === calendarMonth;
        const isSelectedDate = isSameDay(day, selectedDate);

        console.log(day.getDate())
        console.log(selectedDate.getDate());
        return (
            <Button onClick={() => setSelectedDate(day)} selected={isSelectedDate} style={{ width: "35px", height: "35px", color: isSelectedDate ? "white" : isInsideMonth ? "" : "grey" }}>{format(day, "d")}</Button>
        )
    }

    function getSelectedDate() {
        if (isSameDay(selectedDate, today)) return "Today";

        return format(selectedDate, 'd MMM yyyy');
    }



    return (
        <FlexBox column align="flex-start" width="271px">
            <FlexBox align="center" justify="space-between" style={{ width: "100%", fontWeight: "bold" }}>
                <Button Icon={CalendarIcon} >{getSelectedDate()}</Button>
                <FlexBox>
                    <Button onClick={() => setSelectedDate(prev => subDays(prev, 1))} Icon={BackIcon}></Button>
                    <Button onClick={() => setSelectedDate(prev => addDays(prev, 1))} Icon={ForwardIcon}></Button>
                </FlexBox>
            </FlexBox>
            <table >
                <thead>
                    <tr style={{ height: "35px", fontSize: "14px" }}>
                        <th >Su</th>
                        <th>Mo</th>
                        <th>Tu</th>
                        <th>We</th>
                        <th>Th</th>
                        <th>Fr</th>
                        <th>Sa</th>
                    </tr>
                </thead>
                {renderTableBody(calendarMonth)}
            </table>
        </FlexBox>
    )
}

export default Calendar;