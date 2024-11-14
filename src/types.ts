export interface Cocktail {
    id: string;
    name: string;
    image: string;
    info: string;
    glass: string;
    category: string;
    instruction: string;
    ingredients: string[];
  }
  
  export interface CocktailContextType {
    loading: boolean;
    cocktails: Cocktail[];
    searchTerm: string;
    setSearchTerm: (term: string) => void;
  }