import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import SignIn from "./components/SignIn";
import Form from "./components/Form";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="flex w-screen h-auto bg-[#F5F4E8]  flex-col">
      <Navbar />
      <ToastContainer />
      <main className="w-screen p-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<AboutUs />} />
          <Route path="/Contact" element={<ContactUs />} />
          <Route path="/Login" element={<SignIn />} />
          <Route path="/Form" element={<Form />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
