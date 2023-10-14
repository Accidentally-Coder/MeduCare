import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Layout from './components/Layout';
import Appointment from './pages/Appointment';
import DoctorList from './pages/DoctorList';
import DoctorRegister from './pages/DoctorRegister';
import ForgotPassword from './pages/ForgotPassword';
import Login from './pages/Login';
import Notification from './pages/Notification';
import SignUp from './pages/SignUp';
import HomePage from './pages/HomePage';


function App() {
  return (
    <>
      <Routes>
        <Route path='/signup' element={<SignUp />} />
        <Route path='/' element={<Layout />} />
        <Route path='/header' element={<Header />} />
        <Route path='/footer' element={<Footer />} />
        <Route path='/login' element={<Login />} />
        <Route path='/forgot-password' element={<ForgotPassword />} />
        <Route path='/appointment' element={<Appointment />} />
        <Route path='/notification' element={<Notification />} />
        <Route path='/doctor-list' element={<DoctorList />} />
        <Route path='/doctor-register' element={<DoctorRegister />} />
      </Routes>
    </>
  );
}

export default App;
