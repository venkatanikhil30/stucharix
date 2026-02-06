import React from 'react';
import { Users, Zap, Calendar } from 'lucide-react';

const Solution = () => {
    return (
        <section id="features" className="section" style={{ background: 'var(--color-bg)' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h2 style={{
                        fontSize: 'var(--text-h2)',
                        marginBottom: '1rem',
                        fontFamily: 'var(--font-heading)',
                        color: 'var(--color-text-primary)',
                        fontWeight: '700'
                    }}>The Stucharix Solution</h2>
                    <p style={{
                        fontSize: '1.125rem',
                        color: 'var(--color-text-secondary)',
                        maxWidth: '600px',
                        margin: '0 auto',
                        fontFamily: 'var(--font-body)',
                        lineHeight: 'var(--lh-body)'
                    }}>
                        We've built the perfect ecosystem to help you stay consistent, motivated, and connected.
                    </p>
                </div>

                <div className="grid grid-3">
                    {[
                        {
                            icon: <Users size={32} />,
                            title: "Collaborative Study Space",
                            desc: "Find partners who share your courses and goals. Study together in focused sessions.",
                            color: "var(--color-accent)"
                        },
                        {
                            icon: <Zap size={32} fill="currentColor" />,
                            title: "Daily Motivation",
                            desc: "Get daily quotes and streaks to keep your momentum going every single day.",
                            color: "#fbbf24"
                        },
                        {
                            icon: <Calendar size={32} />,
                            title: "Smart Study Planner",
                            desc: "Organize your syllabus into manageable chunks and track your progress easily.",
                            color: "#10b981"
                        }
                    ].map((item, index) => (
                        <div key={index} className="card" style={{
                            padding: '2.5rem',
                            background: 'var(--color-surface)',
                            border: '1px solid var(--color-border)',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'flex-start'
                        }}>
                            <div style={{
                                marginBottom: '1.75rem',
                                display: 'inline-flex',
                                padding: '1rem',
                                borderRadius: '1.25rem',
                                background: `color-mix(in srgb, ${item.color} 12%, transparent)`,
                                color: item.color,
                                boxShadow: '0 8px 24px -10px currentColor'
                            }}>
                                {item.icon}
                            </div>
                            <h3 style={{
                                marginBottom: '1rem',
                                fontSize: '1.5rem',
                                fontFamily: 'var(--font-heading)',
                                fontWeight: '600'
                            }}>{item.title}</h3>
                            <p style={{
                                color: 'var(--color-text-secondary)',
                                fontSize: '1rem',
                                fontFamily: 'var(--font-body)',
                                lineHeight: 'var(--lh-body)'
                            }}>{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Solution;
