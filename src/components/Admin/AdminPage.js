import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function AdminPage() {
  return (
    <div className="container w-100">
      <div className="card">
        <div className="card-header text-center">
          <div className="row d-flex justify-content-center">
            <button className="btn btn-light col-md-6">
              <Link to="/admin/add" className="nav-link active">
                Add
              </Link>
            </button>
            <button className="btn btn-light col-md-6">
              <Link to="/admin/modify" className="nav-link active">
                Modify
              </Link>
            </button>
          </div>
        </div>
        <div className="card-body">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
