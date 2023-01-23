import React, { useEffect, useMemo, useState } from "react";
import Footer from "../components/Footer";
import Button from "../components/atoms/Button";
import Header from "../components/Header";
import "./../styles/css/Home.css";
import { useDispatch, useSelector } from "react-redux";
import { getDetailsAsync, getFiltersAsync } from "../store/slices/main/async";
import { useLocation, useParams } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Menu from "../components/Menu";
import {
  setDetails,
  setFilters,
  setPartialFilters,
} from "../store/slices/main";
import {
  showDetails,
  showFilters,
  showPages,
  showPartialFilters,
} from "../store/slices/main/selectors";
import TextInput from "../components/atoms/TextInput";
import Tag from "../components/atoms/Tag";
import Card from "../components/Card";
import currencyFormat from "../utils/currencyFormat";
import Skeleton from "../components/atoms/Skeleton";
import NotFound from "../components/atoms/NotFound";
import WppImage from '../assets/whatsapp.png'

function Home() {
  const dispatch = useDispatch();
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const slug = query.get("zone");
  const filters = useSelector(showFilters);
  const partialFilters = useSelector(showPartialFilters);
  const details = useSelector(showDetails);
  const pages = useSelector(showPages);

  const [isToggle, setIsToggle] = useState(false);
  const [isSearchToggle, setIsSearchToggle] = useState(false);
  const [isFiltered, setIsFiltered] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);

  useEffect(() => {
    dispatch(getFiltersAsync({ zoneId: slug }));
    dispatch(getDetailsAsync({ zoneId: slug }));
  }, [dispatch]);

  useEffect(() => {
    if (isLoading) {
      if (details.length > 0) {
        setIsLoading(false);
        setIsEmpty(false);
      } else {
        setTimeout(() => {
          if (details.length == 0) {
            setIsLoading(false);
          }
        }, 3000);
      }
    }
  }, [details]);

  useEffect(() => {
    if (!isLoading && details.length == 0) {
      setIsEmpty(true);
    }
  }, [isLoading]);

  useEffect(() => {
    const options = { zoneId: slug };
    const {
      searchValue,
      maxPay,
      finances,
      rams,
      roms,
      batterys,
      cameras,
      page,
    } = filters;
    const partialPage = partialFilters.page;
    if (searchValue) options.searchValue = searchValue;
    if (maxPay) options.maxPay = maxPay;
    options.ram = rams
      .filter((item) => item.isSelected)
      .reduce((prev, next) => {
        return `${prev}${prev && ","}${next.id}`;
      }, "");
    options.storage = roms
      .filter((item) => item.isSelected)
      .reduce((prev, next) => {
        return `${prev}${prev && ","}${next.id}`;
      }, "");
    options.financeId = finances
      .filter((item) => item.isSelected)
      .reduce((prev, next) => {
        return `${prev}${prev && ","}${next.id}`;
      }, "");
    options.battery = batterys
      .filter((item) => item.isSelected)
      .reduce((prev, next) => {
        return `${prev}${prev && ","}${next.id}`;
      }, "");
    options.camera = cameras
      .filter((item) => item.isSelected)
      .reduce((prev, next) => {
        return `${prev}${prev && ","}${next.id.replace(/\s+/, "")}`;
      }, "");
    if (page != partialPage) {
      setPage(page);
      options.page = page;
    } else {
      setPage(1);
      options.page = 1;
    }
    if (filters != partialFilters) {
      if (!isLoading) {
        setIsLoading(true);
      }
      dispatch(getDetailsAsync(options));
    }

    dispatch(setPartialFilters({ ...filters }));
    setIsFiltered(
      (searchValue && searchValue != "") ||
        maxPay ||
        finances.some((item) => item.isSelected) ||
        rams.some((item) => item.isSelected) ||
        roms.some((item) => item.isSelected) ||
        batterys.some((item) => item.isSelected) ||
        cameras.some((item) => item.isSelected)
    );
  }, [filters]);

  const clearFilters = (filters) => {
    const finances = filters.finances.map((item) => ({
      ...item,
      isSelected: false,
    }));
    const rams = filters.rams.map((item) => ({ ...item, isSelected: false }));
    const roms = filters.roms.map((item) => ({ ...item, isSelected: false }));
    const batterys = filters.batterys.map((item) => ({
      ...item,
      isSelected: false,
    }));
    const cameras = filters.cameras.map((item) => ({
      ...item,
      isSelected: false,
    }));
    dispatch(
      setFilters({
        searchValue: "",
        finances,
        rams,
        roms,
        batterys,
        cameras,
        maxPay: null,
        page: 1,
      })
    );
  };

  const removeFilter = (id, type, filters) => {
    const partial = { ...filters };
    if (type === "searchValue") {
      partial[type] = "";
    } else if (type === "maxPay") {
      partial[type] = null;
    } else {
      const arr = [...partial[type]];
      const index = arr.findIndex((item) => item.id === id);
      arr[index] = { ...arr[index], isSelected: false };
      partial[type] = arr;
    }
    dispatch(setFilters(partial));
  };

  const search = (searchValue, filters) => {
    const partial = { ...filters };
    partial.searchValue = searchValue.trim();
    dispatch(setFilters(partial));
    setSearchValue("");
    setIsSearchToggle(false);
  };

  const getNumbers = (page, pages) => {
    const numbersArr = [];
    for (let i = 1; i <= pages; i++) {
      numbersArr.push(i);
    }

    let prevPage,
      postPage = 0;
    if (page > 1) {
      if (page == pages && pages > 2) {
        prevPage = page - 3;
      } else {
        prevPage = page - 2;
      }
      postPage = page + 1;
    } else {
      prevPage = page - 1;
      postPage = page + 2;
    }
    return numbersArr.slice(prevPage, postPage);
  };

  return (
    <section className={`home ${isSearchToggle && "home--toggle"}`}>
      <Header
        isToggle={isToggle}
        setIsToggle={setIsToggle}
        isSearchToggle={isSearchToggle}
        setIsSearchToggle={setIsSearchToggle}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        search={search}
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
                <TextInput
                  value={searchValue}
                  setValue={setSearchValue}
                  placeholder="Buscar por marca o referencia"
                  field="searchValue"
                  type="text"
                />
                <Button
                  type="search"
                  handler={() => search(searchValue, filters)}
                />
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
            <div className="home__banner"></div>
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
                        transition={{ duration: 0.3 }}
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
                    {filters.batterys
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
                              removeFilter(id, "batterys", filters)
                            }
                            hover={true}
                          >
                            Batería: {item.value}
                          </Tag>
                        </motion.div>
                      ))}
                    {filters.cameras
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
                              removeFilter(id, "cameras", filters)
                            }
                            hover={true}
                          >
                            Cámara: {item.value}
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
                          Cuota Máxima: {currencyFormat(filters.maxPay)}
                        </Tag>
                      </motion.div>
                    )}
                    {isFiltered && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0 }}
                        transition={{ duration: 0.2 }}
                        key="clean"
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
                  {!isLoading
                    ? details.map((item) => <Card key={item.id} data={item} />)
                    : [1, 2, 3, 4, 5, 6].map((item) => <Skeleton key={item}></Skeleton>)}
                  {isEmpty && details.length == 0 && <NotFound />}
                </div>
                <div className="home__paging">
                  {!isLoading &&
                    details &&
                    getNumbers(page, pages).map((item) => (
                      <Button
                        text={item}
                        light={page === item ? "dark" : "light"}
                        handler={() => {
                          window.scroll({
                            top: 0,
                            behavior: "smooth",
                          });
                          dispatch(setFilters({ ...filters, page: item }));
                        }}
                        key={item}
                      ></Button>
                    ))}
                </div>
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
              <Menu isToggle={isToggle} setIsToggle={setIsToggle}></Menu>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
      <Footer />
      <div className="WPP">
        <a
          href="https://wa.me/573116853300?text=Hola!%20Quiero%20información%20de%20sus%20productos"
          target="_blank"
        >
          <img src={WppImage} alt="" />
        </a>
      </div>
    </section>
  );
}

export default Home;
