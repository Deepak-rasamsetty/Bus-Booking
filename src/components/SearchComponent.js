import React, {  useState } from "react";

import { Link } from "react-router-dom";
import { useContextValue } from "../context/context";
import AutoCompleteInput from "./common/AutoCompleteInput";
import { fetchLocations } from "../data/BusDetails";
export default function SearchComponent() {
  const searchRequest = useContextValue("searchRequest");
  const setSearchRequest = useContextValue("setSearchRequest");
  const [aLocation, setALocation] = useState(searchRequest!==null?searchRequest.boardingLocation:"");
  const [zLocation, setZLocation] = useState(searchRequest!==null?searchRequest.droppingLocation:"");
  const handleSubmit = () => {
    var request = {
      boardingLocation: aLocation,
      droppingLocation: zLocation,
    };
    setSearchRequest(request);
  };
  return (
    <div>
      <div className="card text-center ">
        <div className="card-header">Search Bus</div>
        <div className="card-body ">
          <div className="col-sm-8 mx-auto">
            <div className="my-1">
              <AutoCompleteInput value={aLocation} setValue={setALocation} fetchSuggestions={fetchLocations}/>
            </div>
            <div className="my-1">
            <AutoCompleteInput value={zLocation} setValue={setZLocation} fetchSuggestions={fetchLocations}/>
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
