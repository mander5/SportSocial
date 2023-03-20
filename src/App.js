import React from 'react';

import { Gallery, Header, Footer } from './container';
import { Brand, Navbar, Contact } from './components';
import './App.css';

const App = () => (
  <div>
    <Navbar />
    <Header />
    <Brand />
    <Gallery />
    <Contact />
    <Footer />
  </div>
);

export default App;
