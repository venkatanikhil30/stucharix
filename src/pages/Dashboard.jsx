import React, { useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient';
import { Navigate } from 'react-router-dom';
import { User, Mail, Calendar, Settings, Bell, BookOpen } from 'lucide-react';

const Dashboard = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        supabase.auth.getSession().then(({ data: { session } }) => {
            setUser(session?.user ?? null);
            setLoading(false);
        });

        const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
            setUser(session?.user ?? null);
        });

        return () => subscription.unsubscribe();
    }, []);

    if (loading) {
        return (
            <div className="flex-center" style={{ height: '100vh', background: 'var(--background)' }}>
                <div className="text-primary font-bold">Loading your success...</div>
            </div>
        );
    }

    if (!user) {
        return <Navigate to="/" replace />;
    }

    return (
        <div className="section" style={{ background: 'var(--background)', minHeight: 'calc(100vh - 80px)' }}>
            <div className="container">
                {/* Welcome Header */}
                <div style={{ marginBottom: '3rem' }}>
                    <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>
                        Welcome back, <span className="text-primary">{user.user_metadata?.full_name || user.email?.split('@')[0]}</span>!
                    </h1>
                    <p className="text-muted">You're one step closer to your goals today.</p>
                </div>

                <div className="grid grid-3">
                    {/* Profile Card */}
                    <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <div style={{
                                width: '60px',
                                height: '60px',
                                borderRadius: '50%',
                                background: 'var(--accent)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <User className="text-primary" size={32} />
                            </div>
                            <div>
                                <h3 style={{ fontSize: '1.25rem' }}>{user.user_metadata?.full_name || 'Student'}</h3>
                                <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>{user.email}</p>
                            </div>
                        </div>
                        <div style={{ borderTop: '1px solid var(--border)', paddingTop: '1rem', marginTop: '0.5rem' }}>
                            <button className="btn btn-secondary" style={{ width: '100%', justifyContent: 'flex-start' }}>
                                <Settings size={18} /> Account Settings
                            </button>
                        </div>
                    </div>

                    {/* Stats/Goals */}
                    <div className="card">
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                            <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <BookOpen size={20} className="text-primary" /> Active Goals
                            </h3>
                            <span style={{
                                background: 'var(--accent)',
                                color: 'var(--primary)',
                                padding: '0.25rem 0.75rem',
                                borderRadius: '1rem',
                                fontSize: '0.75rem',
                                fontWeight: '700'
                            }}>3 New</span>
                        </div>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <li style={{ fontSize: '0.875rem', display: 'flex', justifyContent: 'space-between' }}>
                                <span>Complete Math assignment</span>
                                <span className="text-muted">60%</span>
                            </li>
                            <li style={{ fontSize: '0.875rem', display: 'flex', justifyContent: 'space-between' }}>
                                <span>Read Biology Chapter 4</span>
                                <span className="text-muted">Pending</span>
                            </li>
                            <li style={{ fontSize: '0.875rem', display: 'flex', justifyContent: 'space-between' }}>
                                <span>Group study session</span>
                                <span className="text-primary">Starts in 2h</span>
                            </li>
                        </ul>
                    </div>

                    {/* Notifications */}
                    <div className="card">
                        <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
                            <Bell size={20} className="text-primary" /> Recent Updates
                        </h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <div style={{ padding: '0.75rem', background: 'var(--accent)', borderRadius: 'var(--radius-sm)', fontSize: '0.875rem' }}>
                                <strong>Success!</strong> Your account is now synced with GitHub.
                            </div>
                            <div style={{ padding: '0.75rem', borderRadius: 'var(--radius-sm)', fontSize: '0.875rem', border: '1px solid var(--border)' }}>
                                New study buddy match found for Computer Science!
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
