import React from "react";
import Header from "./components/header/Header";
import Backlog from "./pages/backlog/Backlog";
import Board from "./pages/board/Board";

export default function App() {
  return (
    <div>
      <Header />
      <Board />
      <Backlog />
    </div>
  );
}
