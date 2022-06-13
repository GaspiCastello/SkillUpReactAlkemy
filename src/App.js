import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Favorites from './pages/Favorites';
import Home from './pages/Home';
import Layout from './components/Layout/Layout';
import MovieDetail from './pages/MovieDetail';

function App() {
  return (
    <Layout>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/:movieId" element={<MovieDetail />} />
        <Route path="favorites" element={<Favorites />} />
      </Routes>
    </Layout>
  );
}

export default App;
