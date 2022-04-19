import React from "react";
import { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [salary, setSalary] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setName(e.target.name.value);
    setEmail(e.target.email.value);
    setCompany(e.target.company.value);
    setSalary(e.target.salary.value);
    setDate(e.target.date.value);
  };
  return (
    <div className="contact wrapper">
      <h2>Contact</h2>
      <p>Contact Form for reaching out to me!</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name" className="sr-only">
          Name
        </label>
        <input type="text" id="name" name="name" placeholder="Name" required />
        <label htmlFor="email" className="sr-only">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          required
        />
        <label htmlFor="company" className="sr-only">
          company
        </label>
        <input
          type="text"
          id="company"
          name="company"
          placeholder="company"
          required
        />
        <label htmlFor="salary" className="sr-only">
          salary range
        </label>
        <input
          type="text"
          id="salary"
          name="salary"
          placeholder="salary range"
          required
        />
        <label htmlFor="date" className="sr-only">
          starting date
        </label>
        <input type="date" id="date" name="date" required />
        <button type="submit">Send!</button>
      </form>
    </div>
  );
};

export default Contact;
