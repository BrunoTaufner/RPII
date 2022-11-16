import React from 'react';
import GlobalStyle from './globalStyles';
import Home from './pages/index'
import Doacao from './pages/doacao'
import ListaEventos from './pages/listaEventos'
import BuscarOng from './pages/buscarOngs'
import Sobre from './pages/sobre'
import Login from './pages/login'
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/index';

import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';

function App() {
  return (
    <Router>
    <Navbar />
    <Routes>
      <Route exact path = '/' element = {<Home/>} />
      <Route path = '/sobre' element = {<Sobre/>} />
      <Route path = '/eventos' element = {<ListaEventos/>} />
      <Route path = '/buscarong' element = {<BuscarOng/>} />
      <Route path = '/doacao' element = {<Doacao/>} />
      <Route path = '/login' element = {<Login/>} />
    </Routes>
    <Footer/>
    </Router>
 
  );
}

export default App;
