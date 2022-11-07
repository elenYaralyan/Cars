import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../components/Home';
import More from '../components/More';
import PassCars from '../components/PassCars';
import Register from '../components/Register';

function RootRouter() {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/register' element={<Register />} />
                <Route path="/company" element={<More />} />
                <Route path='/passCars' element={<PassCars/>}/>
                <Route path='*' element={<Home />} />
            </Routes>
        </>
    )
}

export default RootRouter