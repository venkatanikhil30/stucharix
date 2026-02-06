import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const Benefits = () => {
    return (
        <section className="section" style={{ background: 'var(--color-bg)' }}>
            <div className="container">
                <div className="grid grid-2" style={{ alignItems: 'center', gap: '5rem' }}>

                    {/* Image Side */}
                    <div style={{ order: 1 }}>
                        <div style={{
                            background: 'color-mix(in srgb, var(--color-accent) 8%, var(--color-surface))',
                            borderRadius: '2.5rem',
                            padding: '1.5rem',
                            boxShadow: 'var(--shadow-lg)',
                            border: '1px solid var(--color-border)',
                            transition: 'transform 0.3s ease'
                        }}>
                            <img
                                src="https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                alt="Students Happy"
                                style={{ borderRadius: '1.75rem', width: '100%', display: 'block' }}
                            />
                        </div>
                    </div>

                    {/* Content Side */}
                    <div style={{ order: 2 }}>
                        <h2 style={{
                            fontSize: 'var(--text-h2)',
                            marginBottom: '1.5rem',
                            fontFamily: 'var(--font-heading)',
                            color: 'var(--color-text-primary)',
                            lineHeight: 'var(--lh-heading)',
                            fontWeight: '700'
                        }}>Why Join Stucharix?</h2>
                        <p style={{
                            fontSize: '1.125rem',
                            color: 'var(--color-text-secondary)',
                            marginBottom: '2.5rem',
                            lineHeight: 'var(--lh-body)',
                            fontFamily: 'var(--font-body)'
                        }}>
                            Stop struggling alone. Join a community that understands your goals and helps you achieve them.
                        </p>

                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                            {[
                                "Find Focused Study Partners",
                                "Stay Motivated Everyday",
                                "Organize Your Study Goals",
                                "Build Long-Term Consistency"
                            ].map((benefit, i) => (
                                <li key={i} style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '1rem',
                                    fontSize: '1.125rem',
                                    color: 'var(--color-text-primary)',
                                    fontFamily: 'var(--font-body)',
                                    fontWeight: '500'
                                }}>
                                    <CheckCircle2 color="var(--color-success)" size={24} />
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
