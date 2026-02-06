import { motion } from 'framer-motion';
import { Sparkles, Heart } from 'lucide-react';

const Footer = () => {
    return (
        <footer style={{
            background: 'var(--color-surface)',
            borderTop: '1px solid var(--color-border)',
            paddingTop: '6rem',
            paddingBottom: '3rem'
        }}>
            <div className="container">
                <div className="grid grid-3" style={{ marginBottom: '4rem' }}>

                    {/* Brand */}
                    <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
                            <div style={{
                                width: '36px',
                                height: '36px',
                                background: 'var(--color-accent)',
                                borderRadius: '10px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: 'white',
                                boxShadow: '0 4px 12px rgba(59, 130, 246, 0.2)'
                            }}>
                                <Sparkles size={20} />
                            </div>
                            <span style={{
                                fontSize: '1.5rem',
                                fontWeight: '700',
                                fontFamily: 'var(--font-heading)',
                                color: 'var(--color-text-primary)'
                            }}>Stucharix</span>
                        </div>
                        <p style={{
                            color: 'var(--color-text-secondary)',
                            maxWidth: '320px',
                            fontFamily: 'var(--font-body)',
                            lineHeight: 'var(--lh-body)',
                            fontSize: '0.925rem'
                        }}>
                            Creating a positive study environment where students connect, plan, and grow together.
                        </p>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 style={{
                            marginBottom: '1.5rem',
                            color: 'var(--color-text-primary)',
                            fontWeight: '700',
                            fontFamily: 'var(--font-heading)',
                            fontSize: '1.125rem'
                        }}>Contact Us</h4>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem', color: 'var(--color-text-secondary)' }}>
                            <li style={{ fontFamily: 'var(--font-body)' }}>
                                Email: <a href="https://mail.google.com/mail/?view=cm&fs=1&to=team.stucharix@gmail.com" target="_blank" rel="noopener noreferrer" className="footer-link">team.stucharix@gmail.com</a>
                            </li>
                            <li style={{ marginTop: '0.5rem', display: 'flex', gap: '1.5rem' }}>
                                <a href="https://www.instagram.com/stucharix/" target="_blank" rel="noopener noreferrer" className="footer-link">Instagram</a>
                                <a href="https://x.com/stucharix" target="_blank" rel="noopener noreferrer" className="footer-link">Twitter</a>
                                <a href="https://www.youtube.com/@stucharix" target="_blank" rel="noopener noreferrer" className="footer-link">YouTube</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div style={{
                    borderTop: '1px solid var(--color-border)',
                    paddingTop: '2.5rem',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    gap: '1.5rem',
                    color: 'var(--color-text-secondary)',
                    fontSize: '0.875rem'
                }}>
                    <p style={{ fontFamily: 'var(--font-body)' }}>© 2024 Stucharix. Academic Project.</p>
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.75rem',
                        padding: '1rem 2.5rem',
                        background: '#0a0f1e', // Stay dark navy for premium contrast
                        borderRadius: 'var(--radius-full)',
                        boxShadow: '0 10px 30px -5px rgba(0,0,0,0.4)',
                        border: '1px solid rgba(255,255,255,0.05)'
                    }}>
                        <span style={{ color: '#94a3b8', fontSize: '1rem', fontWeight: '500', fontFamily: 'var(--font-body)' }}>Made with</span>
                        <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            {/* Particles Background */}
                            {[...Array(6)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ y: 0, opacity: 0, scale: 0 }}
                                    animate={{
                                        y: -40 - Math.random() * 40,
                                        x: (Math.random() - 0.5) * 40,
                                        opacity: [0, 1, 0],
                                        scale: [0, 1, 0.5]
                                    }}
                                    transition={{
                                        duration: 2 + Math.random(),
                                        repeat: Infinity,
                                        delay: i * 0.4,
                                        ease: "easeOut"
                                    }}
                                    style={{
                                        position: 'absolute',
                                        color: i % 2 === 0 ? '#ff4d4d' : '#ffd700',
                                        fontSize: i % 2 === 0 ? '10px' : '8px',
                                        zIndex: 0,
                                        filter: 'blur(0.5px)'
                                    }}
                                >
                                    {i % 2 === 0 ? '❤️' : '✨'}
                                </motion.div>
                            ))}

                            {/* Main Animated Heart */}
                            <motion.div
                                animate={{
                                    y: [0, -15, 0],
                                    scaleX: [1, 1.2, 0.9, 1],
                                    scaleY: [1, 0.8, 1.1, 1]
                                }}
                                transition={{
                                    duration: 1.5,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                                style={{
                                    fontSize: '2rem',
                                    filter: 'drop-shadow(0 0 10px rgba(255, 77, 77, 0.6))',
                                    cursor: 'default',
                                    userSelect: 'none',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    zIndex: 1
                                }}
                            >
                                <Heart size={32} fill="#ff4d4d" color="#ff4d4d" style={{ filter: 'brightness(1.2)' }} />
                            </motion.div>
                        </div>
                        <span style={{ color: '#94a3b8', fontSize: '1rem', fontWeight: '500', fontFamily: 'var(--font-body)' }}>for students.</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
