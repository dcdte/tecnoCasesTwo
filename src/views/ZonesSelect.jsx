import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { getZonesAsync } from "../store/slices/main/async";
import { showZones } from "../store/slices/main/selectors";
import "./../styles/css/ZonesSelect.css";

function ZonesSelect() {
  const zones = useSelector(showZones);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getZonesAsync());
    console.log(zones);
  }, [dispatch]);

  return (
    <section className="zonesSelect">
      <Header withZone={false} />
      <div className="zones">
        <h1 className="zones__title">Elige la zona en la que te encuentras</h1>
        <div className="zones__container">
          {zones.map((item) => (
            <Link to={`/home?zone=${item.id}`} className="zones__link">
              <div className="zones__zone">{item.subzone}</div>
            </Link>
          ))}
        </div>
      </div>
      <Footer location={true}/>
    </section>
  );
}

export default ZonesSelect;
