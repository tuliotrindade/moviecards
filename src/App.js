import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router';
import MovieList from './pages/MovieList';
import MovieDetails from './pages/MovieDetails';
import NewMovie from './pages/NewMovie';
import EditMovie from './pages/EditMovie';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <div>Movie Card Library CRUD</div>
      <Route exact path="/" component={ MovieList } />
      <Route
        exact
        path="/movies/:id"
        render={ (props) => <MovieDetails { ...props } /> }
      />
      <Route exact path="/movies/new" component={ NewMovie } />
      <Route exact path="/movies/:id/edit" component={ EditMovie } />
      <Route path="" component={ NotFound } />
    </BrowserRouter>
  );
}

export default App;
