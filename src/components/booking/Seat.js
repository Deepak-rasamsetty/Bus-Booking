import React from "react";
import { useState } from "react";

export default function Seat(props) {
  const seatid = props.rowNum + "" + props.seatNum;
  const isSeatReserved = props.reservedSeats.includes(seatid);
  const seatOnLoadStatus = isSeatReserved ? "RESERVED" : "NEW";
  const [seatStatus, setSeatStatus] = useState(seatOnLoadStatus);
  console.log("seat.js, isSeatReserved - " + seatid + " - " + isSeatReserved);
  const seatBtn = isSeatReserved ? (
    <i className="bi bi-square-fill"></i>
  ) : seatStatus === "NEW" ? (
    <i className="bi bi-square"></i>
  ) : (
    <i className="bi bi-square-fill"></i>
  );
  const handleSeatSelect = () => {
    if (!isSeatReserved) {
      if (seatStatus === "NEW") {
        setSeatStatus("SELECTED");
      } else if (seatStatus === "SELECTED") {
        setSeatStatus("NEW");
      }
      props.addToSelectedSeats(seatid);
    }
  };
  return (
    <button type="button" className="btn btn-light" onClick={handleSeatSelect} disabled={isSeatReserved}>
      <h2>
      {seatBtn}
      </h2>
     
    </button>
  );
}
