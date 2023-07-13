import React, { useState } from "react";
import style from "./Form.module.css";
import {validateUser,validatePassword} from "./validate"

export default function Form({ login }) {
  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    username: "",
    password: "",
  });

  const handleInputChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;

    setUserData({ ...userData, [property]: value });
    if(property==="username") validateUser({[property]: value }, setErrors, errors)
    if(property==="password") validatePassword({[property]: value }, setErrors, errors)
  };

  const submitHandler = (event) => {
    event.preventDefault();
    login(userData);
  };
  return (
    <form onSubmit={submitHandler} className={style.form}>
      <div>
        <label htmlFor="username">Username: </label>
        <input
          type="text"
          name="username"
          value={userData.username}
          onChange={handleInputChange}
        />
        <h2>{errors.username}</h2>
      </div>
      <div>
        <label htmlFor="password">Password: </label>
        {/* Cambiamos el tipo de input a "password" */}
        <input
          type="password"
          name="password"
          value={userData.password}
          onChange={handleInputChange}
        />
        <h2>{errors.password}</h2>
      </div>
      <button>LOGIN</button>
    </form>
  );
}
