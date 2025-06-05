import React from "react";

export const ContactForm = ({ name, setName, phone, setPhone, email, setEmail, onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={({ target }) => setName(target.value)}
          required
          placeholder="Contact Name"
          aria-label="Contact Name"
        />
      </label>

      <label>
        <input
          type="tel"
          name="phone"
          pattern="^[0-9]{3}-[0-9]{3}-[0-9]{4}$"
          value={phone}
          onChange={({ target }) => setPhone(target.value)}
          required
          placeholder="Contact Phone (###-###-####)"
          aria-label="Contact Phone"
        />
      </label>

      <label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={({ target }) => setEmail(target.value)}
          required
          placeholder="Contact Email"
          aria-label="Contact Email"
        />
      </label>

      <input type="submit" value="Add Contact" aria-label="Add Contact"/>
      
    </form>
  );
};

