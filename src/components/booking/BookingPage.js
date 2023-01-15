import React, { useEffect, useState } from "react";
import { fetchReseredSeats, reserveTickets } from "../../data/BusDetails";
import SeatBlueprint from "./SeatBlueprint";
import TickeySummary from "./TickeySummary";
import { useContextValue } from "../../context/context";
import { Link } from "react-router-dom";
export default function BookingPage() {
  const selectedBus = useContextValue("selectedBus");
  const setReservationQueueId = useContextValue("setReservationQueueId");
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [reservedSeats, setReservedSeats] = useState([]);

  console.log("BookingPage - reservedSeats - " + reservedSeats);
  useEffect(() => {
    fetchReseredSeats(selectedBus.serviceId, setReservedSeats);
  }, [selectedBus, setReservedSeats]);

  const addToSelectedSeats = (seatId) => {
    var index = selectedSeats.indexOf(seatId);

    if (index !== -1) {
      var temp = selectedSeats;
      setSelectedSeats(
        temp.filter((element) => {
          return element !== seatId;
        })
      );
    } else {
      setSelectedSeats([...selectedSeats, seatId]);
    }
  };

  const handleReservation = () => {
    var request = { serviceId: selectedBus.serviceId, 
      boardingLocation: selectedBus.journeyDetails.boardingLocation,
      droppingLocation: selectedBus.journeyDetails.droppingLocation,
      seatNumbers: selectedSeats };
     reserveTickets(request, setReservationQueueId);
  };
  return (
    <div className="d-flex justify-content-start ">
      <div className=" flex-fill mx-3">
        <SeatBlueprint
          addToSelectedSeats={addToSelectedSeats}
          reservedSeats={reservedSeats}
        />
      </div>
      <div className="col-md-5 mx-3">
        <div>
          <TickeySummary busDetails={selectedBus} selectedSeats={selectedSeats}/>
          <div className="text-center w-100">
            <Link to="/WaitAndRedirectPage">
              <button className="btn btn-light" onClick={handleReservation}>
                Proceed to pay
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
