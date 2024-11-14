import React from 'react';
import { SearchForm } from '../components/SearchForm';
import { CocktailList } from '../components/CocktailList';

export const Home: React.FC = () => {
  return (
    <main>
      <SearchForm />
      <CocktailList />
    </main>
  );
};