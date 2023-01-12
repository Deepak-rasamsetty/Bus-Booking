import React, { useState } from "react";
import BusInfo from "./BusInfo";
import SeatBlueprint from "./SeatBlueprint";
import TickeySummary from "./TickeySummary";
export default function BookingPage() {
  const [selectedSeats, setSelectedSeats] = useState([]);
  console.log("BookingPage - selectedSeats - " + selectedSeats);
  const addToSelectedSeats = (seatId) => {
    var index = selectedSeats.indexOf(seatId);

    if (index !== -1) {
      var temp = selectedSeats;
      setSelectedSeats(
        temp.filter((element) => {
          return element != seatId;
        })
      );
    } else {
      setSelectedSeats([...selectedSeats, seatId]);
    }
  };
  return (
    <div className="d-flex justify-content-start ">
      {/* <div className="col-md-3">
        <BusInfo />
      </div> */}
      <div className=" flex-fill mx-3">
        <SeatBlueprint addToSelectedSeats={addToSelectedSeats} />
      </div>
      <div className="col-md-5 mx-3">
        <TickeySummary selectedSeats={selectedSeats} />
      </div>
    </div>
  );
}
