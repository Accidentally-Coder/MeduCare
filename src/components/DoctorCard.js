// from patient's view

import React from 'react';

const DoctorCard = (props) => {
  const {doctor} = props;
  console.log(doctor);
  return (
    <>
   <div className="card m-3" style={{maxWidth: 540}}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src="dummy.jpg" className="img-fluid" alt="Doctor Image" />
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{doctor.name}</h5>
        <p className="card-text">
          Specialization: {doctor.specialization}
          <br />
          Phone: {doctor.phone}
          <br />
          Email: {doctor.email}
          <br />
          Address: {doctor.address}
          <br />
          Fees: ${doctor.fees} per consultation
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
