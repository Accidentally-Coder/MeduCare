import React from 'react';
import { CgFeed } from 'react-icons/cg';
import { FaUserDoctor } from 'react-icons/fa6';
import { FcOvertime } from 'react-icons/fc';
import { PiNotePencilFill } from 'react-icons/pi';
import { RiNotification2Fill } from 'react-icons/ri';
import { SlLogin, SlLogout } from 'react-icons/sl';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../context/auth';



const Header = () => {
    const [auth, setAuth] = useAuth();
    const handleLogout = () => {
        setAuth({
            ...auth,
            user: null,
            token: ''
        });
        localStorage.removeItem('auth');
    }
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark" style={{ height: '100px', backgroundColor: '#060212' }}>
                <div className="container-fluid">
                    <NavLink to="/" className="navbar-brand"><b>MeduCare</b></NavLink>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNavAltMarkup"
                        aria-controls="navbarNavAltMarkup"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <NavLink to="/" className="nav-link" aria-current="page" href="#">
                                <CgFeed size={30} />Home
                            </NavLink>
                            {
                                !auth.user ? (
                                    <>
                                        <NavLink to="/login" className="nav-link" href="#">
                                            <SlLogin size={30} />Login
                                        </NavLink>
                                        <NavLink to="/signup" className="nav-link" href="#">
                                            <PiNotePencilFill size={30} />SignUp
                                        </NavLink>
                                    </>
                                ) : (
                                    <>


                                        <NavLink to="/doctor-list" className="nav-link" href="#">
                                            <FaUserDoctor size={30} /> Doctor
                                        </NavLink>
                                        <NavLink to="/appointment" className="nav-link" href="#">
                                            <FcOvertime size={30} />{' '} Appointment
                                        </NavLink>
                                        <NavLink to="/notification" className="nav-link" href="#">
                                            <RiNotification2Fill size={28} /> Notification
                                        </NavLink>
                                        <NavLink to='/' className='nav-link'>{auth?.user?.name}</NavLink>
                                        <NavLink to="/" className="nav-link" href="#">
                                            <SlLogout size={30} onClick={handleLogout} />LogOut
                                        </NavLink>
                                    </>
                                )
                            }
                        </div>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default Header