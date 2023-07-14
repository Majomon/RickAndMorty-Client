import React from "react";
import style from "./About.module.css";
import Yo from "../../assets/io.jpg";
import github from "../../assets/gitHub.png";
import facebook from "../../assets/facebook.png";
import linkedin from "../../assets/linkedin.png";

export default function About() {
  return (
    <div className={style.aboutContainer}>
      <div className={style.aboutInfo}>
        <div className={style.aboutInfoPersonal}>
          <img src={Yo} alt="Yo" className={style.aboutImage} />
          <div className={style.aboutInfoPersonalDetalles}>
            <h1>Mauricio Monzón</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
              aspernatur ad eum dolor vel quo laudantium amet libero ea
              asperiores consequuntur illo recusandae minus voluptates, nulla
              debitis doloremque animi ex.
            </p>
          </div>
          <div className={style.redes}>
            <a
              href="https://github.com/Majomon"
              target={"_blank"}
              rel="noopener noreferrer"
            >
              <img src={github} alt={github} className={style.iconRedes} />
            </a>
            <a
              href="https://www.facebook.com/mauri.monzon.568/"
              target={"_blank"}
              rel="noopener noreferrer"
            >
              <img src={facebook} alt={facebook} className={style.iconRedes} />
            </a>
            <a
              href="https://www.linkedin.com/in/mauricio-monzon/"
              target={"_blank"}
              rel="noopener noreferrer"
            >
              <img src={linkedin} alt={linkedin} className={style.iconRedes} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
