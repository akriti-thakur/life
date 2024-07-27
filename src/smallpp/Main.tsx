import React from 'react';
import NavBar from './Layout.tsx'
import {Footer} from './Layout.tsx';
import { Home } from './Home.tsx';
import { NotFound } from './Home.tsx';
import { Contact } from './Home.tsx';
import { BrowserRouter,Route,Routes} from 'react-router-dom';
import ProDuct from './Product.tsx';


function Fog() {
    return <>
    <BrowserRouter>
        <NavBar />
        <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/product" element={<ProDuct/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
     
        <Footer /> 
        </BrowserRouter>
    </>;

}

export default Fog