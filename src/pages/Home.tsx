import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/MovieDet.css';
import { moviesPopular } from '../components/MovieList';

interface Movie {
  id: number;
  title: string;
  image: string;
  releaseYear: string;
}

const Home: React.FC = () => {
  const navigate = useNavigate();

  const navigateToDetails = (id: number) => {
    navigate(
      '/details',
      {
          state: {
              id:id
          }
      }
)  };

  return (
    <div>
      <h2>
        <center>Popular Movies</center>
      </h2>
      <div className="movie-container">
        {moviesPopular.map((movie: Movie) => (
          <div className="movie-card" key={movie.id} onClick={() => navigateToDetails(movie.id)}>
            <img src={movie.image} alt={movie.title} />
            <h3>{movie.title}</h3>
            <p>{movie.releaseYear}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
