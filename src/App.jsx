import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Dashboard from "./Dashboard";
import Backlog from "./pages/backlog/Backlog";
import Board from "./pages/board/Board";
import Login from "./pages/login/Login";
import Splash from "./pages/splash/Splash";

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <div>
      <Header />
      {!loggedIn ? (
        <Routes>
          <Route path="/" element={<Splash />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      ) : (
        <>
          <Board />
          <Backlog />
        </>
      )}
    </div>
  );
}
