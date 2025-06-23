import React from 'react';
import './App.css';
import {NavBar} from './components/NavBar.js';
import {Banner} from './components/Banner.js';
import {Skills} from './components/Skills.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { MediumPosts } from './components/MediumPosts'; // Importa el componente MediumPosts


function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Experience />
      <MediumPosts /> 
      <Contact />
      <Footer />



      

    </div>
  );
}

export default App;
