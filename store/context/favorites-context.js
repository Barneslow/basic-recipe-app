import { createContext, useState } from "react";

export const FavoritesContext = createContext({
  ids: [],
  addFavorite: (id) => {},
  removeFavorite: (id) => {},
});

function FavoritesContextProvider({ children }) {
  const [favoriteMealIds, setfavoriteMealIds] = useState([]);

  function addFavorite(id) {
    setfavoriteMealIds((prevState) => [...prevState, id]);
  }

  function removeFavorite(id) {
    setfavoriteMealIds((prevState) => [
      ...prevState.filter((mealId) => mealId !== id),
    ]);
  }

  const value = {
    ids: favoriteMealIds,
    addFavorite,
    removeFavorite,
  };

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContextProvider;
