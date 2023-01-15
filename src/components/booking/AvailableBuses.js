import React, { useEffect, useState } from "react";
import { useContextValue } from "../../context/context";
import BusDetailsComponent from "./BusDetailsComponent";
import { getSearchResults } from "../../data/BusDetails";
import SearchComponent from "../SearchComponent";
export default function AvailableBuses() {
  var searchRequest = useContextValue("searchRequest");
  const [searchResults, setSearchResults] = useState(null);
  useEffect(() => {
    console.log("inside available buses useEffect");
    getSearchResults(searchRequest, setSearchResults);
  }, [setSearchResults]);
  return (
    searchResults && (
      <div className="container">
        <div className=" row d-flex justify-content-center">
          <div className="col-md-4">
            <SearchComponent />
          </div>
          <div className="col-md-7">
            <div className="card">
              <div className="card-header text-center">
                Showing results for {searchRequest.boardingLocation} - {searchRequest.droppingLocation}
              </div>
              <div className="card-body">
                {searchResults.busInfo.map((busDetails) => {
                  return (
                    <BusDetailsComponent
                      key={busDetails.serviceId}
                      busDetails={busDetails}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
}
