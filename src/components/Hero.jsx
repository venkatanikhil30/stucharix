import React, { useState, useEffect } from 'react';
import { ArrowRight, PlayCircle, LayoutDashboard } from 'lucide-react';
import { Link } from 'react-router-dom';
import { supabase } from '../lib/supabaseClient';

const Hero = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        // Check initial session
        supabase.auth.getSession().then(({ data: { session } }) => {
            setUser(session?.user ?? null);
        });

        // Listen for auth changes
        const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
            setUser(session?.user ?? null);
        });

        return () => subscription.unsubscribe();
    }, []);

    const handleLogin = async () => {
        console.log('Login triggered');
        const { error } = await supabase.auth.signInWithOAuth({
            provider: 'github',
            options: {
                redirectTo: window.location.origin,
            },
        });
        if (error) {
            console.error('Login error:', error.message);
        }
    };

    return (
        <section className="hero">
            <div className="container">
                <div className="grid grid-2" style={{ alignItems: 'center', gap: '4rem' }}>

                    {/* Content */}
                    <div>
                        <div style={{
                            display: 'inline-block',
                            padding: '0.5rem 1rem',
                            background: 'var(--accent)',
                            color: 'var(--primary)',
                            borderRadius: 'var(--radius-full)',
                            fontSize: '0.875rem',
                            fontWeight: '600',
                            marginBottom: '1.5rem'
                        }}>
                            🚀 The #1 Study Buddy App
                        </div>

                        <h1 style={{
                            fontSize: '3.5rem',
                            marginBottom: '1.5rem',
                            background: 'linear-gradient(to right, var(--primary), var(--secondary))',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            letterSpacing: '-0.02em'
                        }}>
                            Match, Plan and grow your Study Goals
                        </h1>

                        <p style={{
                            fontSize: '1.25rem',
                            color: 'var(--text-muted)',
                            marginBottom: '2.5rem',
                            maxWidth: '500px'
                        }}>
                            Connect with the right study buddies, stay motivated through daily inspiration, and plan your studies effectively—together.
                        </p>

                        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                            {user ? (
                                <Link to="/dashboard" className="btn btn-primary">
                                    Go to Dashboard <LayoutDashboard size={20} />
                                </Link>
                            ) : (
                                <button onClick={handleLogin} className="btn btn-primary">
                                    Build My Study Goals <ArrowRight size={20} />
                                </button>
                            )}
                            <button className="btn btn-secondary">
                                <PlayCircle size={20} /> How Stucharix Works
                            </button>
                        </div>

                        <div style={{ marginTop: '3rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <div style={{ display: 'flex' }}>
                                {[1, 2, 3, 4].map((i) => (
                                    <div key={i} style={{
                                        width: '40px',
                                        height: '40px',
                                        borderRadius: '50%',
                                        background: 'var(--text-light)',
                                        border: '3px solid var(--surface)',
                                        marginLeft: i > 1 ? '-10px' : 0,
                                        backgroundImage: `url(https://i.pravatar.cc/100?img=${10 + i})`,
                                        backgroundSize: 'cover'
                                    }} />
                                ))}
                            </div>
                            <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>
                                <strong>1,000+</strong> students already studying together.
                            </p>
                        </div>
                    </div>

                    {/* Illustration/Image */}
                    <div style={{ position: 'relative' }}>
                        <div style={{
                            background: 'var(--surface)',
                            borderRadius: '2rem',
                            boxShadow: 'var(--shadow-soft)',
                            padding: '1rem',
                            transform: 'rotate(-2deg)',
                            border: '4px solid var(--border)',
                            transition: 'border-color 0.3s ease, transform 0.3s ease',
                            overflow: 'hidden'
                        }}>
                            <img
                                src="https://images.unsplash.com/photo-1614850523296-d8c1af93d400?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                alt="Modern digital study illustration"
                                style={{
                                    borderRadius: '1.5rem',
                                    width: '100%',
                                    filter: 'drop-shadow(0 10px 15px rgba(0,0,0,0.1))'
                                }}
                            />

                            {/* Floating Badge */}
                            <div style={{
                                position: 'absolute',
                                bottom: '2rem',
                                left: '-2rem',
                                background: 'var(--surface)',
                                padding: '1rem',
                                borderRadius: '1rem',
                                boxShadow: 'var(--shadow-lg)',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.75rem',
                                transform: 'rotate(2deg)',
                                border: '2px solid var(--border)'
                            }}>
                                <div style={{
                                    width: '40px',
                                    height: '40px',
                                    background: 'var(--accent)',
                                    borderRadius: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: 'var(--primary)'
                                }}>
                                    ✅
                                </div>
                                <div>
                                    <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Daily Goal</p>
                                    <p style={{ fontWeight: '700', fontSize: '0.875rem', color: 'var(--text-main)' }}>Completed!</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Hero;
