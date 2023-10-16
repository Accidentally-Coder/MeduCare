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
import Video from './pages/Video';
import QnA from './pages/QnA';
import PublicPostCard from './components/PublicPostCard';
import BlogPage from './pages/BlogPage';
import Sidebar from './components/Sidebar';
import VideoPage from './pages/VideoPage';


function App() {
  const [auth] = useAuth();
  return (
    <>
      <Routes>
        <Route path='/signup' element={<SignUp />} />
        <Route path='/' element={auth.user ? <HomePage /> : <LandingPage />} />
        <Route path='/header' element={<Header />} />
        <Route path='/footer' element={<Footer />} />
        <Route path='/login' element={<Login />} />
        <Route path='/forgot-password' element={<ForgotPassword />} />
        <Route path='/appointment' element={<Appointment />} />
        <Route path='/notification' element={<Notification />} />
        <Route path='/doctor-list' element={<DoctorList />} />
        <Route path='/doctor-register' element={<DoctorRegister />} />
        <Route path='/patient-register' element={<PatientRegister />} />
        <Route path='/blogpage' element={<BlogPage />} />
        <Route path='/roleregister' element={<RoleRegister />} />
        <Route path='/videopage' element={<VideoPage />} />
        <Route path='/qna' element={<QnA />} />
        <Route path='/sidebar' element={<Sidebar />} />

      </Routes>
    </>
  );
}

export default App;
