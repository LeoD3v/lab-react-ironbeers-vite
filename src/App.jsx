import "./App.css";
import HomePage from "./pages/HomePage";
import AddBeerPage from "./pages/AddBeerPage";
import AllBeersPage from "./pages/AllBeersPage";
import BeerDetailsPage from "./pages/BeerDetailsPage";
import RandomBeersPage from "./pages/RandomBeerPage";
import { Routes, Route } from "react-router-dom";
import Navbar from "/src/components/Navbar";
import React, { useState, useEffect } from "react";
import axios, { Axios } from "axios";

function App() {
  return (
    <div className="App container w-50">
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/beers" element={<AllBeersPage />} />
          <Route path="/random-beer" element={<RandomBeersPage />} />
          <Route path="/new-beer" element={<AddBeerPage />} />
          <Route path="/beer/:beerId" element={<BeerDetailsPage />} />
        </Routes>
      </div>
    </div>
  );
}
import { formToJSON } from "axios";

export default App;
