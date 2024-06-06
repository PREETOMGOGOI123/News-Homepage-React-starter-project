import React from "react";
import Footer from "../../layouts/footer/Footer";

import "./home.css";
import SideSection from "./sideSection/SideSection";
import PrimarySection from "./centerSection/CenterSection";

function Home() {
  return (
    <>
      <div className="mid-section">
        <PrimarySection />
        <SideSection />
      </div>
      <Footer />
    </>
  );
}

export default Home;
