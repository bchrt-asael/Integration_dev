import React from "react";
import './App.css'
import { Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Register from "./pages/register";
import LogoutButton from "./components/logoutButton";
import Dashboard from "./pages/dashboard";

function App() {

  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/logout" element={<LogoutButton />} />
    </Routes>
  )
}

export default App
