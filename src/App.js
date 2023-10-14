import React from 'react';
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import SignUp from './pages/SignUp';
import Layout from './components/Layout';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './pages/Login';
import ForgotPassword from './pages/ForgotPassword';
import Appointment from './pages/Appointment';
import Notification from './pages/Notification';
import DoctorList from './pages/DoctorList';


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
      </Routes>
    </>
  );
}

export default App;
