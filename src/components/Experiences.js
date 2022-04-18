import React from "react";
import { useState } from "react";

const Experiences = () => {
  const [active, setActive] = useState(false);
  return (
    <div>
      <h2>Work Experience</h2>
      <ul>
        <li>
          <h3>
            Sales enginer{" "}
            <span> AFTIA solutions | Jul 2021 - November 2021</span>
          </h3>
          <ul>
            <li>
              Articulated and educate on business, technical and architectural
              concepts to a variety of audiences such as business users,
              developers, architects, IT operations, and senior management.
            </li>
            <li>
              Developed forms solution and adobe sign documents with AEM forms
              and Adobe Sign.
            </li>
          </ul>
        </li>
        <li>
          <h3>
            Vice President Of Technology{" "}
            <span>
              Laurier Investment & Finance Association | Sep 2018 - Apr 2020
            </span>
          </h3>{" "}
          <ul>
            <li>
              Developed a website through WordPress to outreach to other schools
              and companies by outsourcing domain with cPanel to reach more
              students and interaction
            </li>
            <li>
              Marketed several club events through the use of social media ,
              resulting in exceeding target event attendees
            </li>
          </ul>
          <span>
            Laurier Investment & Finance Association | Sep 2018 - Apr 2020
          </span>
        </li>
        <li>
          <h3>
            Sales And Marketing Specialist{" "}
            <span>Student Works Management Program | Apr 2016 - Apr 2017</span>
          </h3>
          <ul>
            <li>
              Identified marketing strategies by seeking potential sales and
              identifying the needs of clients by providing excellent results,
              leading increasing sales and customer satisfaction
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default Experiences;
