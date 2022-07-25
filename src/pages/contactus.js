import React from "react";
import "../App.css";
import map from "./map.JPG";

function contactus() {
  return (
    <div class="contact header">
      <div>
        <h1>Contact Us</h1>
        <br />
        <p>
          <b>Email:</b> enquiry@ng.pwc.com
        </p>
        <p>
          <b>Phone Number:</b> +234-8067535770
        </p>
        <p>
          <b>Address:</b> 5B Water Corporation Road <br />
          Landmark Towers Victoria Island, <br />
          Eti-Osa 101233, Lagos Nigeria
        </p>
      </div>
      <div class="map">
        <img src={map} alt="" />
      </div>
    </div>
  );
}

export default contactus;
