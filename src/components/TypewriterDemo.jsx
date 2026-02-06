import React from 'react';
import { Typewriter } from "@/components/ui/typewriter"

export function TypewriterDemo() {
    return (
        <section className="section text-center" style={{ background: 'var(--surface)' }}>
            <div className="container">
                <h2 className="text-3xl font-bold mb-8">What is Stucharix?</h2>
                <div className="flex flex-col items-center justify-center text-2xl md:text-4xl font-light">
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
                            className="text-primary font-bold"
                            waitTime={1500}
                            deleteSpeed={40}
                            cursorChar={"_"}
                        />
                    </p>
                </div>
            </div>
        </section>
    )
}

export default TypewriterDemo;
