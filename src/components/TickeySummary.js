import React from "react";
import { useContextValue } from "../context/context";
import { Link } from "react-router-dom";

export default function TickeySummary(props) {
  const selectedBus = useContextValue("selectedBus");
  console.log("ticket summar rendered, props - " + JSON.stringify(props));
  return (
    <div>
      <div className="card">
        <div className="card-header text-center"> Ticket summary</div>
        <div className="card-body">
          <ul className="list-unstyled">
            <li>
              {" "}
              {selectedBus.from} - {selectedBus.to}
            </li>
            <li>Boarding time : {selectedBus.boardingTime}</li>
            <li>Dropping time : {selectedBus.droppingTime}</li>
          </ul>
          Tickets selected -{" "}
          {props.selectedSeats.length !== 0
            ? props.selectedSeats.sort().toString()
            : "none"}
          <br />
          Fare - {selectedBus.fare * props.selectedSeats.length}
        </div>
        <div className="text-center w-100">
          <Link to="/validatingPayment">
            <button className="btn btn-light">Proceed to pay</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
