import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from '../Components/Template/Footer';
import Header from '../Components/Template/Header';
import Profile from '../pages/Profile';
import GlobalStyles from '../styles/GlobalStyles';



function RoutesApp() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Header />
      <Routes>
        <Route path="/" element={<Profile />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default RoutesApp;
