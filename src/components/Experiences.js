import React from "react";
import { useState } from "react";

const Experiences = () => {
  const [activeOne, setActiveOne] = useState("false");
  const [activeTwo, setActiveTwo] = useState("false");
  const [activeThree, setActiveThree] = useState("false");

  return (
    <div className="experiences wrapper">
      <h2>Work Experiences</h2>
      <ul>
        <li
          onClick={() => setActiveOne(!activeOne)}
          className={!activeOne ? "highlighted" : null}
        >
          <div className="expriencesTitle">
            <h3>Sales enginer </h3>
            <span> AFTIA solutions | Jul 2021 - November 2021</span>
          </div>
          <p>
            Articulated and educate on business, technical and architectural
            concepts to a variety of audiences such as business users,
            developers, architects, IT operations, and senior management.
          </p>
          <p>
            Developed forms solution and adobe sign documents with AEM forms and
            Adobe Sign.
          </p>
        </li>
        <li
          onClick={() => setActiveTwo(!activeTwo)}
          className={!activeTwo ? "highlighted" : null}
        >
          <div className="expriencesTitle">
            <h3>Vice President Of Technology </h3>
            <span>
              Laurier Investment & Finance Association | Sep 2018 - Apr 2020
            </span>
          </div>

          <p>
            Developed a website through WordPress to outreach to other schools
            and companies by outsourcing domain with cPanel to reach more
            students and interaction
          </p>
          <p>
            Marketed several club events through the use of social media ,
            resulting in exceeding target event attendees
          </p>
        </li>
        {}
        <li
          onClick={() => setActiveThree(!activeThree)}
          className={!activeThree ? "highlighted" : null}
        >
          <div className="expriencesTitle">
            <h3>Sales And Marketing Specialist </h3>
            <span>Student Works Management Program | Apr 2016 - Apr 2017</span>
          </div>
          <p>
            Identified marketing strategies by seeking potential sales and
            identifying the needs of clients by providing excellent results,
            leading increasing sales and customer satisfaction
          </p>
        </li>
      </ul>
    </div>
  );
};

export default Experiences;
