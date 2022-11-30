import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Catalog from './pages/Catalog';

const routes = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/catalog' element={<Catalog />} exact />
                </Routes>
            </BrowserRouter>
        </>
    )
}
// bla
export default routes
