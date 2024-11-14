import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Loading } from '../components/Loading';
import { Cocktail } from '../types';

export const SingleCocktail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [loading, setLoading] = useState(false);
  const [cocktail, setCocktail] = useState<Cocktail | null>(null);

  useEffect(() => {
    setLoading(true);
    async function getCocktail() {
      try {
        const response = await fetch(
          `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11007${id}`
        );
        const data = await response.json();

        if (data.drinks) {
          const drink = data.drinks[0];
          const newCocktail: Cocktail = {
            id: drink.idDrink,
            name: drink.strDrink,
            image: drink.strDrinkThumb,
            info: drink.strAlcoholic,
            category: drink.strCategory,
            glass: drink.strGlass,
            instruction: drink.strInstructions,
            ingredients: [
              drink.strIngredient1,
              drink.strIngredient2,
              drink.strIngredient3,
              drink.strIngredient4,
              drink.strIngredient5,
            ].filter(Boolean),
          };
          setCocktail(newCocktail);
        } else {
          setCocktail(null);
        }
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    }
    getCocktail();
  }, [id]);

  if (loading) {
    return <Loading />;
  }

  if (!cocktail) {
    return <h2 className="section-title">no cocktail to display</h2>;
  }

  return (
    <section className="section cocktail-section">
      <Link to="/" className="btn btn-primary">
        back home
      </Link>
      <h2 className="section-title">{cocktail.name}</h2>
      <div className="drink">
        <img src={cocktail.image} alt={cocktail.name} />
        <div className="drink-info">
          <p>
            <span className="drink-data">category:</span>
            {cocktail.category}
          </p>
          <p>
            <span className="drink-data">info:</span>
            {cocktail.info}
          </p>
          <p>
            <span className="drink-data">glass:</span>
            {cocktail.glass}
          </p>
          <p>
            <span className="drink-data">instruction:</span>
            {cocktail.instruction}
          </p>
          <p>
            <span className="drink-data">ingredients:</span>
            {cocktail.ingredients.map((item, index) => (
              <span key={index}>{item}{index < cocktail.ingredients.length - 1 ? ', ' : ''}</span>
            ))}
          </p>
        </div>
      </div>
    </section>
  );
};