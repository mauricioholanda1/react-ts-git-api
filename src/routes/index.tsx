import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Template } from '../Components/Template/Template';
import Profile from '../pages/Profile';
import Repo from '../pages/Repo';



function RoutesApp() {
  return (
    <BrowserRouter>
      <Template>
        <Routes>
          <Route path="/" element={<Profile />} />
          <Route path="/:username" element={<Profile />} />
          <Route path="/:username/:reponame" element={<Repo />} />
        </Routes>
      </Template>
    </BrowserRouter >
  );
}

export default RoutesApp;
