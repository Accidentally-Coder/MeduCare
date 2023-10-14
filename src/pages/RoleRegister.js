import React from 'react';
import Layout from '../components/Layout';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const RoleRegister = () => {
    return (
        <Layout>
            <Container fluid>
                <Row>
                    <Col style={{ height: '450px', backgroundColor: '#dcd1e3' }}>
                        <Row>
                            <Col className='col-4 mt-5' style={{ marginLeft: '320px' }}>
                                <div className="card shadow" style={{ width: '18rem', height: '22rem' }}>
                                    <img src="roleRegisterImage.webp" className="card-img-top" alt="Doctor" style={{ width: '100%', height: 'auto' }} />
                                    <div className="card-body">
                                        <Link to="/doctor-register">
                                            <button type="button" className="btn" style={{ backgroundColor: '#452c54', color: '#fff', marginLeft: '45px' }}>Register As Doctor</button>
                                        </Link>
                                    </div>
                                </div>

                            </Col>
                            <Col className='col-4 mt-5' style={{ marginRight: '150px' }}>
                                <div className="card shadow" style={{ width: '18rem', height: '22rem' }}>
                                    <img src="patient.jpg" className="card-img-top mt-3" alt="Patient" style={{ width: '100%', height: 'auto' }} />
                                    <div className="card-body">
                                        <Link to="/patient-register">
                                            <button type="button" className="btn" style={{ backgroundColor: '#452c54', color: '#fff', marginLeft: '45px', marginTop: '20px' }}>Register As Patient</button>
                                        </Link>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#654875" fill-opacity="0.8" d="M0,256L18.5,234.7C36.9,213,74,171,111,154.7C147.7,139,185,149,222,154.7C258.5,160,295,160,332,176C369.2,192,406,224,443,234.7C480,245,517,235,554,218.7C590.8,203,628,181,665,149.3C701.5,117,738,75,775,80C812.3,85,849,139,886,176C923.1,213,960,235,997,250.7C1033.8,267,1071,277,1108,250.7C1144.6,224,1182,160,1218,138.7C1255.4,117,1292,139,1329,170.7C1366.2,203,1403,245,1422,266.7L1440,288L1440,0L1421.5,0C1403.1,0,1366,0,1329,0C1292.3,0,1255,0,1218,0C1181.5,0,1145,0,1108,0C1070.8,0,1034,0,997,0C960,0,923,0,886,0C849.2,0,812,0,775,0C738.5,0,702,0,665,0C627.7,0,591,0,554,0C516.9,0,480,0,443,0C406.2,0,369,0,332,0C295.4,0,258,0,222,0C184.6,0,148,0,111,0C73.8,0,37,0,18,0L0,0Z"></path></svg>
        </Layout >
    );
};

export default RoleRegister;
