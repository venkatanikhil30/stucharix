import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles, User, LogOut, LayoutDashboard } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import { supabase } from '../lib/supabaseClient';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [user, setUser] = useState(null);
    const location = useLocation();

    useEffect(() => {
        // Check initial session
        supabase.auth.getSession().then(({ data: { session } }) => {
            setUser(session?.user ?? null);
        });

        // Listen for auth changes
        const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
            setUser(session?.user ?? null);
            if (_event === 'SIGNED_IN') setIsOpen(false);
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

    const handleLogout = async () => {
        try {
            const { error } = await supabase.auth.signOut();
            if (error) throw error;
        } catch (error) {
            console.error('Error logging out:', error.message);
        }
    };

    const navLinks = [
        { name: "Features", href: "#features" },
        { name: "Benefits", href: "#benefits" },
        { name: "How it Works", href: "#how-it-works" },
    ];

    return (
        <header style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            zIndex: 1000,
            background: 'color-mix(in srgb, var(--color-bg) 80%, transparent)',
            backdropFilter: 'blur(12px)',
            borderBottom: '1px solid var(--color-border)',
            height: '80px',
            display: 'flex',
            alignItems: 'center',
            transition: 'all 0.3s ease'
        }}>
            <nav className="container" style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
            }}>
                {/* Logo */}
                <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <div style={{
                        width: '40px',
                        height: '40px',
                        background: 'var(--color-accent)',
                        borderRadius: '12px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        boxShadow: '0 4px 12px rgba(59, 130, 246, 0.3)'
                    }}>
                        <Sparkles size={24} />
                    </div>
                    <span style={{
                        fontSize: '1.5rem',
                        fontWeight: '700',
                        fontFamily: 'var(--font-heading)',
                        color: 'var(--color-text-primary)'
                    }}>Stucharix</span>
                </Link>

                {/* Desktop Navigation */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '2.5rem' }} className="hidden md:flex">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            style={{
                                color: 'var(--color-text-secondary)',
                                fontWeight: '500',
                                fontSize: '0.925rem'
                            }}
                            className="footer-link"
                        >
                            {link.name}
                        </a>
                    ))}

                    <div style={{ height: '24px', width: '1px', background: 'var(--color-border)' }}></div>

                    <ThemeToggle />

                    {user ? (
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <Link
                                to="/dashboard"
                                className="btn btn-secondary"
                                style={{ padding: '0.6rem 1.2rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}
                            >
                                <LayoutDashboard size={18} />
                                Dashboard
                            </Link>
                            <button
                                onClick={handleLogout}
                                style={{
                                    background: 'transparent',
                                    border: 'none',
                                    color: 'var(--color-text-secondary)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.5rem',
                                    padding: '0.5rem',
                                    cursor: 'pointer'
                                }}
                                className="footer-link"
                            >
                                <LogOut size={18} />
                                Logout
                            </button>
                        </div>
                    ) : (
                        <button
                            type="button"
                            onClick={handleLogin}
                            className="btn btn-primary"
                            style={{ padding: '0.75rem 1.75rem' }}
                        >
                            Join Now
                        </button>
                    )}
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden"
                    onClick={() => setIsOpen(!isOpen)}
                    style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--color-text-primary)' }}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </nav>

            {/* Mobile Menu */}
            {isOpen && (
                <div style={{
                    position: 'absolute',
                    top: '80px',
                    left: 0,
                    width: '100%',
                    background: 'var(--color-bg)',
                    borderBottom: '1px solid var(--color-border)',
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
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span>Theme</span>
                        <ThemeToggle />
                    </div>

                    {user ? (
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <Link to="/dashboard" onClick={() => setIsOpen(false)} className="btn btn-secondary" style={{ width: '100%' }}>
                                <LayoutDashboard size={18} /> Dashboard
                            </Link>
                            <button onClick={() => { handleLogout(); setIsOpen(false); }} className="btn btn-primary" style={{ width: '100%', background: 'var(--text-muted)' }}>
                                <LogOut size={18} /> Sign Out
                            </button>
                        </div>
                    ) : (
                        <button type="button" onClick={() => { handleLogin(); setIsOpen(false); }} className="btn btn-primary">Join Now</button>
                    )}
                </div>
            )}
        </header>
    );
};

export default Header;
