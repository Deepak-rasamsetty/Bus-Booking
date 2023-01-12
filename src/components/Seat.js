import React, { useEffect } from "react";
import { useState } from "react";

export default function Seat(props) {
  const seatid = props.rowNum + "" + props.seatNum;
  const [seatStatus, setSeatStatus] = useState("");
  const seatBtn =
    seatStatus === "" ? (
     <h3> <i className="bi bi-square"></i></h3>
    ) : (
     <h3> <i className="bi bi-square-fill"></i></h3>
    );
  const handleSeatSelect = () => {
    console.log("seat selected seat Id - "+ seatid+', status - '+seatStatus);
    if (seatStatus === "") {
      setSeatStatus("SELECTED");
    } else {
      setSeatStatus("");
    }
    props.addToSelectedSeats(seatid)
  };
  //useEffect(()=>{}, [seatStatus]);
  return (
    <button type="button" className="btn" onClick={handleSeatSelect}>
      {seatBtn}
    </button>
  );
}
