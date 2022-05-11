import React from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';

import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

function App() {
  return (
    <div>
      <Nav></Nav>
      <main>
      <About></About>
       
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
