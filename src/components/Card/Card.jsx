import React, { useEffect, useState } from "react";
/* import { connect } from "react-redux"; */
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useLocation } from "react-router-dom";
import imageFav from "../../assets/removeFavorite.gif";
import { addFavorites, removeFavorite } from "../../redux/actions";
import styles from "./Card.module.css";

export default function Card({ id, name, species, gender, image, onClose }) {
  const [isFav, setIsFav] = useState(false);
  const pathname = useLocation();
  const [mostrarImagen, setMostrarImagen] = useState(false);
  const dispatch = useDispatch();
  const myFavorites = useSelector((state) => state.myFavorites);

  const mostrarImagenFav = async () => {
    await setMostrarImagen(true);
    setTimeout(() => {
      setMostrarImagen(false);
    }, 1900);
  };

  /*   //! Cada que cargue el componente me trae los favoritos
  useEffect(() => {
    dispatch(getFavorites());
  }, [isFav]); */

  //! Cada que cargue el componente me trae el estado local de myFavorites
  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === id) {
        setIsFav(true);
      }
    });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  //! Para agregar a favoritos
  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      mostrarImagenFav();
      dispatch(removeFavorite(id));
    } else {
      //! Primero seteo en Verdadero al estado "isFav"
      setIsFav(true);
      //! Hago una petición POST a mi servidor y agrego mi card Favorita
      dispatch(
        addFavorites({
          id,
          name,
          species,
          gender,
          image,
        })
      );
      /*       //! Pido que me traiga a mis favoritos por medio de una petición GET a mi servidor
      dispatch(getFavorites()); */
    }
  };

  return (
    <div className={styles.caja}>
      {isFav ? (
        <button onClick={handleFavorite} className={styles.corazonRojo}>
          ❤️
        </button>
      ) : (
        <button onClick={handleFavorite} className={styles.corazonBlanco}>
          🤍
        </button>
      )}
      <div className={styles.cajaCard}>
        <div className={styles.cajaCardOnClick}>
          {pathname.pathname !== "/favorites" && (
            <button onClick={() => onClose(id)} className={styles.cardOnClick}>
              X
            </button>
          )}
        </div>

        <NavLink className={styles.cardInfo} to={`/detail/${id}`}>
          <h2 className={styles.cardName}>{name}</h2>
        </NavLink>
        <h2 className={styles.cardSpecies}>{species}</h2>
        <h2 className={styles.cardGender}>{gender}</h2>
        <img className={styles.cardImage} src={image} alt={name} />
      </div>
      {mostrarImagen && (
        <img
          src={imageFav}
          alt="Imagen"
          className={`${styles.imagenAparicion} ${
            mostrarImagen ? styles.imagenAparece : ""
          }`}
        />
      )}
    </div>
  );
}

/* // Crea una funcion con el mismo nombre y las haces dispatch osea las mejoras, esto va a las props - Linea 8
const mapDispatchToProps = (dispatch) => {
  return {
    addFavorites: (character) => {
      dispatch(addFavorites(character));
    },
    removeFavorite: (id) => {
      dispatch(removeFavorite(id));
    },
    getFavorites: () => {
      dispatch(getFavorites());
    },
  };
}; */

/* //! Como es componente de clase traigo mi estado global de redux por medio de mapStateToProps
const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
}; */
/* 
export default connect(mapStateToProps, mapDispatchToProps)(Card); */
//              Traigo el estado global si llego a necesitarlo - mapStateToProps
//              mapDispatchToProps = Como quiero modificar el estado favorites hago
//              Manda todo a las props en este caso de CARD
