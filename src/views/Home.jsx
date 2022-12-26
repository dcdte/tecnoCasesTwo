import React, { useEffect } from "react";
import Footer from "../components/Footer";
import Button from "../components/atoms/Button";
import ButtonDropDown from "../components/atoms/ButtonDropDown";
import Header from "../components/Header";
import "./../styles/css/Home.css";
import { useDispatch, useSelector } from "react-redux";
import { getFiltersAsync } from "../store/slices/main/async";
import { useParams } from "react-router-dom";
import Menu from "../components/Menu";
import { setFilters, setPartialFilters } from "../store/slices/main";
import { showFinances, showRams, showRoms } from "../store/slices/main/selectors";

function Home() {

  const dispatch = useDispatch();
  const {slug} = useParams();
  const filters = useSelector(showFilters);
  const finances = useSelector(showFinances);
  const rams = useSelector(showRams);
  const roms = useSelector(showRoms);

  useEffect(()=>{
    dispatch(getFiltersAsync({zoneId: slug}));
    const defaultFilter = {
      ...filters,
      finances: finances.map(item => ({id: item.id, value: item.name, isSelected: false})),
      rams: rams.map(item => ({id: item, value: item, isSelected: false})),
      roms: roms.map(item => ({id: item, value: item, isSelected: false})),
    }
    dispatch(setFilters(defaultFilter));
    dispatch(setPartialFilters(defaultFilter));
  }, [dispatch])
  

  return (
    <section className="home">
      <Header />
      <div className="home__container">
        <div className="home__banner">
          <img src="" alt="" />
        </div>
        <div className="home__layout">
          <aside className="home__bar">
            <Menu />
          </aside>
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
