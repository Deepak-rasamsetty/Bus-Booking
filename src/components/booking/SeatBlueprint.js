import React from "react";
import Seat from "./Seat";

export default function SeatBlueprint(props) {
  const numrows = 5;
  const blueprint = [];
  const getEachRow = (rowNum) => {
    return (
      <div className="d-flex justify-content-around" key={rowNum}>
        <div className="btn-group mx-1">
          <Seat
            key={rowNum + "" + 1}
            rowNum={rowNum}
            seatNum={1}
            addToSelectedSeats={props.addToSelectedSeats}
            reservedSeats={props.reservedSeats}
          />
          <Seat
            key={rowNum + "" + 2}
            rowNum={rowNum}
            seatNum={2}
            addToSelectedSeats={props.addToSelectedSeats}
            reservedSeats={props.reservedSeats}
          />
        </div>
        <div className="btn-group">
          <Seat
            key={rowNum + "" + 3}
            rowNum={rowNum}
            seatNum={3}
            addToSelectedSeats={props.addToSelectedSeats}
            reservedSeats={props.reservedSeats}
          />
          <Seat
            key={rowNum + "" + 4}
            rowNum={rowNum}
            seatNum={4}
            addToSelectedSeats={props.addToSelectedSeats}
            reservedSeats={props.reservedSeats}
          />
        </div>
      </div>
    );
  };
  const getBlueprint = () => {
    for (let i = 0; i < numrows; i++) {
      blueprint.push(getEachRow(i));
    }
    return blueprint;
  };
  return (
    <div className="card">
      <div className="card-header text-center"> Select seats</div>

      <div className="card-body">{getBlueprint()}</div>
    </div>
  );
}
