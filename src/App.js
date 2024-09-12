import React from 'react';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import MovieDetails from './components/MovieDetails';
import SearchBar from './components/SearchBar';
import Reviews from './components/Reviews';
import './App.css';


function App() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
   <Router>
    <div className="app bg-rose-light px-12">
      <div 
        className='flex py-4 px-12 items-center justify-between sticky bg-rose-light top-0 z-10'
      >
        <Header />
        <SearchBar onSearch={handleSearch} />
      </div>
      <div className="content">
        <Routes>
          <Route path="/" element={<Home searchTerm={searchTerm}/>} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
        </Routes>
      </div>
    </div>
   </Router>
  );
}

export default App;
