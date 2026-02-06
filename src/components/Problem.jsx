import React from 'react';
import { Frown, BookOpen, Clock } from 'lucide-react';

const Problem = () => {
    return (
        <section className="section" style={{ background: 'var(--surface)' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <span style={{
                        color: '#ef4444',
                        background: 'var(--accent)',
                        padding: '0.25rem 0.75rem',
                        borderRadius: '99px',
                        fontSize: '0.875rem',
                        fontWeight: '600'
                    }}>
                        The Struggle is Real
                    </span>
                    <h2 style={{ fontSize: '2.5rem', marginTop: '1rem' }}>Studying Shouldn’t Feel This Hard</h2>
                </div>

                <div className="grid grid-3">
                    {[
                        {
                            icon: <Frown size={32} />,
                            title: "Feeling Isolated",
                            desc: "Studying alone can be demotivating and lonely, making it hard to stick to your schedule."
                        },
                        {
                            icon: <BookOpen size={32} />,
                            title: "Lack of Focus",
                            desc: "Without accountability, it's easy to get distracted by social media or procrastination."
                        },
                        {
                            icon: <Clock size={32} />,
                            title: "Poor Planning",
                            desc: "Cramming at the last minute because you didn't have a clear structured study plan."
                        }
                    ].map((item, index) => (
                        <div key={index} className="card" style={{
                            textAlign: 'center',
                            border: '1px solid var(--border)',
                            boxShadow: 'none',
                            background: 'var(--background)'
                        }}>
                            <div style={{
                                margin: '0 auto 1.5rem',
                                width: '64px',
                                height: '64px',
                                background: '#fee2e2',
                                color: '#ef4444',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                {item.icon}
                            </div>
                            <h3 style={{ marginBottom: '0.75rem', fontSize: '1.25rem' }}>{item.title}</h3>
                            <p style={{ color: 'var(--text-muted)' }}>{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Problem;
