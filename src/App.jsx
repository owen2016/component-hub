import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import LanguageNav from './components/LanguageNav';
import ComponentGrid from './components/ComponentGrid';
import ComponentDetail from './components/ComponentDetail';
import './App.css';

function Home() {
  return (
    <div className="main-content">
      <LanguageNav />
      <ComponentGrid />
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/maven/:component" element={<ComponentDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App
