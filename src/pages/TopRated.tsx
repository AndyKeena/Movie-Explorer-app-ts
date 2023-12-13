import React from 'react';
import { topRatedMovies } from '../components/MovieList';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import '../css/MovieDet.css';

const TopRated = () => {
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
        <center>Top Rated Movies</center>
      </h2>
      <div className="movie-container">
        {topRatedMovies.map((movie) => (
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

export default TopRated;
