import React from 'react';
import { Typewriter } from "@/components/ui/typewriter"

export function TypewriterDemo() {
    return (
        <section className="section text-center" style={{ background: 'var(--color-surface)' }}>
            <div className="container">
                <h2 style={{
                    fontSize: 'var(--text-h2)',
                    marginBottom: '2rem',
                    fontFamily: 'var(--font-heading)',
                    fontWeight: '700',
                    color: 'var(--color-text-primary)'
                }}>What is Stucharix?</h2>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '2rem',
                    fontFamily: 'var(--font-body)',
                    fontWeight: '500',
                    color: 'var(--color-text-primary)'
                }}>
                    <p className="whitespace-pre-wrap">
                        <span>{"Stucharix is the place to "}</span>
                        <Typewriter
                            text={[
                                "connect with friends.",
                                "find motivation.",
                                "plan your success.",
                                "ace your exams.",
                                "grow together."
                            ]}
                            speed={70}
                            className="font-bold"
                            style={{ color: 'var(--color-accent)' }}
                            waitTime={1500}
                            deleteSpeed={40}
                            cursorChar={"_"}
                        />
                    </p>
                </div>
            </div>
        </section>
    );
}

export default TypewriterDemo;
