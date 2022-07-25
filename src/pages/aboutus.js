import React from "react";
import "../App.css";
import team1 from "../components/images/team1.jpg";
import team2 from "../components/images/team2.jpg";
import team3 from "../components/images/team3.jpg";

const aboutus = () => {
  return (
    <div className="header">
      <div className="text">
        <h2>PwC Auditing Firm</h2>
        <p>My Objectives</p>
      </div>
      <br />
      <section className="container">
        {/* <ul>
      <li>I want to learn to write clean and scalable code</li>
      <li>I want to learn to make my application more secure</li>
      <li>I want to learn to solve problems better and faster</li>
    </ul> */}
        <h2 style={{ textAlign: "center" }}>Our Team</h2>
        <div className="row">
          <div className="column">
            <div className="card">
              <img src={team1} alt="Jane" style={{ width: "100%" }} />
              <div className="container">
                <h2>Taiwo Oyedele - PwC</h2>
                <p className="title">Director - Africa Tax Leader</p>
                <p>
                  Taiwo is the Fiscal Policy Partner and Africa Tax Leader at
                  PwC. He is the Chairman of the COVID-19 intervention committee
                  for PwC West Africa.
                </p>
                <p>oyedeletaiwo@pwc.com</p>
                <p>
                  <button className="button">Contact</button>
                </p>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="card">
              <img src={team2} alt="Mike" style={{ width: "100%" }} />
              <div className="container">
                <h2>Mike Ross</h2>
                <p className="title">Director</p>
                <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                <p>mike@example.com</p>
                <p>
                  <button className="button">Contact</button>
                </p>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="card">
              <img src={team3} alt="John" style={{ width: "100%" }} />
              <div className="container">
                <h2>Taiwo Oyedele</h2>
                <p className="title">Designer</p>
                <p>
                  PwC Nigeria provides industry-focused assurance, advisory and
                  tax services to public, private and government clients in all
                  markets.
                </p>
                <p>john@example.com</p>
                <p>
                  <button className="button">Contact</button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default aboutus;
