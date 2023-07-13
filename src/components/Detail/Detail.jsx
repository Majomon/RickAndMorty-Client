import React from "react";
import { useState, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import axios from "axios";
import style from "./Detail.module.css";

export default function Detail() {
  // Toma el valor gurdado en /detailID
  /*  const params=useParams(); */
  const { detailId } = useParams();

  const [character, setCharacter] = useState({});
  // Cuando el componente se monta se ejecuta la petición
  // npm i axios - uso similar a fetch
  useEffect(() => {
    /*     const URL_BASE = "https://be-a-rym.up.railway.app/api";
    const KEY = "b6892061a8d9.e2bb2e6f05488ea2cfc3"; */
    const URL_BASE = "https://rickapi.onrender.com/";

    axios(`${URL_BASE}/detail/${detailId}`).then((response) =>
      setCharacter(response.data)
    );
  }, [detailId]);

  return (
    <div className={style.characterContainer}>
      {character.name ? (
        <>
          <div className={style.characterCard}>
            <div className={style.characterCardInfo}>
              <h2 className={style.characterCardName}>{character.name}</h2>
              <p className={style.characterCardStatus}>
                Estado: {character.status}
              </p>
              <p className={style.characterCardSpecies}>
                Especie: {character.species}
              </p>
              <p className={style.characterCardGender}>
                Género: {character.gender}
              </p>
              <p className={style.characterCardOrigin}>
                Oringen: {character.origin?.name}
              </p>{" "}
              {/* Cuando nos aseguremos que de origin llega recien monta todo */}
            </div>
            <img
              className={style.characterCardImage}
              src={character.image}
              alt="img"
            />
          </div>
          <NavLink to="/home" className={style.navLinkDetaill}>
            Volver
          </NavLink>
        </>
      ) : (
        <div className={style.characterContainer}>
          <div className={style.characterCard}>
            <div className={style.skChaseContainer}>
              <h2>Cargando</h2>
              <div className={style.skChase}>
                <div className={style.skChaseDot}></div>
                <div className={style.skChaseDot}></div>
                <div className={style.skChaseDot}></div>
                <div className={style.skChaseDot}></div>
                <div className={style.skChaseDot}></div>
                <div className={style.skChaseDot}></div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
