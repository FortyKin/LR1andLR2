import React, { useRef, useEffect } from 'react';
import { useGlobalContext } from '../context/cocktailContext';

export const SearchForm: React.FC = () => {
  const { setSearchTerm } = useGlobalContext();
  const searchValue = useRef<HTMLInputElement>(null);

  useEffect(() => {
    searchValue.current?.focus();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const searchCocktail = () => {
    setSearchTerm(searchValue.current?.value || '');
  };

  return (
    <section className="section search">
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="name">search your favorite cocktail</label>
          <input
            type="text"
            id="name"
            ref={searchValue}
            onChange={searchCocktail}
          />
        </div>
      </form>
    </section>
  );
};