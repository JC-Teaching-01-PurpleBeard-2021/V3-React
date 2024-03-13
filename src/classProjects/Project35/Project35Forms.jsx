import React, { useState } from 'react';
import nextId from 'react-id-generator';

import CPNavBar from '../_CPNavBar';

function Project35Forms() {
  const [myName, setMyName] = useState('Justin');
  const [movies, setMovies] = useState({
    movies: [
      { name: 'shawshank', rank: 5, year: 1990 },
      { name: 'batman', rank: 4.1, year: 2000 },
    ],
    movie: '',
    rank: '',
    year: '',
  });

  const updateName = () => {
    setMyName((n) => (n = `${myName} Heath`));
  };

  const handleChange = ({ target: { name, value } }) => {
    setMovies({ ...movies, hasChanged: true, [name]: value });
  };

  const updateform = (e) => {
    e.preventDefault();
    console.log(movies);
    const tempMovies = [
      ...movies.movies,
      { name: movies.movie, rank: movies.rank, year: movies.year },
    ];
    setMovies(() => ({ movies: tempMovies, movie: '', rank: '', year: '' }));
  };

  return (
    <div className="app-container">
      <CPNavBar />
      <div className="content">
        <h1>Task 1</h1>
        <p>Your first name is: {myName}</p>

        <button onClick={updateName}>Add Your Last Name</button>

        <h1>Task 2</h1>

        <ul>
          {movies.movies.map((m) => (
            <li key={nextId()}>
              Movie: <span style={{ color: 'red' }}>{m.name}</span> Which I
              ranked <span style={{ color: 'red' }}>{m.rank}</span> and I
              watched in <span style={{ color: 'red' }}>{m.year}</span>
            </li>
          ))}
        </ul>

        <form onSubmit={updateform}>
          {/* <form> */}
          <label htmlFor="movie">Movie</label>
          <br />
          <input
            type="text"
            name="movie"
            id="movie"
            value={movies.movie}
            onChange={handleChange}
          />
          <br />
          <br />
          <label htmlFor="rank">Rank</label>
          <br />
          <input
            type="number"
            name="rank"
            id="rank"
            value={movies.rank}
            onChange={handleChange}
          />
          <br />
          <br />
          <label htmlFor="year">Year</label>
          <br />
          <input
            type="number"
            name="year"
            id="year"
            value={movies.year}
            onChange={handleChange}
          />
          <br />
          <br />
          <button>Add</button>
        </form>
      </div>
    </div>
  );
}

export default Project35Forms;
