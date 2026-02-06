import React, { useState } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Services', path: '/services' },
        { name: 'Contact', path: '/contact' },
    ];

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
                    <Link to="/contact" className="btn btn-primary">Join Now</Link>
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
