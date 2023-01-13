import React from "react";
import { BrowserRouter, Link, Outlet, Route, Routes } from "react-router-dom";

export default function AdminPage() {
  return (
    
      <div className="container w-100">
        <div className="card">
          <div className="card-header text-center">
            <nav>
                <Link to="/admin/add">
                <button className="btn btn-light">Add </button>
                </Link>
                <Link to="/admin/modify">
                <button className="btn btn-light">Modify </button>
                </Link>
            </nav>
          </div>
          <div className="card-body">
            <Outlet/>
          </div>
     
         
        </div>
      </div>

  );
}
