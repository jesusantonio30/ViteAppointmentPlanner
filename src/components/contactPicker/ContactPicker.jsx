import React from "react";

export const ContactPicker = ({ contacts, onChange, value, name }) => {
  return (
    <select onChange={onChange} value={value} name={name}>
      <option value="">“No Contact Selected”</option>
      {contacts.map((obj) => (
        <option value={obj.name}>{obj.name}</option>
      ))}
    </select>
  );
};
