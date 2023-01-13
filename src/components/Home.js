import React, {  useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import SearchComponent from "./SearchComponent";
import AvailableBuses from "./AvailableBuses";
import ContainerWrapper from "./style/ContainerWrapper";
import BookingPage from "./BookingPage";
import { CustomContextProvider } from "../context/context";
import LoadingPage from "./LoadingPage";
import AddBus from "./AddBus";
import ModifyBus from "./ModifyBus";
import AdminPage from "./AdminPage";
import AutoCompleteInput from "./AutoCompleteInput";

export default function Home() {
  const [selectedBus, setSelectedBus] = useState(null);
  const [availableBusList, setAvailableBusList] = useState([]);
  return (
    <BrowserRouter>
      <header>
        <Navbar />
      </header>
      <CustomContextProvider
        value={{
          selectedBus: selectedBus,
          setSelectedBus: setSelectedBus,
          availableBusList: availableBusList,
          setAvailableBusList: setAvailableBusList,
        }}
      >
        <Routes>
          <Route
            path="/"
            element={<ContainerWrapper children={<SearchComponent />} />}
          />
          <Route
            path="/available-buses"
            element={<ContainerWrapper children={<AvailableBuses />} />}
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
        </Routes>
      </CustomContextProvider>
    </BrowserRouter>
  );
}
