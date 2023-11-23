// import React, { useState, useEffect } from "react";
// import { Calendar, momentLocalizer } from "react-big-calendar";
// import moment from "moment";
// import "react-big-calendar/lib/css/react-big-calendar.css";
// import { useAuthStore } from "../../store/Auth";
// import Modal from "../../UI/Modal";

// const localizer = momentLocalizer(moment, { format: "YYYY-MM-DDTHH:mm:ss.SSSZ" });

// const WorkerScreen = () => {
//   const { user, token } = useAuthStore();
//   const [bookings, setBookings] = useState([]);
//   const [modalMsg, setModalMsg] = useState(null);

//   useEffect(() => {
//     // Make an API call to get the booked dates for the worker
//     fetch(`https://chiragb79.pythonanywhere.com/v1/holiday/pending`, {
//       headers: {
//         "Content-Type": "application/json",
//         "x-access-token": token,
//       },
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         console.log("Booked Dates API Response:", data);

//         // Update the state with the booked dates
//         const bookedDates = data.data.map((booking) => ({
//           start: moment.utc(booking.date).toDate(),
//           end: moment.utc(booking.date).toDate(),
//           title: "Request Sent",
//         }));

//         setBookings(bookedDates);
//       })
//       .catch((error) => {
//         console.error("Error fetching booked dates:", error);
//         // Handle error as needed
//       });
//   }, [user.id, token]);

//   const handleEventClick = (e) => {
//     console.log("event clicked!", e);
//     postHolidayRequest(e.start);
//   };

//   const postHolidayRequest = (date) => {
//     fetch("http://chiragb79.pythonanywhere.com/v1/holidays", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         worker_id: user.id,
//         date,
//       }),
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         setModalMsg("Holiday Request Sent");
//         console.log("API Response:", data);
//         // Handle the API response as needed
//         // For now, just update the state to show "Request Sent" in the calendar
//         setBookings((prev) => [
//           ...prev,
//           {
//             start: date,
//             end: date,
//             title: `Request Sent`,
//           },
//         ]);
//       })
//       .catch((error) => {
//         console.error("Error making API request:", error);
//         // Handle error as needed
//       });
//   };

//   return (
//     <div>
//       <Calendar
//         onSelectEvent={(e) => {
//           console.log(e);
//         }}
//         onSelecting={() => console.log(312321)}
//         localizer={localizer}
//         events={bookings}
//         startAccessor="start"
//         endAccessor="end"
//         style={{ height: 500 }}
//         selectable={true}
//         onSelectSlot={handleEventClick}
//       />
//       {modalMsg && <Modal msg={modalMsg} route="/Worker" />}
//     </div>
//   );
// };

// export default WorkerScreen;

import React, { useState, useEffect } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { useAuthStore } from "../../store/Auth";
import Modal from "../../UI/Modal";

const localizer = momentLocalizer(moment, { format: "YYYY-MM-DDTHH:mm:ss.SSSZ" });

const WorkerScreen = () => {
  const { user, token } = useAuthStore();
  const [bookings, setBookings] = useState([]);
  const [modalMsg, setModalMsg] = useState(null);

  useEffect(() => {
    // Fetch pending holidays
    fetchHolidays("pending");
  }, [user.id, token]);

  useEffect(() => {
    // Fetch completed holidays
    fetchHolidays("completed");
  }, [user.id, token]);

  const fetchHolidays = (status) => {
    const apiUrl = `https://chiragb79.pythonanywhere.com/v1/holiday/${status}`;

    fetch(apiUrl, {
      headers: {
        "Content-Type": "application/json",
        "x-access-token": token,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(`${status} Holidays API Response:`, data);

        const holidayTitle = status === "pending" ? "Request Sent" : "Request Accepted";

        // Clear the existing state if it's the first fetch
        if (status === "pending") {
          setBookings([]);
        }

        // Update the state with the holidays
        const holidays = data.data
          .filter((holiday) => holiday.worker_id === user.id)
          .map((holiday) => ({
            start: moment.utc(holiday.date).toDate(),
            end: moment.utc(holiday.date).toDate(),
            title: holidayTitle,
          }));

        setBookings((prev) => [...prev, ...holidays]);
      })
      .catch((error) => {
        console.error(`Error fetching ${status} holidays:`, error);
        // Handle error as needed
      });
  };

  const handleEventClick = (e) => {
    console.log("event clicked!", e);
    setModalMsg(e.title);
  };
  const postHolidayRequest = (date) => {
    fetch("https://chiragb79.pythonanywhere.com/v1/holidays", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        worker_id: user.id,
        date,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        setModalMsg("Holiday Request Sent");
        console.log("API Response:", data);

        // Handle the API response as needed
        // For now, just update the state to show "Request Sent" in the calendar
        setBookings((prev) => [
          ...prev,
          {
            start: date,
            end: date,
            title: `Request Sent`,
          },
        ]);
      })
      .catch((error) => {
        console.error("Error making API request:", error);
        // Handle error as needed
      });
  };

  const handleSelectSlot = (slotInfo) => {
    // Check if the selected slot has a title of "Request Sent" or "Request Accepted"
    const isClickable = !bookings.some(
      (event) =>
        moment(slotInfo.start).isSame(event.start) &&
        (event.title === "Request Sent" || event.title === "Request Accepted")
    );

    if (!isClickable) {
      // Do not allow selecting the slot
      console.log("Slot not clickable");
    } else {
      // Allow selecting the slot
      console.log("Slot clickable");
      postHolidayRequest(slotInfo.start);
    }
  };

  return (
    <div>
      <Calendar
        onSelectEvent={handleEventClick}
        onSelecting={() => console.log(312321)}
        localizer={localizer}
        events={bookings}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        selectable={true}
        onSelectSlot={handleSelectSlot}
      />
    </div>
  );
};

export default WorkerScreen;
