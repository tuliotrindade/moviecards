import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      loading: true,
    };
    this.Filmes = this.Filmes.bind(this);
  }

  componentDidMount() {
    this.Filmes();
  }

  async Filmes() {
    const saida = await movieAPI.getMovies();
    this.setState({
      movies: saida,
      loading: false,
    });
  }

  render() {
    const { movies, loading } = this.state;
    if (loading === true) { return <Loading />; }
    return (
      <div data-testid="movie-list">
        {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
      </div>
    );
  }
}

export default MovieList;
