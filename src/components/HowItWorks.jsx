import React from 'react';
import { Book, UserPlus, Flame, Target } from 'lucide-react';

const HowItWorks = () => {
    return (
        <section id="how-it-works" className="section">
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h2 style={{ fontSize: '2.5rem' }}>How It Works</h2>
                </div>

                <div className="grid grid-4" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '2rem' }}>
                    {[
                        { icon: <Book />, title: "Choose Your Course", desc: "Select what you are studying." },
                        { icon: <UserPlus />, title: "Get Study Partners", desc: "Match with peers instantly." },
                        { icon: <Flame />, title: "Get Motivated Daily", desc: "Keep your streak alive." },
                        { icon: <Target />, title: "Plan and Study Smarter", desc: "Ace your exams together." }
                    ].map((step, i) => (
                        <div key={i} style={{ textAlign: 'center', position: 'relative' }}>
                            <div style={{
                                width: '80px',
                                height: '80px',
                                background: 'white',
                                border: '2px solid var(--primary)',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                margin: '0 auto 1.5rem',
                                fontSize: '2rem',
                                color: 'var(--primary)',
                                boxShadow: 'var(--shadow-md)',
                                zIndex: 2,
                                position: 'relative'
                            }}>
                                {step.icon}
                            </div>

                            <h3 style={{ marginBottom: '0.5rem', fontSize: '1.25rem' }}>{step.title}</h3>
                            <p style={{ color: 'var(--text-muted)' }}>{step.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
