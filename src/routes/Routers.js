import React from 'react';

import {Routes, Route, Navigate} from "react-router-dom";

import Home from "../pages/Home";
import Create from "../pages/Create";
import NftDetail from "../pages/NftDetail";
import Contact from "../pages/Contact";

const Routers = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/home"/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/create" element={<Create/>}/>
            <Route path="/Contact" element={<Contact/>}/>
            <Route path="/details/:contractAddress/:tokenId" element={<NftDetail/>}/>
        </Routes>
    );
};

export default Routers;