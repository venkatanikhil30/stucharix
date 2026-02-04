import React from 'react';
import { Sparkles, Heart } from 'lucide-react';

const Footer = () => {
    return (
        <footer style={{ background: 'var(--surface)', borderTop: '1px solid var(--border)', paddingTop: '4rem', paddingBottom: '2rem' }}>
            <div className="container">
                <div className="grid grid-3" style={{ marginBottom: '3rem' }}>

                    {/* Brand */}
                    <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                            <div style={{
                                width: '32px',
                                height: '32px',
                                background: 'var(--primary)',
                                borderRadius: '8px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: 'white'
                            }}>
                                <Sparkles size={18} />
                            </div>
                            <span style={{ fontSize: '1.25rem', fontWeight: '700' }}>Stucharix</span>
                        </div>
                        <p style={{ color: 'var(--text-muted)', maxWidth: '300px' }}>
                            Creating a positive study environment where students connect, plan, and grow together.
                        </p>
                    </div>

                    {/* Links 1 */}
                    <div>
                        <h4 style={{ marginBottom: '1rem' }}>Product</h4>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', color: 'var(--text-muted)' }}>
                            <li><a href="#">Features</a></li>
                            <li><a href="#">How it Works</a></li>
                            <li><a href="#">Pricing</a></li>
                        </ul>
                    </div>

                    {/* Links 2 */}
                    <div>
                        <h4 style={{ marginBottom: '1rem' }}>Company</h4>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', color: 'var(--text-muted)' }}>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Contact</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                        </ul>
                    </div>
                </div>

                <div style={{
                    borderTop: '1px solid var(--border)',
                    paddingTop: '2rem',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    gap: '1rem',
                    color: 'var(--text-light)',
                    fontSize: '0.875rem'
                }}>
                    <p>© 2024 Stucharix. Academic Project.</p>
                    <p style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                        Made with <Heart size={16} fill="currentColor" /> for students.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
