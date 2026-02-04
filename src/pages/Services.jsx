import React from 'react';

const Services = () => {
    return (
        <section className="section">
            <div className="container">
                <h1 className="text-4xl font-bold mb-6">Our Services</h1>
                <div className="grid grid-3">
                    <div className="card">
                        <h3 className="mb-4">Study Partner Matching</h3>
                        <p className="text-muted">Find the perfect match for your study sessions based on your courses and goals.</p>
                    </div>
                    <div className="card">
                        <h3 className="mb-4">Smart Planning</h3>
                        <p className="text-muted">Tools to help you structure your syllabus into manageable daily tasks.</p>
                    </div>
                    <div className="card">
                        <h3 className="mb-4">Community Support</h3>
                        <p className="text-muted">Access to global study groups and daily motivation boosters.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
