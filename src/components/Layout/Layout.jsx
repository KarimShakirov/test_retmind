import React from 'react';
import Routers from '../../routes/Routers';
import Header from "../Header/Header";

const Layout = () => {
    return (
        <>
            <Header />
            <div>
                <Routers />
            </div>
        </>
    );
};

export default Layout;