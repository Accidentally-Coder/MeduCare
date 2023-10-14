import React from 'react'

const PatientACCard = () => {
  return (
    <>
    <div className="card" style={{maxWidth: 400}}>
  <div className="card-body">
    <div className="text-center">
      <img src="doctor_image.jpg" className="img-fluid rounded-circle" alt="Doctor Image" style={{width: 150, height: 150}} />
      <h5 className="card-title mt-3">Dr. John Smith</h5>
      <p className="card-text">Phone: (123) 456-7890</p>
      <p className="card-text">Appointment Time: October 15, 2023, 2:30 PM</p>
    </div>
  </div>
</div>

    </>
  )
}

export default PatientACCard