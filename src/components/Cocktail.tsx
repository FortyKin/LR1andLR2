import React from 'react';
import { Link } from 'react-router-dom';
import { Cocktail as CocktailType } from '../types';

export const Cocktail: React.FC<{ cocktail: CocktailType }> = ({ cocktail }) => {
  return (
    <article className="cocktail">
      <div className="img-container">
        <img src={cocktail.image} alt={cocktail.name} />
      </div>
      <div className="cocktail-footer">
        <h3>{cocktail.name}</h3>
        <h4>{cocktail.glass}</h4>
        <p>{cocktail.info}</p>
        <Link to={`/cocktail/${cocktail.id}`} className="btn btn-primary">
          details
        </Link>
      </div>
    </article>
  );
};