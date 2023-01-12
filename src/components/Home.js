import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import SearchComponent from "./SearchComponent";
import AvailableBuses from "./AvailableBuses";
import ContainerWrapper from "./style/ContainerWrapper";
import BookingPage from "./BookingPage";
import { CustomContextProvider } from "../context/context";
import LoadingPage from "./LoadingPage";

export default function Home() {
  const [selectedBus, setSelectedBus] = useState(null);
  useEffect(() => {
    console.log(
      "inside home useEffect - selectedBus : " + JSON.stringify(selectedBus)
    );
  }, [selectedBus]);
  return (
    <BrowserRouter>
      <header>
        <Navbar />
      </header>
      <CustomContextProvider
        value={{ selectedBus: selectedBus, setSelectedBus: setSelectedBus }}
      >
        <Routes>
          <Route
            path="/"
            element={<ContainerWrapper children={<SearchComponent />}/>}
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
          <Route path="/validatingPayment" element={<LoadingPage />} />
        </Routes>
      </CustomContextProvider>
    </BrowserRouter>
  );
}
