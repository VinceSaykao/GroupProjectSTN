import React from "react";

function ReactCalendar() {
  const [calendarValue, setCalendarValue] = useState(new Date());

  const onClickDay = (value, event) => {
    dispatch({ type: "FETCH_SAVED_EVENTS", payload: calendarValue });
  };

  return <div>ReactCalendar</div>;
  
}

export default ReactCalendar;
