import React, { useState } from "react";

import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";
import { TileList } from "../../components/tileList/TileList";

export const AppointmentsPage = ({ appointments, contacts, addAppointment }) => {
  /*
  Define state variables for 
  appointment info
  */
 const [name, setName] = useState('');
 const [contact, setContact] = useState(null);
 const [date, setDate] = useState(null);
 const [time, setTime] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data  
    */
   addAppointment(name, contact, date, time);
   setName('');
   setContact(null);
   setDate(null);
   setTime(null);
  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm
          contacts={contacts}

          title={name}
          setTitle={setName}

          contact={contact}
          setContact={setContact}

          date={date}
          setDate={setDate}

          time={time}
          setTime={setTime}

          handleSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList tiles={appointments}/>
      </section>
    </div>
  );
};