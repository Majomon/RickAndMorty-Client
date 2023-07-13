import React from "react";
import { useState } from "react";
import styles from "./SearchBar.module.css";
import { useLocation } from "react-router-dom";

export default function SearchBar({ onSearch }) {
  const [id, setId] = useState("");
  const pathname = useLocation();

  const handleChange = (event) => {
    setId(event.target.value);
  };

  return (
    <div className={styles.searchContainer}>
      {pathname.pathname === "/home" && (
        <div className={styles.searchCaja}>
          <input type="search" onChange={handleChange} />
          <button onClick={() => onSearch(id)}>Agregar</button>
        </div>
      )}
    </div>
  );
}
