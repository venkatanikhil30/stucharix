import React from 'react';
import { ArrowRight } from 'lucide-react';

const CTA = () => {
    return (
        <section className="section" style={{ padding: '8rem 0' }}>
            <div className="container">
                <div style={{
                    background: 'linear-gradient(135deg, var(--primary), var(--secondary))',
                    borderRadius: '3rem',
                    padding: '4rem 2rem',
                    textAlign: 'center',
                    color: 'white',
                    boxShadow: 'var(--shadow-soft)'
                }}>
                    <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem', color: 'white' }}>Transform the Way You Study</h2>
                    <p style={{ fontSize: '1.25rem', marginBottom: '2.5rem', opacity: 0.9, maxWidth: '600px', margin: '0 auto 2.5rem' }}>
                        Ready to find your perfect study buddy and ace your exams? It starts here.
                    </p>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                        <button className="btn" style={{ background: 'var(--surface)', color: 'var(--primary)' }}>
                            Join Stucharix
                        </button>
                        <button className="btn" style={{ background: 'rgba(255,255,255,0.2)', color: 'white', border: '1px solid rgba(255,255,255,0.4)' }}>
                            Learn More
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTA;
