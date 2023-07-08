import { useContext, createContext, useState } from "react";
import { restaurantsData } from "../data";

export const CuisineContext = createContext();

export function CuisineProvider({ children }) {
  const [restaurantCuisineData, setRestaurantCuisineData] = useState([]);

  const cuisineHandler = (cuisine_id, cuisine_name) => {
    // console.log({cuisine_id})
    // console.log({cuisine_name})
    const restaurantInfo = restaurantsData.filter(
      (item) => item.cuisine_id === cuisine_id
    );
    console.log(restaurantInfo)
    setRestaurantCuisineData(restaurantInfo)
  };

  return (
    <CuisineContext.Provider
      value={{
        cuisineHandler,
        restaurantCuisineData,
        setRestaurantCuisineData,
      }}
    >
      {children}
    </CuisineContext.Provider>
  );
}

export const useCuisine = () => useContext(CuisineContext);
