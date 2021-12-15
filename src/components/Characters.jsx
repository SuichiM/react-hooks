import React, {useState, useEffect, useReducer, useMemo} from "react";
import Search from "./Search";

const initialState = {
  favorites: [],
};

const favoriteReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_FAVORITE":
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    case "DELETE_TO_FAVORITE":
      return {
        ...state,
        favorites: [
          ...state.favorites.filter(
            (favorite) => favorite.id !== action.payload.id
          ),
        ],
      };
    default:
      return state;
  }
};

const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const [favorites, dispatch] = useReducer(favoriteReducer, initialState);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character/")
      .then((response) => response.json())
      .then((data) => setCharacters(data.results));
  }, []);

  const handleClick = (favorite) => {
    dispatch({type: "ADD_TO_FAVORITE", payload: favorite});
  };

  const removeFav = (favorite) => {
    dispatch({type: "DELETE_TO_FAVORITE", payload: favorite});
  };

  const handleSearch = (e) => setSearch(e.target.value);

  const filteredUsers = useMemo(
    () =>
      characters.filter(({name}) =>
        name.toLowerCase().includes(search.toLowerCase())
      ),
    [characters, search]
  );

  useMemo(
    () =>
      characters.filter((user) => {
        return user.name.toLowerCase().includes(search.toLocaleLowerCase());
      }),
    [characters, search]
  );

  return (
    <div className="characters">
      <h2> Favorites</h2>
      <div style={{display: "flex", flexWrap: "wrap"}}>
        {favorites.favorites.map((favorite) => (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginInline: ".5rem",
            }}
            key={favorite.id}
          >
            <img
              className="rounded-circle favoriteCircle"
              width={64}
              src={favorite.image}
              alt={favorite.name}
            />
            <button type="button" onClick={() => removeFav(favorite)}>
              Eliminar
            </button>
          </div>
        ))}
      </div>

      <Search search={search} handleSearch={handleSearch} />
      <h2>Characters</h2>
      <div style={{display: "flex", flexWrap: "wrap"}}>
        {filteredUsers.map((character) => (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginInline: ".5rem",
            }}
            key={character.id}
          >
            <h2>{character.name}</h2>
            <img
              className="rounded-circle favoriteCircle"
              width={64}
              src={character.image}
              alt={character.name}
            />
            <button type="button" onClick={() => handleClick(character)}>
              Agregar a Favoritos
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Characters;
