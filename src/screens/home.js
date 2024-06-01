import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Card from "../Components/Card";
import Carousal from "../Components/Carousal";

function Home() {
  return (
    <div>
      <div>
        <Navbar></Navbar>
      </div>
      <div>
        <Carousal />
      </div>
      <div className="m-3">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
