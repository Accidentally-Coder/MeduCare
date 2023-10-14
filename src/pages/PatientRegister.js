import axios from 'axios';
import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';

const PatientRegister = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(name,phone,address,height,weight,age,email);
    try {
        const res = await axios.post('http://localhost:8080/api/auth/register-patient',
            { name,phone,address,height,weight,age,email });
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
                    <img src="doctor.jpg" width={900} height={800} />
                </div>
                <div class="col">
                    <div className="container">
                        <div className='box'>
                            <h1 className='h1-dr'>Patient Registration</h1>
                            <form onSubmit={handleSubmit}>
                                <div className="mt-4 mb-4">
                                    <label htmlFor="name" className="form-label">
                                        Full Name
                                    </label>
                                    <input type="text" className="form-control" value={name}
                                    onChange={(e) => setName(e.target.value)} id="name" placeholder="Enter your full name" />
                                </div>

                                <div className="mb-4">
                                    <label htmlFor="email" className="form-label">
                                        Email
                                    </label>
                                    <input type="email" className="form-control" value={email}
                                    onChange={(e) => setEmail(e.target.value)} id="email" placeholder="Enter your email" />
                                </div>

                                <div className="mb-4">
                                    <label htmlFor="phone" className="form-label">
                                        Phone Number
                                    </label>
                                    <input type="text" className="form-control" value={phone}
                                    onChange={(e) => setPhone(e.target.value)} id="phone" placeholder="Enter your phone number" />
                                </div>

                                <div className="mb-4">
                                    <label htmlFor="address" className="form-label">
                                        Address
                                    </label>
                                    <input type="text" className="form-control" value={address}
                                    onChange={(e) => setAddress(e.target.value)} id="address" placeholder="Enter your addreses" />
                                </div>

                                
                                <div class="d-flex align-items-center mt-5">
                                    <hr class="flex-grow-1"/>
                                    <span class="mx-3"><b>Health Information</b></span>
                                    <hr class="flex-grow-1"/>
                                </div>


                                <div className="mb-4">
                                    <label htmlFor="address" className="form-label">
                                        Height
                                    </label>
                                    <input type="text" className="form-control" value={height}
                                    onChange={(e) => setHeight(e.target.value)} id="height" placeholder="Enter your height (in feet)" />
                                </div>

                                <div className="mb-4">
                                    <label htmlFor="address" className="form-label">
                                        Weight
                                    </label>
                                    <input type="text" className="form-control" value={weight}
                                    onChange={(e) => setWeight(e.target.value)} id="weight" placeholder="Enter your weight (in kg)" />
                                </div>
                                
                                <div className="mb-4">
                                    <label htmlFor="address" className="form-label">
                                        Age
                                    </label>
                                    <input type="text" className="form-control" value={age}
                                    onChange={(e) => setAge(e.target.value)} id="age" placeholder="Enter your age" />
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

export default PatientRegister