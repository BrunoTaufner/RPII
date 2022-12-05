import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Catalog from './pages/Catalog';
import Home from './pages/index'
import Doacao from './pages/doacao'
import ListaEventos from './pages/listaEventos'
import BuscarOng from './pages/buscarOngs'
import Sobre from './pages/sobre'
import Login from './pages/login'
import ONG from 'pages/ong';

const routes = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route exact path = '/' element = {<Home/>} />
                    <Route path='/catalog' element={<Catalog />} exact />
                    <Route path = '/sobre' element = {<Sobre/>} />
                    <Route path = '/eventos' element = {<ListaEventos/>} />
                    <Route path = '/buscarong' element = {<BuscarOng/>} />
                    <Route path = '/doacao' element = {<Doacao/>} />
                    <Route path = '/login' element = {<Login/>} />
                    <Route path = '/ong' element = {<ONG/>} />
                </Routes>
            </BrowserRouter>
        </>
    )
}
// bla
export default routes
