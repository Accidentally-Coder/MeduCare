// from patient's view

import React from 'react';

const DoctorCard = (props) => {
  const {name, specialization, phone,email,address,fees} = props;
  return (
    <>
   <div className="card mb-3" style={{maxWidth: 540}}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src="doctor_image.jpg" className="img-fluid rounded-start" alt="Doctor Image" />
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">
          Specialization: {specialization}
          <br />
          Phone: {phone}
          <br />
          Email: {email}
          <br />
          Address: {address}
          <br />
          Fees: ${fees} per consultation
        </p>
        <a href="/appointment" className="btn btn-primary">Take Appointment</a>
      </div>
    </div>
  </div>
</div>


    </>
  )
}

export default DoctorCard
