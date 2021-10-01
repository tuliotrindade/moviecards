import React from 'react';
import { BrowserRouter, Link, Switch } from 'react-router-dom';
import { Route } from 'react-router';
import MovieList from './pages/MovieList';
import MovieDetails from './pages/MovieDetails';
import NewMovie from './pages/NewMovie';
import EditMovie from './pages/EditMovie';
import NotFound from './pages/NotFound';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="barraTitulo">
        <h1 className="titulo">Movie Card Library CRUD</h1>
        <Link to="/movies/new">ADICIONAR CARTÃO</Link>
      </div>
      <Switch>
        <Route exact path="/" component={ MovieList } />
        <Route path="/movies/new" component={ NewMovie } />
        <Route
          exact
          path="/movies/:id"
          render={ (props) => <MovieDetails { ...props } /> }
        />
        <Route exact path="/movies/:id/edit" component={ EditMovie } />
        <Route path="" component={ NotFound } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
