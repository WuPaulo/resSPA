import React from "react";

const Submitted = ({ name, email, company, salary, date, handleClick }) => {
  return (
    <div className="header">
      <div className="headerSubmitted">
        <h1>Thank you for your submission!</h1>
        <h2>Name:{name}</h2>
        <h2>Email:{email}</h2>
        <h2>Company:{company}</h2>
        <h2>Salary Range:{salary}</h2>
        <h2>Date :{date}</h2>
        <button onClick={handleClick}>Go back</button>
      </div>
    </div>
  );
};

export default Submitted;
