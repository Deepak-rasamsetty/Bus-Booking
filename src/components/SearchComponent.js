import React from "react";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
export default function SearchComponent() {
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
              />
            </div>
            <div className="my-1">
              <input
                type="text"
                className="form-control"
                placeholder="To"
                aria-label="To"
              />
            </div>

            <div className="my-1">
              <Form.Control
                type="date"
                name="datepic"
                placeholder="DateRange"
              />
            </div>
          </div>
        </div>
        <Link to="/available-buses">
          <button className="btn btn-light">Search</button>
        </Link>
      </div>
    </div>
  );
}
