import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import { useAuth } from './context/auth';
import Appointment from './pages/Appointment';
import DoctorList from './pages/DoctorList';
import DoctorRegister from './pages/DoctorRegister';
import ForgotPassword from './pages/ForgotPassword';
import HomePage from './pages/HomePage';
import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import Notification from './pages/Notification';
import PatientRegister from './pages/PatientRegister';
import RoleRegister from './pages/RoleRegister';
import SignUp from './pages/SignUp';


function App() {
  const [auth] = useAuth();
  return (
    <>
      <Routes>
        <Route path='/signup' element={<SignUp />} />
        <Route path='/' element={auth.user?<HomePage />:<LandingPage />} />
        <Route path='/header' element={<Header />} />
        <Route path='/footer' element={<Footer />} />
        <Route path='/login' element={<Login />} />
        <Route path='/forgot-password' element={<ForgotPassword />} />
        <Route path='/appointment' element={<Appointment />} />
        <Route path='/notification' element={<Notification />} />
        <Route path='/doctor-list' element={<DoctorList />} />
        <Route path='/doctor-register' element={<DoctorRegister />} />
        <Route path='/patient-register' element={<PatientRegister />} />
        <Route path='/homepage' element={<HomePage />} />
        <Route path='/roleregister' element={<RoleRegister />} />
      </Routes>
    </>
  );
}

export default App;
