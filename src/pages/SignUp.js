import axios from 'axios';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';

const Signup = () => {
    //variables and setter functions to capture data entered in the form input fields
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [answer, setAnswer] = useState('');

    // creating hook for navigation
    const navigate = useNavigate();


    // form function
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:8080/api/auth/register',
                { email, password, answer });
            if (res.data.success) {
                toast.success(res.data.message);
                //navigate to login page if user registered successfully
                setTimeout(() => {
                    navigate("/login");
                }, 1000);
            } else {
                toast.error(res.data.message);
            }

        } catch (error) {
            console.log(error);
            toast.error('Sorry ! Something went wrong. :(');
        }
    }

    return (
        <Layout>
            <div className="row flex d-flex justify-center shadow-lg bg-body rounded"
                style={{ marginTop: '30px', marginLeft: '280px', marginRight: '300px', marginBottom: '80px' }}>
                {/**Sign up section */}
                <div className="col-lg-6" style={{
                    height: '600px', width: '600px'
                }}>
                    < h6 className="text-left mt-2" > <b>MeduCare</b></h6>
                    <h4 class="fw-bold text-center mt-5 mb-5">Register your Account</h4>

                    <form onSubmit={handleSubmit}>
                        <div class="mb-3 mt-3 px-5">
                            <label for="email" class="form-label">Email:</label>
                            <input type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="form-control" id="email" placeholder="Enter email" name="email" required />
                        </div>
                        <div class="mb-3 mt-3 px-5">
                            <label for="address" class="form-label">Question:</label>
                            <input type="text"
                                value={answer}
                                onChange={(e) => setAnswer(e.target.value)}
                                className="form-control" id="answer" placeholder="What is your favourite hobby?" name="answer" required />
                        </div>
                        <div class="mb-5 mt-3 px-5">
                            <label for="pwd" class="form-label">Password:</label>
                            <input type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="form-control" id="pwd" placeholder="Enter password" name="pswd" required />
                        </div>
                        <div style={{ marginLeft: '260px' }}>
                            <button type="submit" class="btn btn-dark">Sign Up</button>
                        </div>
                    </form>
                </div>
                {/**Sign In section */}
                <div className="col-lg-4" style={{ border: '1px solid black', width: '338px', background: 'black' }}>
                    <h3 className="text-center mt-5 text-white px-5" style={{ paddingTop: '120px' }}>
                        Welcome to our Community!
                    </h3>
                    <h6 class="text-white mt-5" style={{ marginLeft: '80px' }}>Already a member?</h6>
                    <p class="text-white fs-6 fw-light" style={{ marginTop: '20px', marginLeft: '40px' }}>
                        Sign in now to unlock a world of convenience, access invaluable resources and expert advice for your health and medical education journey.
                    </p>
                    <div class="mt-5" style={{ marginLeft: '120px' }}>
                        <Link to='/login' type="submit" className="btn btn-light">Sign In</Link>
                    </div>
                </div>
            </div >

        </Layout>
    )
}

export default Signup