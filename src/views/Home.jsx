import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Button from "../components/atoms/Button";
import ButtonDropDown from "../components/atoms/ButtonDropDown";
import Header from "../components/Header";
import "./../styles/css/Home.css";
import { useDispatch, useSelector } from "react-redux";
import { getFiltersAsync } from "../store/slices/main/async";
import { useParams } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Menu from "../components/Menu";
import { setFilters, setPartialFilters } from "../store/slices/main";
import {
  showFilters,
  showFinances,
  showRams,
  showRoms,
} from "../store/slices/main/selectors";
import TextInput from "../components/atoms/TextInput";
import Tag from "../components/atoms/Tag";

function Home() {
  const dispatch = useDispatch();
  const { slug } = useParams();
  const filters = useSelector(showFilters);
  const finances = useSelector(showFinances);
  const rams = useSelector(showRams);
  const roms = useSelector(showRoms);

  const [isToggle, setIsToggle] = useState(false);
  const [isSearchToggle, setIsSearchToggle] = useState(false);

  useEffect(() => {
    dispatch(getFiltersAsync({ zoneId: slug }));
  }, [dispatch]);

  const search = () => {};

  return (
    <section className={`home ${isSearchToggle && "home--toggle"}`}>
      <Header
        isToggle={isToggle}
        setIsToggle={setIsToggle}
        isSearchToggle={isSearchToggle}
        setIsSearchToggle={setIsSearchToggle}
      />
      <AnimatePresence>
        {isSearchToggle && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="home__search"
          >
            <div className="home__box">
              <motion.div
                initial={{ y: -50, opacity: 1 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -50, opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="home__contain"
              >
                <TextInput placeholder="Marca o Referencia" />
                <Button type="search" handler={search} />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {!isToggle && (
          <motion.div
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 300, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="home__container"
          >
            <div className="home__banner">
              <img src="" alt="" />
            </div>
            <div className="home__layout">
              <aside className="home__bar">
                <Menu />
              </aside>
              <div className="home__details">
                <div className="home__tags">
                  {filters.searchValue && (
                    <Tag hover={true}>Búsqueda: {filters.searchValue}</Tag>
                  )}
                  {filters.finances?.some((item) => item.isSelected) &&
                    filters.finances
                      .map((item) => (
                        <Tag hover={true}>Financiera: {item.value}</Tag>
                      ))}
                  {/* {filters.rams?.some((item) => item.isSelected) &&
                    filters.rams
                      .filter((item) => item.isSelected)
                      .map((item) => <Tag hover={true}>Ram: {item.value}</Tag>)}
                  {filters.roms?.some((item) => item.isSelected) &&
                    filters.roms
                      .filter((item) => item.isSelected)
                      .map((item) => (
                        <Tag hover={true}>Almacenamiento: {item.value}</Tag>
                      ))} */}
                  {filters.maxPay && (
                    <Tag hover={true}>Cuota Máxima: ${filters.maxPay}</Tag>
                  )}
                  <Tag isActive={true}>Limpiar Filtros</Tag>
                </div>
                <div className="home__products"></div>
                <div className="home__paging"></div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {isToggle && (
          <motion.aside
            initial={{ x: -300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="home__sidebar"
          >
            <div className="home__collapse">
              <Menu />
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
      <Footer />
    </section>
  );
}

export default Home;
