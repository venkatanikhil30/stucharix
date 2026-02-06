import React, { useState, useEffect } from 'react';
import { ArrowRight, LayoutDashboard } from 'lucide-react';
import { Link } from 'react-router-dom';
import { supabase } from '../lib/supabaseClient';

const CTA = () => {
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
        <section className="section" style={{ padding: '8rem 0' }}>
            <div className="container">
                <div style={{
                    background: 'linear-gradient(135deg, var(--color-accent), #a855f7)',
                    borderRadius: '3rem',
                    padding: '5rem 2rem',
                    textAlign: 'center',
                    color: 'white',
                    boxShadow: '0 20px 50px -15px rgba(59, 130, 246, 0.4)',
                    position: 'relative',
                    overflow: 'hidden'
                }}>
                    {/* Decorative element */}
                    <div style={{
                        position: 'absolute',
                        top: '-50%',
                        right: '-10%',
                        width: '300px',
                        height: '300px',
                        background: 'rgba(255,255,255,0.1)',
                        borderRadius: '50%',
                        filter: 'blur(60px)'
                    }}></div>

                    <h2 style={{
                        fontSize: 'var(--text-h2)',
                        marginBottom: '1.5rem',
                        color: 'white',
                        fontFamily: 'var(--font-heading)',
                        fontWeight: '700',
                        lineHeight: 'var(--lh-heading)'
                    }}>Transform the Way You Study</h2>
                    <p style={{
                        fontSize: '1.25rem',
                        marginBottom: '3rem',
                        opacity: 0.95,
                        maxWidth: '650px',
                        margin: '0 auto 3rem',
                        lineHeight: 'var(--lh-body)',
                        fontFamily: 'var(--font-body)'
                    }}>
                        Ready to find your perfect study buddy and ace your exams? It starts here. Join thousands of students today.
                    </p>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '1.25rem', flexWrap: 'wrap' }}>
                        {user ? (
                            <Link to="/dashboard" className="btn" style={{
                                background: 'white',
                                color: 'var(--color-accent)',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.75rem',
                                padding: '1rem 2rem',
                                fontWeight: '600'
                            }}>
                                <LayoutDashboard size={20} /> Go to Dashboard
                            </Link>
                        ) : (
                            <button onClick={handleLogin} className="btn" style={{
                                background: 'white',
                                color: 'var(--color-accent)',
                                padding: '1rem 2.5rem',
                                fontWeight: '600',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.75rem'
                            }}>
                                Join Stucharix <ArrowRight size={20} />
                            </button>
                        )}
                        <button className="btn" style={{
                            background: 'rgba(255,255,255,0.15)',
                            color: 'white',
                            border: '1px solid rgba(255,255,255,0.3)',
                            padding: '1rem 2rem',
                            backdropFilter: 'blur(4px)',
                            fontWeight: '600'
                        }}>
                            Learn More
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTA;
