import './App.css';
import React from 'react';
import Home from './pages/Home';
import SearchPage from './pages/SearchPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// https://clone-88c15.web.app

function App() {
  return (
    // BEM
    <div className="App">
      <header className="App-header">
        <Router>
          <Routes>

            {/* Home Page */}
            <Route path="/" element={<Home />} />

            {/* Search Page */}
            <Route path="/search" element={<SearchPage />} />

          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
