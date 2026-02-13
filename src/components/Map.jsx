import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import styles from "./Map.module.css";

const Map = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");
  const navigate = useNavigate()
  return (
    <div className={styles.mapContainer} onClick={function(){
      navigate("form")
    }}>
      <h1>Map</h1>
      <h2>{lat}</h2>
      <h2>{lng}</h2>
    </div>
  );
};

export default Map;
