// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './componets/Header';
import Home from './componets/Home';
import About from './componets/About';
import Contact from './componets/Contact';
import Login from './componets/Login';

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" exact element= { <Home/>} />
          <Route path="/about" element= { <About/>} />
          <Route path="/contact" element= { <Contact/>} />
          <Route path="/Login" element= { <Login/>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
