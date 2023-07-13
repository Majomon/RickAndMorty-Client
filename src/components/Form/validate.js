export const validateUser = (userData, setErrors, errors) => {
  if (!userData.username) {
    setErrors({ ...errors, username: "Email vacío" });
  } else if (userData.username.length > 35) {
    setErrors({ ...errors, username: "Demasiados caracteres - El máx es de 35" });
  } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3})+$/.test(userData.username)) {
    setErrors({ ...errors, username: "Email inválido" });
  } else {
    setErrors({ ...errors, username: "" })
  }
};
export const validatePassword=(userData, setErrors, errors)=>{
    if (!userData.password) {
      setErrors({ ...errors, password: "Por favor, completa este campo" })
    } else if (!/\d/.test(userData.password)) {
      setErrors({ ...errors, password: "La contraseña debe tener al menos un número" })
    } else if (userData.password.length < 6 || userData.password.length > 10) {
      setErrors({ ...errors, password: "La contraseña debe tener una longitud entre 6 y 10 caracteres" })
    } else {
      setErrors({ ...errors, password: "" })
    }
    
}
