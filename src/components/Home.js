import React, {  useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import SearchComponent from "./SearchComponent";
import AvailableBuses from "./booking/AvailableBuses";
import ContainerWrapper from "../style/ContainerWrapper";
import BookingPage from "./booking/BookingPage";
import { CustomContextProvider } from "../context/context";
import LoadingPage from "./common/LoadingPage";
import AddBus from "./Admin/AddBus";
import ModifyBus from "./Admin/ModifyBus";
import AdminPage from "./Admin/AdminPage";
import TicketConfirmation from "./booking/TicketConfirmation";
import WaitAndRedirectPage from "./common/WaitAndRedirectPage";

export default function Home() {
  const [selectedBus, setSelectedBus] = useState(null);
  const [reservationId, setReservationId] = useState(0);
  const [searchRequest, setSearchRequest] = useState({});
  return (
    <BrowserRouter>
      <header>
        <Navbar />
      </header>
      <CustomContextProvider
        value={{
          selectedBus: selectedBus,
          setSelectedBus: setSelectedBus,
          reservationId: reservationId,
          setReservationId: setReservationId,
          searchRequest: searchRequest,
          setSearchRequest: setSearchRequest,

        }}
      >
        <Routes>
          <Route
            path="/"
            element={<ContainerWrapper children={<SearchComponent />} />}
          />
          <Route
            path="/available-buses"
            element={<AvailableBuses />}
          />
          <Route
            path="/booking"
            element={
              <div className="container">
                <BookingPage />
              </div>
            }
          />
          <Route
            path="/admin"
            element={
              <div className="container">
                <AdminPage />
              </div>
            }
          >
            <Route
              path="/admin/add"
              element={
                <div className="container">
                  <AddBus />
                </div>
              }
            ></Route>
            <Route
              path="/admin/modify"
              element={
                <div className="container">
                  <ModifyBus />
                </div>
              }
            ></Route>
          </Route>

          <Route path="/validatingPayment" element={<LoadingPage />} />
          <Route path="/WaitAndRedirectPage" element={<WaitAndRedirectPage />} />
        </Routes>
      </CustomContextProvider>
    </BrowserRouter>
  );
}
