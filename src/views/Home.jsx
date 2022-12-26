import React, { useEffect } from "react";
import Footer from "../components/Footer";
import Button from "../components/atoms/Button";
import ButtonDropDown from "../components/atoms/ButtonDropDown";
import Header from "../components/Header";
import "./../styles/css/Home.css";
import { useDispatch } from "react-redux";
import { getFiltersAsync } from "../store/slices/main/async";
import { useParams } from "react-router-dom";

function Home() {

  const dispatch = useDispatch();
  const {slug} = useParams();


  useEffect(()=>{
    dispatch(getFiltersAsync({zoneId: slug}));
  }, [dispatch])
  

  return (
    <section className="home">
      <Header />
      <div className="home__container">
        <div className="home__banner">
          <img src="" alt="" />
        </div>
        <div className="home__layout">
          <div className="home__bar">

          </div>
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
