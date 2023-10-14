import axios from 'axios';
import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import '../css/DoctorRegistration.css';

function DoctorRegister() {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [license, setLicense] = useState("");
    const [address, setAddress] = useState("");
    const [email, setEmail] = useState("");
    const [specialization,setSpecialization] = useState("");
    const [fees,setFees] = useState("");

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:8080/api/auth/register-doctor',
                { name, phone, license, address, email, specialization, fees});
            if (res.data.success) {
                toast.success(res.data.message);
                //navigate to login page if user registered successfully
                setTimeout(() => {
                    navigate("/");
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
            <div class="row">
                <div class="col">
                    <img className='img-dr' src="doctor.jpg" width={900} height={800} />
                </div>
                <div class="col">
                    <div className="container">
                        <div className='box'>
                            <h1 className='h1-dr'>Doctor Registration</h1>
                            <form onSubmit={handleSubmit}>
                                <div className="mt-4 mb-4">
                                    <label htmlFor="name" className="form-label">
                                        Full Name
                                    </label>
                                    <input type="text" className="form-control" value={name}
                                    onChange={(e) => setName(e.target.value)} id="name" placeholder="Enter your full name" />
                                </div>

                                <div className="mt-4 mb-4">
                                    <label htmlFor="address" className="form-label">
                                        Provide your address
                                    </label>
                                    <input type="text" className="form-control" value={address}
                                    onChange={(e) => setAddress(e.target.value)} id="name" placeholder="Enter your full address" />
                                </div>

                                <div className="mb-4">
                                    <label htmlFor="email" className="form-label">
                                        Email
                                    </label>
                                    <input type="email" className="form-control" value={email}
                                    onChange={(e) => setEmail(e.target.value)} id="email" placeholder="Enter your email" />
                                </div>

                                <div className="mb-4">
                                    <label htmlFor="license" className="form-label">
                                        Medical License Number
                                    </label>
                                    <input type="text" className="form-control" value={license}
                                    onChange={(e) => setLicense(e.target.value)} id="license" placeholder="Enter your medical license number" />
                                </div>

                                <div className="mb-4">
                                    <label htmlFor="phone" className="form-label">
                                        Phone Number
                                    </label>
                                    <input type="text" className="form-control" value={phone}
                                    onChange={(e) => setPhone(e.target.value)} id="phone" placeholder="Enter your phone number" />
                                </div>

                                <div className="mb-4">
                                    <label htmlFor="fees" className="form-label">
                                        Fees
                                    </label>
                                    <input type="text" className="form-control" value={fees}
                                    onChange={(e) => setFees(e.target.value)} id="phone" placeholder="Enter your fees" />
                                </div>

                                <div className="mb-4">
                                    <label htmlFor="specialization" className="form-label">
                                        Specialization
                                    </label>
                                    <select class="form-select" onChange={(e) => setSpecialization(e.target.value)}>
                                        <option selected>None</option>
                                        <option value="Gynaecolgy">Gynaecolgy</option>
                                        <option value="Pathology">Pathology</option>
                                        <option value="Internal Medicine">Internal Medicine</option>
                                        <option value="Neurology">Neurology</option>
                                        <option value="Urology">Urology</option>
                                        <option value="General Surgery">General Surgery</option>
                                    </select>
                                </div>
                                
                                <button type="submit" className="btn btn-rd">
                                    <h4>Register</h4>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default DoctorRegister