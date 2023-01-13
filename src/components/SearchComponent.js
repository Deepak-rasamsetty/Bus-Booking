import React, { useRef } from "react";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useContextValue } from "../context/context";
import { getSearchResults } from "../data/BusDetails";
export default function SearchComponent() {
  const setAvailableBusList = useContextValue("setAvailableBusList");
  const aLocation = useRef("");
  const zLocation = useRef("");
  const handleSubmit = () => {
    var request = {
      boardingLocation: aLocation.current.value,
      droppingLocation: zLocation.current.value,
    };
    getSearchResults(request, setAvailableBusList);
  };
  return (
    <div>
      <div className="card text-center ">
        <div className="card-header">Search Bus</div>
        <div className="card-body ">
          <div className="col-sm-6 mx-auto">
            <div className="my-1">
              <input
                type="text"
                className="form-control"
                placeholder="From"
                aria-label="From"
                ref={aLocation}
              />
            </div>
            <div className="my-1">
              <input
                type="text"
                className="form-control"
                placeholder="To"
                aria-label="To"
                ref={zLocation}
              />
            </div>

            <div>
              <input type="date" className="form-control" />
            </div>
          </div>
        </div>
        <Link to="/available-buses">
          <button className="btn btn-light" onClick={handleSubmit}>
            Search
          </button>
        </Link>
      </div>
    </div>
  );
}
