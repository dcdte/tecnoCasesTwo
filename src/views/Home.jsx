import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Button from "../components/atoms/Button";
import ButtonDropDown from "../components/atoms/ButtonDropDown";
import Header from "../components/Header";
import "./../styles/css/Home.css";
import { useDispatch, useSelector } from "react-redux";
import { getDetailsAsync, getFiltersAsync } from "../store/slices/main/async";
import { useParams } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Menu from "../components/Menu";
import { setFilters, setPartialFilters } from "../store/slices/main";
import {
  showDetails,
  showFilters,
  showFinances,
  showRams,
  showRoms,
} from "../store/slices/main/selectors";
import TextInput from "../components/atoms/TextInput";
import Tag from "../components/atoms/Tag";
import Card from "../components/Card";

function Home() {
  const dispatch = useDispatch();
  const { slug } = useParams();
  const filters = useSelector(showFilters);
  const finances = useSelector(showFinances);
  const rams = useSelector(showRams);
  const roms = useSelector(showRoms);
  const details = useSelector(showDetails);

  const [isToggle, setIsToggle] = useState(false);
  const [isSearchToggle, setIsSearchToggle] = useState(false);
  const [isFiltered, setIsFiltered] = useState(false);

  useEffect(() => {
    dispatch(getFiltersAsync({ zoneId: slug }));
    dispatch(getDetailsAsync({zoneId: slug}));
  }, [dispatch]);

  useEffect(() => {

    //dispatch(getDetailsAsync{})
    dispatch(setPartialFilters({ ...filters }));
    const { searchValue, maxPay, finances, rams, roms } = filters;
    setIsFiltered(
      searchValue ||
        maxPay ||
        finances.some((item) => item.isSelected) ||
        rams.some((item) => item.isSelected) ||
        roms.some((item) => item.isSelected)
    );
  }, [filters]);

  const clearFilters = (filters) => {
    const finances = filters.finances.map((item) => ({
      ...item,
      isSelected: false,
    }));
    const rams = filters.rams.map((item) => ({ ...item, isSelected: false }));
    const roms = filters.roms.map((item) => ({ ...item, isSelected: false }));
    dispatch(
      setFilters({
        finances,
        rams,
        roms,
        maxPay: null,
        searchValue: "",
      })
    );
  };

  const removeFilter = (id, type, filters) => {
    const partial = { ...filters };
    if (["maxPay", "searchValue"].includes(type)) {
      partial[type] = "";
    } else {
      const arr = [...partial[type]];
      const index = arr.findIndex((item) => item.id === id);
      arr[index] = { ...arr[index], isSelected: false };
      partial[type] = arr;
    }
    dispatch(setFilters(partial));
  };

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
                  <AnimatePresence>
                    {filters.searchValue && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0 }}
                        transition={{ duration: 0.2 }}
                        key="searchValue"
                      >
                        <Tag
                          handler={(id) =>
                            removeFilter(id, "searchValue", filters)
                          }
                          hover={true}
                        >
                          Búsqueda: {filters.searchValue}
                        </Tag>
                      </motion.div>
                    )}
                    {filters.finances
                      .filter((item) => item.isSelected)
                      .map((item) => (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          exit={{ scale: 0 }}
                          transition={{ duration: 0.3 }}
                          key={item.id}
                        >
                          <Tag
                            id={item.id}
                            handler={(id) =>
                              removeFilter(id, "finances", filters)
                            }
                            hover={true}
                          >
                            Financiera: {item.value}
                          </Tag>
                        </motion.div>
                      ))}
                    {filters.rams
                      .filter((item) => item.isSelected)
                      .map((item) => (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          exit={{ scale: 0 }}
                          transition={{ duration: 0.3 }}
                          key={item.id}
                        >
                          <Tag
                            id={item.id}
                            handler={(id) => removeFilter(id, "rams", filters)}
                            hover={true}
                          >
                            Ram: {item.value}
                          </Tag>
                        </motion.div>
                      ))}
                    {filters.roms
                      .filter((item) => item.isSelected)
                      .map((item) => (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          exit={{ scale: 0 }}
                          transition={{ duration: 0.3 }}
                          key={item.id}
                        >
                          <Tag
                            id={item.id}
                            handler={(id) => removeFilter(id, "roms", filters)}
                            hover={true}
                          >
                            Almacenamiento: {item.value}
                          </Tag>
                        </motion.div>
                      ))}
                    {filters.maxPay && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0 }}
                        transition={{ duration: 0.3 }}
                        key="maxPay"
                      >
                        <Tag
                          handler={(id) => removeFilter(id, "maxPay", filters)}
                          hover={true}
                        >
                          Cuota Máxima: ${filters.maxPay}
                        </Tag>
                      </motion.div>
                    )}
                    {isFiltered && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Tag
                          isActive={true}
                          handler={() => clearFilters(filters)}
                        >
                          Limpiar Filtros
                        </Tag>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                <div className="home__products">
                  {details && details.map(item => <Card key={item.id} data={item}/>)}
                  
                </div>
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
              <Menu >

              </Menu>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
      <Footer />
    </section>
  );
}

export default Home;
