import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles, LogOut } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import { supabase } from '../lib/supabaseClient';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const location = useLocation();
    const navigate = useNavigate();

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Services', path: '/services' },
        { name: 'Contact', path: '/contact' },
    ];

    // Check for user session on mount
    useEffect(() => {
        const checkUser = async () => {
            try {
                const { data: { session } } = await supabase.auth.getSession();
                setUser(session?.user ?? null);
            } catch (error) {
                console.error('Error checking user session:', error);
            } finally {
                setLoading(false);
            }
        };

        checkUser();

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
                    redirectTo: `${window.location.origin}/dashboard`
                }
            });
            if (error) throw error;
        } catch (error) {
            console.error('Error logging in:', error.message);
            alert('Failed to login. Please try again.');
        }
    };

    const handleLogout = async () => {
        try {
            const { error } = await supabase.auth.signOut();
            if (error) throw error;
            navigate('/');
        } catch (error) {
            console.error('Error logging out:', error.message);
        }
    };

    return (
        <nav style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            background: 'var(--navbar-bg)',
            backdropFilter: 'blur(10px)',
            zIndex: 1000,
            borderBottom: '1px solid var(--border)',
            transition: 'background 0.3s ease, border-color 0.3s ease'
        }}>
            <div className="container" style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                height: '80px'
            }}>
                {/* Logo */}
                <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <div style={{
                        width: '40px',
                        height: '40px',
                        background: 'var(--primary)',
                        borderRadius: '12px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white'
                    }}>
                        <Sparkles size={24} />
                    </div>
                    <span style={{ fontSize: '1.5rem', fontWeight: '700', color: 'var(--text-main)' }}>
                        Stucharix
                    </span>
                </Link>

                {/* Desktop Menu */}
                <div className="desktop-menu" style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
                    <ThemeToggle />
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            style={{
                                fontWeight: '500',
                                color: location.pathname === link.path ? 'var(--primary)' : 'var(--text-muted)',
                                transition: 'color 0.2s ease'
                            }}
                        >
                            {link.name}
                        </Link>
                    ))}

                    {!loading && (
                        user ? (
                            <>
                                <Link to="/dashboard" className="btn btn-primary">Dashboard</Link>
                                <button
                                    onClick={handleLogout}
                                    className="btn"
                                    style={{
                                        background: 'transparent',
                                        border: '1px solid var(--border)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '0.5rem'
                                    }}
                                >
                                    <LogOut size={18} />
                                    Logout
                                </button>
                            </>
                        ) : (
                            <button onClick={handleLogin} className="btn btn-primary">Join Now</button>
                        )
                    )}
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="mobile-toggle"
                    onClick={() => setIsOpen(!isOpen)}
                    style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-main)' }}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div style={{
                    position: 'absolute',
                    top: '80px',
                    left: 0,
                    width: '100%',
                    background: 'var(--surface)',
                    borderBottom: '1px solid var(--border)',
                    padding: '2rem',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1.5rem',
                    zIndex: 999
                }}>
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            onClick={() => setIsOpen(false)}
                            style={{
                                fontSize: '1.125rem',
                                fontWeight: '500',
                                color: location.pathname === link.path ? 'var(--primary)' : 'var(--text-main)'
                            }}
                        >
                            {link.name}
                        </Link>
                    ))}

                    {!loading && (
                        user ? (
                            <>
                                <Link to="/dashboard" onClick={() => setIsOpen(false)} className="btn btn-primary">Dashboard</Link>
                                <button onClick={handleLogout} className="btn">Logout</button>
                            </>
                        ) : (
                            <button onClick={handleLogin} className="btn btn-primary">Join Now</button>
                        )
                    )}

                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span>Theme</span>
                        <ThemeToggle />
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Header;
