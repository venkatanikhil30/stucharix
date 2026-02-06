import React from 'react';
import { Book, UserPlus, Flame, Target } from 'lucide-react';

const HowItWorks = () => {
    return (
        <section id="how-it-works" className="section" style={{ background: 'var(--color-bg)' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
                    <h2 style={{
                        fontSize: 'var(--text-h2)',
                        fontFamily: 'var(--font-heading)',
                        fontWeight: '700',
                        color: 'var(--color-text-primary)'
                    }}>How It Works</h2>
                </div>

                <div className="grid grid-4" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '3rem' }}>
                    {[
                        { icon: <Book size={32} />, title: "Choose Your Course", desc: "Select what you are studying." },
                        { icon: <UserPlus size={32} />, title: "Get Study Partners", desc: "Match with peers instantly." },
                        { icon: <Flame size={32} fill="#ff4500" color="#ff4500" />, title: "Get Motivated Daily", desc: "Keep your streak alive." },
                        { icon: <Target size={32} />, title: "Plan and Study Smarter", desc: "Ace your exams together." }
                    ].map((step, i) => (
                        <div key={i} style={{ textAlign: 'center', position: 'relative' }}>
                            <div style={{
                                width: '96px',
                                height: '96px',
                                background: 'var(--color-surface)',
                                border: '2px solid var(--color-accent)',
                                borderRadius: '2rem',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                margin: '0 auto 2rem',
                                color: 'var(--color-accent)',
                                boxShadow: 'var(--shadow-md)',
                                zIndex: 2,
                                position: 'relative',
                                transition: 'transform 0.3s ease'
                            }}>
                                {step.icon}
                            </div>

                            <h3 style={{
                                marginBottom: '1rem',
                                fontSize: '1.25rem',
                                fontFamily: 'var(--font-heading)',
                                fontWeight: '600',
                                color: 'var(--color-text-primary)'
                            }}>{step.title}</h3>
                            <p style={{
                                color: 'var(--color-text-secondary)',
                                fontFamily: 'var(--font-body)',
                                lineHeight: 'var(--lh-body)'
                            }}>{step.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
