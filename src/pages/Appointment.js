import React, { useState } from 'react';
import Layout from '../components/Layout';
import { Link } from 'react-router-dom';

const Appointment = () => {
  const [formData, setFormData] = useState({
    patientName: '',
    patientPhoneNumber: '',
    patientEmail: '',
    preferableDate: '',
    startTime: '',
    endTime: '',
  });

  const handleTimeChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const hours = Array.from({ length: 12 }, (_, i) => (i + 1).toString().padStart(2, '0'));
  const minutes = Array.from({ length: 60 }, (_, i) => i.toString().padStart(2, '0'));
  const amPmOptions = ['AM', 'PM'];

  return (
    <Layout>
      <div className="container" style={{ maxWidth: '400px', marginTop: '20px' }}>
        <form id="appointmentForm">
          <div className="form-floating mb-3">
            <input type="text" className="form-control" id="patientName" placeholder="Patient Name" required onChange={handleTimeChange} />
            <label htmlFor="patientName">Patient Name</label>
          </div>
          <div className="form-floating mb-3">
            <input type="tel" className="form-control" id="patientPhoneNumber" placeholder="Phone Number" required onChange={handleTimeChange} />
            <label htmlFor="patientPhoneNumber">Phone Number</label>
          </div>
          <div className="form-floating mb-3">
            <input type="email" className="form-control" id="patientEmail" placeholder="name@example.com" required onChange={handleTimeChange} />
            <label htmlFor="patientEmail">Email Address</label>
          </div>
          <div className="mb-3">
            <label htmlFor="preferableDate" className="form-label">
              Preferable Date
            </label>
            <input
              type="date"
              className="form-control"
              id="preferableDate"
              required
              onChange={handleTimeChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="startTime" className="form-label">
              Start Time
            </label>
            <div className="time-picker">
              <select id="startTime" required className="hour" onChange={handleTimeChange}>
                <option value="" disabled selected>
                  HH
                </option>
                {hours.map((hour) => (
                  <option key={hour} value={hour}>
                    {hour}
                  </option>
                ))}
              </select>
              <select id="startTime" required className="minute" onChange={handleTimeChange}>
                <option value="" disabled selected>
                  MM
                </option>
                {minutes.map((minute) => (
                  <option key={minute} value={minute}>
                    {minute}
                  </option>
                ))}
              </select>
              <select id="startTime" required className="am-pm" onChange={handleTimeChange}>
                <option value="" disabled selected>
                  AM/PM
                </option>
                {amPmOptions.map((amPm) => (
                  <option key={amPm} value={amPm}>
                    {amPm}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="endTime" className="form-label">
              End Time
            </label>
            <div className="time-picker">
              <select id="endTime" required className="hour" onChange={handleTimeChange}>
                <option value="" disabled selected>
                  HH
                </option>
                {hours.map((hour) => (
                  <option key={hour} value={hour}>
                    {hour}
                  </option>
                ))}
              </select>
              <select id="endTime" required className="minute" onChange={handleTimeChange}>
                <option value="" disabled selected>
                  MM
                </option>
                {minutes.map((minute) => (
                  <option key={minute} value={minute}>
                    {minute}
                  </option>
                ))}
              </select>
              <select id="endTime" required className="am-pm" onChange={handleTimeChange}>
                <option value="" disabled selected>
                  AM/PM
                </option>
                {amPmOptions.map((amPm) => (
                  <option key={amPm} value={amPm}>
                    {amPm}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <Link to = "/">
            <button type="submit" className="btn btn-primary">
                Submit
            </button>
          </Link>
        </form>
      </div>
    </Layout>
  );
};

export default Appointment;
