import React from 'react';
import { Frown, BookOpen, Clock } from 'lucide-react';

const Problem = () => {
    return (
        <section className="section" style={{ background: 'var(--color-surface)' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <span style={{
                        color: '#ef4444',
                        background: 'rgba(239, 68, 68, 0.1)',
                        padding: '0.4rem 1rem',
                        borderRadius: 'var(--radius-full)',
                        fontSize: 'var(--text-caption)',
                        fontWeight: '600',
                        fontFamily: 'var(--font-body)'
                    }}>
                        The Struggle is Real
                    </span>
                    <h2 style={{
                        fontSize: 'var(--text-h2)',
                        marginTop: '1.5rem',
                        fontFamily: 'var(--font-heading)',
                        fontWeight: '700',
                        color: 'var(--color-text-primary)'
                    }}>Studying Shouldn’t Feel This Hard</h2>
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
                            border: '1px solid var(--color-border)',
                            boxShadow: 'var(--shadow-sm)',
                            background: 'var(--color-bg)',
                            padding: '2.5rem'
                        }}>
                            <div style={{
                                margin: '0 auto 1.75rem',
                                width: '64px',
                                height: '64px',
                                background: 'rgba(239, 68, 68, 0.08)',
                                color: '#ef4444',
                                borderRadius: '1.25rem',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                {item.icon}
                            </div>
                            <h3 style={{
                                marginBottom: '1rem',
                                fontSize: '1.5rem',
                                fontFamily: 'var(--font-heading)',
                                fontWeight: '600',
                                color: 'var(--color-text-primary)'
                            }}>{item.title}</h3>
                            <p style={{
                                color: 'var(--color-text-secondary)',
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

export default Problem;
