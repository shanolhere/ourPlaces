import React, { useState } from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import ViewPlaces from "./components/ViewPlaces";
import AddPlace from "./components/AddPlace";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import NotFound from "./components/NotFound";

function App() {
  const [login, setLogin] = useState(true);

  return (
    <div className="App container mx-auto">
      <nav className="flex justify-between place-items-center bg-slate-400 p-4 rounded-md text-white">
        <h2 className="text-xl lg:text-3xl">
          <NavLink to="/" exact>
            Our Places
          </NavLink>
        </h2>
        <ul className="flex  gap-x-4 lg:gap-x-6 place-items-center text-lg">
          <li>
            <NavLink to="/view-places">View Places</NavLink>
          </li>
          {login && (
            <li>
              <NavLink to="/add-place">Add Place</NavLink>
            </li>
          )}
          <li>
            <NavLink to="/auth">Authenticate</NavLink>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-place" element={<AddPlace />} />
        <Route path="/view-places" element={<ViewPlaces />} />
        <Route path="/auth" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
