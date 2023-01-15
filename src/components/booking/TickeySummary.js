import React from "react";

export default function TickeySummary(props) {
  console.log("ticket summar rendered, props - " + JSON.stringify(props));
  return (
    
      <div className="card">
        <div className="card-header text-center"> Ticket summary</div>
        <div className="card-body text-center">
         
          Bus Service - {props.busDetails.serviceId}
          <figure className="text-center">
          <blockquote className="blockquote">
          <h2 className="card-text">
            {props.busDetails.startLocation} - {props.busDetails.endLocation}
          </h2>
          </blockquote>
          <figcaption className="blockquote-footer">
            <small className="text-muted">{props.busDetails.travels} Travels</small>
            </figcaption>
          </figure>
          
          
          <ul className="list-unstyled">
            <li>Boarding Location : {props.busDetails.journeyDetails.boardingLocation}</li>
            <li>Dropping location : {props.busDetails.journeyDetails.droppingLocation}</li>
            <li>Boarding time : {props.busDetails.journeyDetails.boardingTime}</li>
            <li>Dropping time : {props.busDetails.journeyDetails.droppingTime}</li>
          </ul>
          Tickets selected -{" "}
          {props.selectedSeats.length !== 0
            ? props.selectedSeats.sort().toString()
            : "none"}
          <br />
          Fare - {props.busDetails.journeyDetails.fare * props.selectedSeats.length}
        </div>

       
      </div>
     
  
  );
}
