import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Dashboard from "./Dashboard";
import Backlog from "./pages/backlog/Backlog";
import Board from "./pages/board/Board";
import Login from "./pages/login/Login";
import Splash from "./pages/splash/Splash";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../utils/firebase";

export default function App() {
  const [user, loading] = useAuthState(auth);

  return (
    <div>
      <Header />

      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}
