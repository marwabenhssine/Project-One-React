import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from './components/navbar/navbar'
import AppRoutes from "./components/Routes/Routes";
import Footer from "./components/Footer/Footer";
import Reviews from "./components/Reviews/Reviews";



function App() {
  return (
    <Router>
      <Navbar />
      <AppRoutes />
      <Footer />
      
    </Router>
  );
}

export default App;
