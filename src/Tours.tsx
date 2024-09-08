import React from 'react';
import Tour from './Tour';
import { Tour as TourType } from './types';

interface ToursProps {
  tours: TourType[];
  removeTour: (id: string) => void;
}

const Tours: React.FC<ToursProps> = ({ tours, removeTour }) => {
  return (
    <section>
      <div className="title">
        <h2>Our tours</h2>
        <div className="underline"></div>
      </div>
      <div>
        {tours.map((tour) => (
          <Tour key={tour.id} {...tour} removeTour={removeTour} />
        ))}
      </div>
    </section>
  );
};

export default Tours;