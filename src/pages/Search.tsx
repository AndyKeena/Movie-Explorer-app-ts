import React, { useState, useEffect } from 'react';
import { allMovies } from '../components/MovieList';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import '../css/MovieDet.css';

interface Movie {
  id: number;
  title: string;
  image: string;
  releaseYear: string;
}

const Search: React.FC = () => {
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


  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<Movie[]>([]);

  useEffect(() => {
    const filteredMovies = allMovies.filter((movie) =>
      movie.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    setSearchResults(filteredMovies);
  }, [searchQuery]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div>
      <div className="center-container">
        <h2>Search Movies</h2>
        <input
          type="text"
          placeholder="Search movies..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>

      <div className="movie-container">
        {searchResults.map((movie) => (
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

export default Search;
