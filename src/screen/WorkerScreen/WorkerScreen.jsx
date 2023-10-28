import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
const localizer = momentLocalizer(moment);

const WorkerScreen = () => {
  const [visible, setVisible] = useState(false);
  const [selectedTime, setSelectedTime] = useState(new Date());
  const [bookings, setBookings] = useState([
    {
      start: new Date(),
      end: new Date(),
      title: `Booking One`,
    },
  ]);

  const handleEventClick = (e) => {
    console.log("event clicked!", e);
    setVisible(true);
    setSelectedTime(e.slots[0]);
  };

  const handleEventClic = (e) => {
    console.log("event clic", e);
    setVisible(true);
    setSelectedTime(e.slots[0]);
  };

  const setHandleClick = (time) => {
    const newBooking = {
      start: new Date(new Date(selectedTime).setHours(time, 0, 0)),
      end: new Date(new Date(selectedTime).setHours(time + 1, 0, 0)),
      title: `Booking at ${time}`,
    };
    setBookings((prev) => [...prev, newBooking]);
    setVisible(false);
  };

  const PickerModal = () => {
    return (
      <div
        style={{
          width: "50vw",
          height: "70vh",
          backgroundColor: "#ccc",
          zIndex: 10,
          margin: "auto",
        }}
      >
        Available Slots:
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            flexWrap: "wrap",
          }}
        >
          <div
            onClick={() => {
              setHandleClick(8);
            }}
            style={{
              backgroundColor: "#000",
              padding: 10,
              margin: "auto",
              color: "#fff",
              width: 50,
              margin: 10,
              height: 20,
            }}
          >
            08:00
          </div>
          <div
            onClick={() => {
              setHandleClick(10);
            }}
            style={{
              backgroundColor: "#000",
              padding: 10,
              margin: "auto",
              color: "#fff",
              width: 50,
              margin: 10,
              height: 20,
            }}
          >
            10:00
          </div>
          <div
            onClick={() => {
              setHandleClick(12);
            }}
            style={{
              backgroundColor: "#000",
              padding: 10,
              margin: "auto",
              color: "#fff",
              width: 50,
              margin: 10,
              height: 20,
            }}
          >
            12:00
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      {!visible && (
        <Calendar
          onSelectEvent={(e) => {
            console.log(e);
          }}
          onSelecting={() => console.log(312321)}
          localizer={localizer}
          events={bookings}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 500 }}
          selectable={true}
          onSelectSlot={handleEventClick}
        />
      )}
      {visible && <PickerModal />}
    </div>
  );
};

export default WorkerScreen;
