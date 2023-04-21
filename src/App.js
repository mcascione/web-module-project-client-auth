import React from "react";
import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";
import Login from "./Components/Login";
import FriendsList from "./components/FriendsList";
import AddFriend from "./components/AddFriend";

function App() {
  return (
    <div className="App">
      <header>
        <h2>Friends Database</h2>
        <nav>
          <a>LOGIN.</a>
          <a>FRIENDSLIST.</a>
          <a>ADDFRIEND.</a>
          <a>LOGOUT</a>
        </nav>
        <hr></hr>
      </header>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Navigate to="/" />} />
        <Route path="/friends" element={<FriendsList />} />
        <Route path="/friends/add" element={<AddFriend />} />
      </Routes>
    </div>
  );
}
export default App;
