import { useEffect, useState } from "react";
import {
  Navigate,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import "./App.css";
import Cards from "./components/Cards/Cards";
import Detail from "./components/Detail/Detail";
import Favorites from "./components/Favorites/Favorites";
import Form from "./components/Form/Form";
import NavBar from "./components/NavBar/NavBar";
import About from "./components/views/About";

function App() {
  const [characters, setCharacters] = useState([]);

  // Devuelve un objeto con una propiedad que contiene la ruta
  const pathname = useLocation();

  // Control de acceso
  const [access, setAccess] = useState(false);

  // Navegacion luego del login
  const navigate = useNavigate();

  useEffect(() => {
    !access && navigate("/");
  }, [access, navigate]);

  useEffect(() => {
    const handleBackButton = () => {
      if (pathname.pathname === "/") {
        window.history.pushState(null, "", "/");
        navigate("/home");
      }
    };
    window.addEventListener("popstate", handleBackButton);
    return () => {
      window.removeEventListener("popstate", handleBackButton);
    };
  }, [pathname, navigate]);

  //Credenciales de mentira
  const username = "mauri@gmail.com";
  const password = "pass1234";

  const onSearch = (id) => {
    const URL_BASE = "https://rick-and-morty-api-gules.vercel.app";

    fetch(`${URL_BASE}/onsearch/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin":
          "https://rick-and-morty-client-vert.vercel.app",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.name && !characters.find((char) => char.id === data.id)) {
          setCharacters((oldChars) => [...oldChars, data]);
          // setCharacters([...characters, data]);
        } else {
          alert("Algo salió mal");
        }
      });
  };

  const onClose = (id) => {
    // porque filter.... no modifica el array original
    setCharacters(characters.filter((char) => char.id !== id));
  };

  const login = (userData) => {
    if (userData.username === username && userData.password === password) {
      setAccess(true);
      alert("Login Exitoso :D");
      navigate("/home");
    } else {
      alert("El usuario debe ser: mauri@gmail.com y password: pass1234");
    }
  };

  return (
    <div className="App">
      {pathname.pathname !== "/" && <NavBar onSearch={onSearch} />}
      <Routes>
        <Route
          path="/"
          element={access ? <Navigate to="/home" /> : <Form login={login} />}
        />
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/about" element={<About onClose={onClose} />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/detail/:detailId" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
