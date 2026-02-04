import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const Benefits = () => {
    return (
        <section className="section" style={{ background: 'var(--background)' }}>
            <div className="container">
                <div className="grid grid-2" style={{ alignItems: 'center', gap: '4rem' }}>

                    {/* Image Side */}
                    <div style={{ order: 1 }}> {/* Can change order for mobile via media queries ideally, but default here */}
                        <div style={{
                            background: 'linear-gradient(135deg, var(--accent), var(--surface))',
                            borderRadius: '2rem',
                            padding: '2rem',
                            boxShadow: 'var(--shadow-md)'
                        }}>
                            <img
                                src="https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                alt="Students Happy"
                                style={{ borderRadius: '1.5rem', width: '100%', boxShadow: 'var(--shadow-lg)' }}
                            />
                        </div>
                    </div>

                    {/* Content Side */}
                    <div style={{ order: 2 }}>
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Why Join Stucharix?</h2>
                        <p style={{ fontSize: '1.125rem', color: 'var(--text-muted)', marginBottom: '2rem' }}>
                            Stop struggling alone. Join a community that understands your goals and helps you achieve them.
                        </p>

                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            {[
                                "Find Focused Study Partners",
                                "Stay Motivated Everyday",
                                "Organize Your Study Goals",
                                "Build Long-Term Consistency"
                            ].map((benefit, i) => (
                                <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1.125rem' }}>
                                    <CheckCircle2 color="var(--success)" size={24} />
                                    {benefit}
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Benefits;
