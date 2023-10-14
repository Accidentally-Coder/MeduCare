import React from 'react';
import '../css/DoctorRegistration.css';

function DoctorRegister() {
  return (
    <div class="row">
        <div class="col">
            <img src="doctor.jpg" width={900} height={800}/>
        </div>
        <div class="col">
            <div className="container">
                <div className='box'>
                    <h1>Doctor Registration</h1>
                    <form>
                        <div className="mt-4 mb-4">
                        <label htmlFor="name" className="form-label">
                            Full Name
                        </label>
                        <input type="text" className="form-control" id="name" placeholder="Enter your full name" />
                        </div>

                        <div className="mb-4">
                        <label htmlFor="email" className="form-label">
                            Email
                        </label>
                        <input type="email" className="form-control" id="email" placeholder="Enter your email" />
                        </div>

                        <div className="mb-4">
                        <label htmlFor="license" className="form-label">
                            Medical License Number
                        </label>
                        <input type="text" className="form-control" id="license" placeholder="Enter your medical license number" />
                        </div>

                        <div className="mb-4">
                        <label htmlFor="phone" className="form-label">
                            Phone Number
                        </label>
                        <input type="text" className="form-control" id="phone" placeholder="Enter your phone number" />
                        </div>

                        <div className="mb-4">
                        <label htmlFor="profilePicture" className="form-label">
                            Profile Picture
                        </label>
                        <input type="file" className="form-control" id="profilePicture" />
                        </div>

                        <div className="mb-4">
                        <label htmlFor="specialization" className="form-label">
                            Specialization
                        </label>
                        <select class="form-select" aria-label="Default select example">
                            <option selected>None</option>
                            <option value="gn">Gynaecolgy</option>
                            <option value="pl">Pathology</option>
                            <option value="im">Internal Medicine</option>
                            <option value="nl">Neurology</option>
                            <option value="ul">Urology</option>
                            <option value="gs">General Surgery</option>
                        </select>
                        </div>

                        <button type="submit" className="btn">
                        <h4>Register</h4>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DoctorRegister