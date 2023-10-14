// from patient's view

import React from 'react'

const DoctorCard = () => {
  return (
    <>
   <div className="card mb-3" style={{maxWidth: 540}}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src="doctor_image.jpg" className="img-fluid rounded-start" alt="Doctor Image" />
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">Dr. John Smith</h5>
        <p className="card-text">
          Specialization: Cardiologist
          <br />
          Phone: (123) 456-7890
          <br />
          Email: john.smith@example.com
          <br />
          Address: 123 Main Street, City, State
          <br />
          Fees: $200 per consultation
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
