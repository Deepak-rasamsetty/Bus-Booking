import React from "react";
import { Link } from "react-router-dom";
import { useContextValue } from "../context/context";

export default function BusDetailsComponent(props) {
  const setSelectedBus = useContextValue('setSelectedBus');
  const onBusSelect=()=>{
    console.log('Selected bus - '+JSON.stringify(props.data))
    setSelectedBus(props.data);
  }
  return (
    <div>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">
            {props.data.from} - {props.data.to}
          </h5>
          <div className="row ">
            <div className="col-md-6">
              <ul className="list-unstyled">
                <li>Boarding time : {props.data.boardingTime}</li>
                <li>Dropping time : {props.data.droppingTime}</li>
                <li>
                  <small>
                    {props.data.travels} - {props.data.rating} *
                  </small>
                </li>
              </ul>
            </div>
            <div className="col-md-6 d-flex flex-column">
              <p className="card-text text-center">
                Fare : {props.data.fare}
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
