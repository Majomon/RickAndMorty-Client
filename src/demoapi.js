function onSearch(character) {
  const URL_BASE = "https://rickandmortyapi.com/api";
  const API_KEY = "b6892061a8d9.e2bb2e6f05488ea2cfc3";

  fetch(`${URL_BASE}/character/${character}?key=${API_KEY}`)
    .then((response) => response.json())
    .then((data) => {
      if (data.name) {
        setCharacters((oldChars) => [...oldChars, data]);
      } else {
        window.alert("No hay personajes con ese ID");
      }
    });
}
