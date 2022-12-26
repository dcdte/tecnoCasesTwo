import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "./../styles/css/Home.css";

function Home() {

  

  return (
    <section className="home">
      <Header />
      <div className="home__container">
        <div className="home__banner">
          <img src="" alt="" />
        </div>
        <div className="home__layout">
          <div className="home__bar"></div>
          <div className="home__details">
            <div className="home__tags"></div>
            <div className="home__products"></div>
            <div className="home__paging"></div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}

export default Home;
