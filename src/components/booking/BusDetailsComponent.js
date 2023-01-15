import React from "react";
import { Link } from "react-router-dom";
import { useContextValue } from "../../context/context";

export default function BusDetailsComponent(props) {
  const setSelectedBus = useContextValue('setSelectedBus');
  const onBusSelect=()=>{
    console.log('Selected bus - '+JSON.stringify(props.busDetails))
    setSelectedBus(props.busDetails);
  }
  return (
    <div>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">
            {props.busDetails.startLocation} - {props.busDetails.endLocation}
          </h5>
          <div className="row ">
            <div className="col-md-6">
              <ul className="list-unstyled">
                <li>Boarding time : {props.busDetails.journeyDetails.boardingTime}</li>
                <li>Dropping time : {props.busDetails.journeyDetails.droppingTime}</li>
                <li>
                  <small>
                    {props.busDetails.travels} - {props.busDetails.rating} *
                  </small>
                </li>
              </ul>
            </div>
            <div className="col-md-6 d-flex flex-column">
              <p className="card-text text-center">
                Fare : {props.busDetails.journeyDetails.fare}
              </p>
              <Link to="/booking">
                <button className="btn btn-light btn-sm" onClick={onBusSelect}>Select Seats</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
