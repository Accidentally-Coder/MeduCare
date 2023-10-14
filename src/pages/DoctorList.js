import axios from 'axios'
import React, { useEffect, useState } from 'react'
import DoctorCard from '../components/DoctorCard'
import Layout from '../components/Layout'
import { useAuth } from '../context/auth'

const DoctorList = () => {
    const [doctors,setDoctors] = useState([]);
    const [auth] = useAuth();
    const getAllDoctors =  async() => {
        try {
            const {data} = await axios.get(`http://localhost:8080/api/doctor/get-doctors`);
            console.log(data);
            if(data?.success){
                const doctors = data.doctors;
                setDoctors(doctors);
            }
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(()=>{
        getAllDoctors();
    },[]);
    return (
        <Layout>
            {
                doctors.length == 0 ? null:(
                    doctors.map((doctor,index)=><DoctorCard doctor={doctor}/>)
                )
            }
            
        </Layout>
    )
}

export default DoctorList