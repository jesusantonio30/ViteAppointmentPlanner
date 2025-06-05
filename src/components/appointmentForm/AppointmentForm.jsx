import React from "react";
import { ContactPicker } from "../contactPicker/ContactPicker";

const getTodayString = () => {
  const [month, day, year] = new Date()
    .toLocaleDateString("en-US")
    .split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={({ target }) => setTitle(target.value)}
          required
          placeholder="Appointment Title"
          aria-label="Appointment Title"
        />
      </label>

      <label>
        <input
          type="date"
          name="date"
          min={getTodayString()}
          value={date}
          onChange={({ target }) => setDate(target.value)}
          required
          aria-label="Schedule Date"
        />
      </label>

      <label>
        <input
          type="time"
          name="appt"
          value={time}
          onChange={({ target }) => setTime(target.value)}
          required
          aria-label="Schedule Time"
        />
      </label>

       <label>
        <ContactPicker
          contacts={contacts}
          onChange={({ target }) => setContact(target.value)}
          value={contact}
          name="contact"
        />
      </label>

      <input type="submit" value="Add Appointment" aria-label="Add Appointment"/>
    </form>
  );
};
