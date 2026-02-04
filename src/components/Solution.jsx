import React from 'react';
import { Users, Zap, Calendar } from 'lucide-react';

const Solution = () => {
    return (
        <section id="features" className="section" style={{ background: 'var(--background)' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>The Stucharix Solution</h2>
                    <p style={{ fontSize: '1.125rem', color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto' }}>
                        We've built the perfect ecosystem to help you stay consistent, motivated, and connected.
                    </p>
                </div>

                <div className="grid grid-3">
                    {[
                        {
                            icon: <Users size={32} />,
                            title: "Collaborative Study Space",
                            desc: "Find partners who share your courses and goals. Study together in focused sessions.",
                            color: "var(--primary)"
                        },
                        {
                            icon: <Zap size={32} />,
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
                        <div key={index} className="card" style={{ padding: '2.5rem' }}>
                            <div style={{
                                marginBottom: '1.5rem',
                                display: 'inline-flex',
                                padding: '1rem',
                                borderRadius: '1rem',
                                background: `color-mix(in srgb, ${item.color} 10%, transparent)`,
                                color: item.color
                            }}>
                                {item.icon}
                            </div>
                            <h3 style={{ marginBottom: '1rem', fontSize: '1.5rem' }}>{item.title}</h3>
                            <p style={{ color: 'var(--text-muted)', fontSize: '1rem' }}>{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Solution;
