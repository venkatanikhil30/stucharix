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
        try {
            const { error } = await supabase.auth.signInWithOAuth({
                provider: 'github',
                options: {
                    redirectTo: window.location.origin,
                },
            });
            if (error) throw error;
        } catch (error) {
            console.error('Error logging in:', error.message);
        }
    };

    return (
        <section className="hero" style={{ background: 'var(--color-bg)' }}>
            <div className="container">
                <div className="grid grid-2" style={{ alignItems: 'center', gap: '4rem' }}>

                    {/* Content */}
                    <div>
                        <div style={{
                            display: 'inline-block',
                            padding: '0.6rem 1.25rem',
                            background: 'var(--color-accent)',
                            color: 'white',
                            borderRadius: 'var(--radius-full)',
                            fontSize: 'var(--text-caption)',
                            fontWeight: '600',
                            marginBottom: '1.5rem',
                            boxShadow: '0 4px 12px rgba(59, 130, 246, 0.2)'
                        }}>
                            🚀 The #1 Study Buddy App
                        </div>

                        <h1 style={{
                            fontSize: 'var(--text-h1)',
                            marginBottom: '1.5rem',
                            fontFamily: 'var(--font-heading)',
                            background: 'linear-gradient(to right, var(--color-accent), #a855f7)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            letterSpacing: '-0.03em',
                            lineHeight: 'var(--lh-heading)'
                        }}>
                            Match, Plan and grow your Study Goals
                        </h1>

                        <p style={{
                            fontSize: '1.125rem',
                            color: 'var(--color-text-secondary)',
                            marginBottom: '2.5rem',
                            maxWidth: '520px',
                            lineHeight: 'var(--lh-body)',
                            fontFamily: 'var(--font-body)'
                        }}>
                            Connect with the right study buddies, stay motivated through daily inspiration, and plan your studies effectively—together.
                        </p>

                        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                            {user ? (
                                <Link to="/dashboard" className="btn btn-primary" style={{ padding: '1rem 2rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                    Go to Dashboard <LayoutDashboard size={20} />
                                </Link>
                            ) : (
                                <button onClick={handleLogin} className="btn btn-primary" style={{ padding: '1rem 2rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                    Build My Study Goals <ArrowRight size={20} />
                                </button>
                            )}
                            <button className="btn btn-secondary" style={{ padding: '1rem 2rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                <PlayCircle size={20} /> How Stucharix Works
                            </button>
                        </div>

                        <div style={{ marginTop: '3.5rem', display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
                            <div style={{ display: 'flex' }}>
                                {[1, 2, 3, 4].map((i) => (
                                    <div key={i} style={{
                                        width: '44px',
                                        height: '44px',
                                        borderRadius: '50%',
                                        background: 'var(--color-border)',
                                        border: '3px solid var(--color-surface)',
                                        marginLeft: i > 1 ? '-12px' : 0,
                                        backgroundImage: `url(https://i.pravatar.cc/100?img=${10 + i})`,
                                        backgroundSize: 'cover',
                                        boxShadow: 'var(--shadow-sm)'
                                    }} />
                                ))}
                            </div>
                            <p style={{ fontSize: '0.925rem', color: 'var(--color-text-secondary)', fontFamily: 'var(--font-body)' }}>
                                <strong style={{ color: 'var(--color-text-primary)' }}>1,000+</strong> students already studying together.
                            </p>
                        </div>
                    </div>

                    {/* Illustration/Image */}
                    <div style={{ position: 'relative' }}>
                        <div style={{
                            background: 'var(--color-surface)',
                            borderRadius: '2.5rem',
                            boxShadow: 'var(--shadow-soft)',
                            padding: '1rem',
                            transform: 'rotate(-1.5deg)',
                            border: '1px solid var(--color-border)',
                            transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                            overflow: 'hidden'
                        }}>
                            <img
                                src="/hero-illustration.png"
                                alt="Modern digital study illustration"
                                style={{
                                    borderRadius: '1.75rem',
                                    width: '100%',
                                    filter: 'drop-shadow(0 15px 25px rgba(0,0,0,0.15))'
                                }}
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Hero;
