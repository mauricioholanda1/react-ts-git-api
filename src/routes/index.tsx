import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Template } from '../Components/Template/Template';
import Profile from '../pages/Profile';



function RoutesApp() {
  return (
    <BrowserRouter>
      <Template>
        <Routes>
          <Route path="/" element={<Profile />} />
        </Routes>
      </Template>
    </BrowserRouter >
  );
}

export default RoutesApp;
