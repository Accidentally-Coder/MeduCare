import React from 'react';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import "./LandingPage.css"
const LandingPage = () => {
    return (
        <Layout>
            <Hero />
            <img
                src="img.png" // Relative path to img.png
                alt="Additional Image"
                className="additional-image"
            />
        </Layout>
    );
}

export default LandingPage;
