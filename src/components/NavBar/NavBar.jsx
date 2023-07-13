import React from "react";
import RickAndMorty from "../../assets/rick-and-morty.jpg";
import { NavLink } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import styles from "./NavBar.module.css";
import { useLocation } from "react-router-dom";


export default function NavBar(props) {
  const location = useLocation();
  return (
    <>
      <div className={styles.containerNavBar}>
        <div className={styles.navBar}>
          <NavLink to="/" className={styles.containerImg}>
            <img className={styles.imgTitulo} src={RickAndMorty} alt="imagen"></img>
          </NavLink>
          <div className={styles.containerLinks}>
            <NavLink
              to="/home"
              className={`${styles.navLink} ${location.pathname === "/home" ? styles.activeImg : ""}`}
            > 
              <h2 className={`${styles.h2NavLink} ${location.pathname === "/home" ? styles.activeLink : ""}` }>Home</h2>
            </NavLink>
            <NavLink
              to="/favorites"
              className={`${styles.navLink} ${location.pathname === "/favorites" ? styles.activeImg : ""}`}
            >
              <h2 className={`${styles.h2NavLink} ${location.pathname === "/favorites" ? styles.activeLink : ""}` }>Favorites</h2>
            </NavLink>
            <NavLink
              to="/about"
              className={`${styles.navLink} ${location.pathname === "/about" ? styles.activeImg : ""}`}
            >
              <h2 className={`${styles.h2NavLink} ${location.pathname === "/about" ? styles.activeLink : ""}` }>About</h2>
            </NavLink>
          </div>
          <SearchBar onSearch={props.onSearch} />
        </div>
      </div>
    </>
  );
}
