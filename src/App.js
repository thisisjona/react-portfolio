import React from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
import ContactForm from './components/Contact';

import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';




function App() {
  return (
    <div>
      <Nav></Nav>
      <main>
      <About></About>
      <ContactForm></ContactForm>
      <Portfolio></Portfolio>
       
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
