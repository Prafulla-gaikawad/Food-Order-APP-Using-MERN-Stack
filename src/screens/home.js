import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

function Home() {
  return (
    <div>
      <div>
        <Navbar></Navbar>
      </div>
      <div>Body</div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
