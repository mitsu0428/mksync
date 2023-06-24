import React from "react";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import allLocales from "@fullcalendar/core/locales-all";
import interactionPlugin, { DateClickArg } from "@fullcalendar/interaction";

const Calendar = () => {
  const thisMonth = () => {
    const today = new Date();
    return `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(
      2,
      "0"
    )}`;
  };

  const handleDateClick = React.useCallback((arg: DateClickArg) => {
    alert(arg.dateStr);
  }, []);

  return (
    <FullCalendar
      plugins={[dayGridPlugin, interactionPlugin]}
      initialView="dayGridMonth"
      locales={allLocales}
      locale="ja"
      events={[
        { title: "event 1", date: `${thisMonth()}-01` },
        { title: "event 2", date: `${thisMonth()}-02` },
      ]}
      dateClick={handleDateClick}
    />
  );
};

export default Calendar;
