import React, {useState, useEffect, useReducer} from "react";

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

  return (
    <div className="Characters">
      <h2> Favorites</h2>

      {favorites.favorites.map((favorite) => (
        <li key={favorite.id}>
          <img
            className="rounded-circle favoriteCircle"
            width={64}
            src={favorite.image}
            alt={favorite.name}
          />
          <button type="button" onClick={() => removeFav(favorite)}>
            Eliminar
          </button>
        </li>
      ))}

      <h2>Characters</h2>
      <div style={{display: "flex"}}></div>
      {characters.map((character) => (
        <div key={character.id}>
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
  );
};

export default Characters;
