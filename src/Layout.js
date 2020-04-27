import React from 'react';
import Header from './Components/Header_Footer/Header';
import Footer from './Components/Header_Footer/Footer';

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    );
};

export default Layout;