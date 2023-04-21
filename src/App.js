import React from "react";
import "./App.css";
import { Route, Routes, Navigate, NavLink } from "react-router-dom";
import Login from "./Components/Login";
import FriendsList from "./components/FriendsList";
import AddFriend from "./components/AddFriend";
import Logout from "./components/Logout";
import PrivateRoutes from "./components/PrivateRoutes";

function App() {
  return (
    <div className="App">
      <header>
        <h2>Friends Database</h2>
        <ul>
          <NavLink to="/" className="link">LOGIN</NavLink>
          <NavLink to="/friends" className="link">FRIENDSLIST</NavLink>
          <NavLink to="/friends/add" className="link">ADDFRIEND</NavLink>
          <NavLink to="/logout" className="link">LOGOUT</NavLink>
        </ul>
        <hr></hr>
      </header>
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route path="/friends" element={<FriendsList />} />
          <Route path="/friends/add" element={<AddFriend/>} />
          <Route path="/logout" element={<Logout/>} />
        </Route>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}
export default App;
