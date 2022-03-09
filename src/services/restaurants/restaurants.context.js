import React, { useState, createContext, useEffect, useMemo } from "react";
import {
  restaurantsRequest,
  restaurantsTransform,
} from "./restaurants.services";

export const RestaurantsContext = createContext();
export const RestaurantsContextProvider = ({ children }) => {
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const retrieveRestraunts = () => {
    setIsLoading(true);
    setTimeout(() => {
      restaurantsRequest()
        .then(restaurantsTransform)
        .then((results) => {
          setRestaurants(results);
          setIsLoading(false);
        })
        .catch((err) => {
          setError(err);
          setIsLoading(false);
        });
    }, 2000);
  };

  useEffect(() => {
    retrieveRestraunts();
  }, []);

  console.log("restaurants");
  return (
    <RestaurantsContext.Provider value={{ restaurants, isLoading, error }}>
      {children}
    </RestaurantsContext.Provider>
  );
};
