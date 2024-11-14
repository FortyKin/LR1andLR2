import React, { createContext, useState, useCallback, useContext, useEffect } from 'react';
import { Cocktail, CocktailContextType } from '../types';

const CocktailContext = createContext<CocktailContextType>({
  loading: false,
  cocktails: [],
  searchTerm: 'a',
  setSearchTerm: () => {},
});

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('a');
  const [cocktails, setCocktails] = useState<Cocktail[]>([]);

  const fetchDrinks = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita${searchTerm}`
      );
      const data = await response.json();
      
      if (data.drinks) {
        const newCocktails = data.drinks.map((item: any) => {
          const {
            idDrink,
            strDrink,
            strDrinkThumb,
            strAlcoholic,
            strGlass,
            strCategory,
            strInstructions,
          } = item;

          return {
            id: idDrink,
            name: strDrink,
            image: strDrinkThumb,
            info: strAlcoholic,
            glass: strGlass,
            category: strCategory,
            instruction: strInstructions,
            ingredients: [
              item.strIngredient1,
              item.strIngredient2,
              item.strIngredient3,
              item.strIngredient4,
              item.strIngredient5,
            ].filter(Boolean),
          };
        });
        setCocktails(newCocktails);
      } else {
        setCocktails([]);
      }
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  }, [searchTerm]);

  useEffect(() => {
    fetchDrinks();
  }, [searchTerm, fetchDrinks]);

  return (
    <CocktailContext.Provider value={{ loading, cocktails, searchTerm, setSearchTerm }}>
      {children}
    </CocktailContext.Provider>
  );
};

export const useGlobalContext = () => {
  const context = useContext(CocktailContext);
  if (!context) {
    throw Error('useGlobalContext must be used within an AppProvider');
  }
  return context;
};