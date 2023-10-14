import React from 'react';
import Layout from '../components/Layout';
import '../css/DoctorRegistration.css';

function DoctorRegister() {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [license, setLicense] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:8080/api/auth/register-doctor',
                { name, phone, license, address, email, specialization, fees, avatar });
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
                            <h1>Doctor Registration</h1>
                            <form onSubmit={handleSubmit}>
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