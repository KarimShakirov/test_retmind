import React from 'react';

import {Routes, Route, Navigate} from "react-router-dom";

import Home from "../pages/Home";
import Market from "../pages/Market";
import Create from "../pages/Create";
import EditProfile from "../pages/EditProfile";
import NftDetail from "../pages/NftDetail";
import Wallet from "../pages/Wallet";
import SellerProfile from "../pages/SellerProfile";
import Contact from "../pages/Contact";

const Routers = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/home"/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/market" element={<Market/>}/>
            <Route path="/create" element={<Create/>}/>
            <Route path="/edit-profile" element={<EditProfile/>}/>
            <Route path="/wallet" element={<Wallet/>}/>
            <Route path="/SellerProfile" element={<SellerProfile/>}/>
            <Route path="/Contact" element={<Contact/>}/>
            <Route path="/details/:contractAddress/:tokenId" element={<NftDetail/>}/>
        </Routes>
    );
};

export default Routers;