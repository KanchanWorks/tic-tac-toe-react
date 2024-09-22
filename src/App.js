import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css"; 
import TicTacToe from "./components/TicTacToe"; 
import Navbar from "./components/Navbar"; 
import Calculator from "./components/Calculator"; 

function App() {
  return (
    <Router>
      <Navbar /> 
      <Routes>
        <Route path="/tic-tac-toe-react" element={<TicTacToe />} />
        <Route path="/tic-tac-toe-react" element={<TicTacToe />} />
        <Route path="/calculator" element={<Calculator />} />
      </Routes>
    </Router>
  );
}

export default App;
