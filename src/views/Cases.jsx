import React, { useEffect, useMemo, useState } from "react";
import Footer from "../components/Footer";
import Button from "../components/atoms/Button";
import Header from "../components/Header";
import "./../styles/css/Home.css";
import { useDispatch, useSelector } from "react-redux";
import { getCasesAsync, getFiltersAsync } from "../store/slices/main/async";
import { AnimatePresence, motion } from "framer-motion";
import Menu from "../components/Menu";
import { setCases, setFilters, setPartialFilters } from "../store/slices/main";
import {
  showCases,
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
import WppImage from "../assets/whatsapp.png";

function Cases() {
  const dispatch = useDispatch();
  const filters = useSelector(showFilters);
  const partialFilters = useSelector(showPartialFilters);
  const cases = useSelector(showCases);
  const pages = useSelector(showPages);
  const [isToggle, setIsToggle] = useState(false);
  const [isSearchToggle, setIsSearchToggle] = useState(false);
  const [isFiltered, setIsFiltered] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);

  useEffect(() => {
    dispatch(getFiltersAsync());
    dispatch(getCasesAsync({}));
  }, [dispatch]);

  useEffect(() => {
    if (isLoading) {
      if (cases.length > 0) {
        setIsLoading(false);
        setIsEmpty(false);
      } else {
        setTimeout(() => {
          if (cases.length == 0) {
            setIsLoading(false);
          }
        }, 3000);
      }
    }
  }, [cases]);

  useEffect(() => {
    if (!isLoading && cases.length == 0) {
      setIsEmpty(true);
    }
  }, [isLoading]);

  //validar numzone Federico
  //const numZone = { zoneId: slug };

  useEffect(() => {
    const options = {};
    const { searchValue, maxPay, models, page } = filters;
    const partialPage = partialFilters.page;
    if (searchValue) options.searchValue = searchValue;
    if (maxPay) options.maxPay = maxPay;
    options.models = models
      .filter((item) => item.isSelected)
      .reduce((prev, next) => {
        return `${prev}${prev && ","}${next.id}`;
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
      dispatch(getCasesAsync(options));
    }

    dispatch(setPartialFilters({ ...filters }));
    setIsFiltered(
      (searchValue && searchValue != "") ||
        maxPay ||
        models.some((item) => item.isSelected)
    );
  }, [filters]);

  const clearFilters = (filters) => {
    const models = filters.models.map((item) => ({
      ...item,
      isSelected: false,
    }));
    dispatch(
      setFilters({
        searchValue: "",
        models,
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

  //No sé qué hace esta mierda, eso lo hizo federico
  /* function numeroZona() {
    if (numZone.zoneId == "1889220000019320168") {
      return (
        <div className="WPP">
          <a href={`https://wa.me/message/NONM6JLQVSJXL1`} target="_blank">
            <img src={WppImage} alt="" />
          </a>
        </div>
      );
    } else {
      (function (d, s, t, id) {
        var js,
          fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s);
        js.id = t;
        js.src =
          "https://app.plazbot.com/Widget/plazbot-archivos/plazbot-chat/Plazbot.frame.js?version=3.3.0.0&var1=" +
          id;
        js.defer = true;
        fjs.parentNode.insertBefore(js, fjs);
      })(
        document,
        "script",
        "id-chat-plazbot",
        "7da22a7ffb41841bd5d81db7f45f989a"
      );
    }
  } */

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
                    {filters.models
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
                              removeFilter(id, "models", filters)
                            }
                            hover={true}
                          >
                            Modelo: {item.value}
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
                          Precio Máximo: {currencyFormat(filters.maxPay)}
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
                    ? cases.map((item) => <Card key={item.id} data={item} />)
                    : [1, 2, 3, 4, 5, 6].map((item) => (
                        <Skeleton key={item}></Skeleton>
                      ))}
                  {isEmpty && cases.length == 0 && <NotFound />}
                </div>
                <div className="home__paging">
                  {!isLoading &&
                    cases &&
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
      {/* enriqueNum() */}
      {/*       {numeroZona()}
       */}{" "}
      {/* <div id="api-chat-bot"></div> */}
    </section>
  );
}

export default Cases;
