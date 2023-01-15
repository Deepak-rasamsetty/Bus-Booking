import React, { useState } from "react";
import { useRef } from "react";
import AddRoutes from "./AddRoutes";
import { AddServiceContextProvider } from "../../context/AddServiceFormContext";
import { addBusService } from "../../data/BusDetails";
export default function AddBus() {
  const serviceNoRef = useRef("");
  const travelsRef = useRef("");
  const ratingRef = useRef("");
  const [routeList, setRouteList] = useState([]);
  console.log("Add bus rendered, routeList - ");
  routeList.map((element) => console.log(JSON.stringify(element)));
  const addToRouteList = (route) => {
    var filteredList = routeList.filter((item) => {
      return item.sequenceId !== route.sequenceId;
    });
    setRouteList([...filteredList, route]);
  };
  const deleteFromRouteList = (sequenceId) => {
    var filteredList = routeList.filter((item) => {
      return item.sequenceId !== sequenceId;
    });
    setRouteList([...filteredList]);
  };

  const handleFormSubmit = async () => {
    var request = {
      serviceId: serviceNoRef.current.value,
      travels: travelsRef.current.value,
      rating: ratingRef.current.value,
      routes: routeList,
    };
    console.log(request);
    await addBusService(request);
  };
  return (
    <AddServiceContextProvider
      value={{
        routeList: routeList,
        setRouteList: setRouteList,
        addToRouteList: addToRouteList,
        deleteFromRouteList: deleteFromRouteList
      }}
    >
      <div className="card-body ">
        <div className="col-sm-8 mx-auto">
          <div className="my-1">
            <input
              type="text"
              className="form-control"
              placeholder="Service No."
              aria-label="Service No."
              ref={serviceNoRef}
            />
          </div>

          <div className="my-1">
            <input
              type="text"
              className="form-control"
              placeholder="Travels"
              ref={travelsRef}
            />
          </div>
          <div className="my-1">
            <input
              type="text"
              className="form-control"
              placeholder="rating"
              ref={ratingRef}
            />
          </div>
        </div>

        <div className="my-3">
          <AddRoutes routeList={routeList} setRouteList={setRouteList} />
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <button className="btn btn-light" onClick={handleFormSubmit}>
          Submit
        </button>
      </div>
    </AddServiceContextProvider>
  );
}
