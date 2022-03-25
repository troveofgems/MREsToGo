import React, { createContext, useState } from "react";

export const FavoritesContext = createContext();

export const FavoritesContextProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const addToFavorites = (militaryBase) => {
    setFavorites([...favorites, militaryBase]);
  };

  const removeFromFavorites = (militaryBase) => {
    const filteredDataset = favorites.filter(
      (base) => base.placeId !== militaryBase.placeId
    );
    setFavorites(filteredDataset);
  };

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        addToFavorites,
        removeFromFavorites,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};
