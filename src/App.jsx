import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Career from "./components/Career";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Career />
      <Footer />
    </>
  );
}

export default App;
