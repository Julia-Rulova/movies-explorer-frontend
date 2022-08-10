import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import './App.css';

import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
// import NotFound from '../NotFound/NotFound';
import Register from '../Register/Register';
import Login from '../Login/Login';

function App() {
  const [loading, setLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="app">
      <Routes>

        <Route
        path="/"
        element={<Main />}
        isLoggedIn={isLoggedIn}
        />

        <Route
        path="/movies"
        element={<Movies />}
        />

        <Route
        path="/saved-movies"
        element={<SavedMovies />}
        />

        <Route
        path="/profile"
        element={<Profile />}
        />

        <Route
        path="/signup"
        element={<Register />}
        />

        <Route
        path="/signin"
        element={<Login />}
        />

      </Routes>
    </div>
  );
}

export default App;
