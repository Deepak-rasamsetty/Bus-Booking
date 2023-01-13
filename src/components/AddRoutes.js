import React, { useState } from "react";
import RouteComponent from "./RouteComponent";

export default function AddRoutes() {
  const [routeCount, setRouteCount] = useState(1);
  
  console.log('Add Route remderd, routeList ');
  
  var routeDetailsComponentList = [];
 for (let i = 0; i < routeCount; i++) {
    routeDetailsComponentList.push(
      <div className="col-sm-12 my-1 " key={i}>
        <RouteComponent sequenceId={i} />
      </div>
    );
  }
  const incrementrouteCount = () => {
    setRouteCount(routeCount + 1);
  };

  const handleAddStopClick = () => {
    incrementrouteCount();
  };
  return (
    <div className="card">
      <div className="card-header text-center">Route Details</div>
      <div className="card-body">{routeDetailsComponentList}</div>

      <div className="col-sm-12 my-1 d-flex justify-content-center my-2">
        <button className="btn btn-light" onClick={handleAddStopClick}>
          Add New stop
        </button>
      </div>
    </div>
  );
}
