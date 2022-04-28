import React from "react";
import "./potential.styles.scss";

function Modal({ setOpenModal }) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
            <div className="all">
            <div className="titleCloseBtn">
          <button onClick={() => {setOpenModal(false);}}>
            X
          </button>
        </div>
        <div className="title">
          <h1>How we estimate your earning potential</h1>
        </div>
        <div className="body">
          <p>We make a few simple assumptions and calculations to determine your earnings:</p>
          <li>If you have an entire place, we assume you can host four guests.If you're listing a private <br/> room, we count that as two guests, and for a shared room, just one guest. You can <br/>change your selections in the drop-down menu at any time.</li>
          <li>We take the median nightly price (before expenses, fees and taxes) based on booking <br/>data in your area from the last 12 months.</li>
          <li>We then multiply that price by the total number of occupied nights to get the monthly <br/>earnings estimate. To estimate the number of nights that you might host, we look at <br/>how often others in your area are hosting.</li>
          <p>Keep in mind that these are just estimates. How much you actually earn depends on a number <br/>of other factors such as your availability, price, acceptance and cancellation rates, any legal<br/> restrictions and demand in your area.</p>
          <p>Also, your ability to host may depend on the local laws in your area. Learn more.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;