import React from "react";
import Navbar from "./Components/Navbar";
import Review from "./Components/Review";
import Mid from "./Components/Mid";
import Jobseekers from "./Components/Jobseekers";
import Recruits from "./Components/Recruits";
import Home from "./Components/Home";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <div style={{ height: "auto" }}>
        <Navbar />
        <Home />
        <Jobseekers />
        <Recruits />
        <Review />
        <Mid />
        <Footer />
      </div>
    </>
  );
}

export default App;
