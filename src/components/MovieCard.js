import React from 'react';
import '../App.css'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    return (
      <div className="cards">
        <div data-testid="movie-card">
          <h2>{movie.title}</h2>
          <img src={ movie.imagePath } className="img"></img>
          <p>Resumo: {movie.storyline}</p>
          <p>Nota: { movie.rating }</p>
          <Link to={ `/movies/${movie.id}` }>VER DETALHES</Link>
        </div>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.objectOf({ title: PropTypes.string,
    storyline: PropTypes.string,
    id: PropTypes.number }).isRequired,
};

export default MovieCard;
