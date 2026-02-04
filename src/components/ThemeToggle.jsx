import React, { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';

const ThemeToggle = () => {
    const [theme, setTheme] = useState(() => {
        if (typeof window !== 'undefined') {
            const saved = localStorage.getItem('stucharix-theme');
            if (saved) return saved;
            return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        }
        return 'light';
    });

    useEffect(() => {
        const root = window.document.documentElement;
        if (theme === 'dark') {
            root.classList.add('dark');
        } else {
            root.classList.remove('dark');
        }
        localStorage.setItem('stucharix-theme', theme);
    }, [theme]);

    const toggleTheme = (e) => {
        e.preventDefault();
        setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
    };

    return (
        <button
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            className="flex items-center justify-center"
            style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}
        >
            <div
                className={`relative w-[48px] h-[24px] rounded-full p-1 transition-colors duration-300 flex items-center ${theme === 'dark' ? 'bg-[#334155]' : 'bg-[#e2e8f0]'
                    }`}
                style={{
                    boxShadow: theme === 'dark' ? 'inset 0 2px 4px 0 rgba(0,0,0,0.2)' : 'inset 0 2px 4px 0 rgba(0,0,0,0.05)'
                }}
            >
                <div
                    className={`bg-white w-[18px] h-[18px] rounded-full shadow-md flex items-center justify-center transition-transform duration-300 ease-in-out ${theme === 'dark' ? 'translate-x-[22px]' : 'translate-x-0'
                        }`}
                >
                    {theme === 'light' ? (
                        <Sun size={14} strokeWidth={1.5} className="text-[#64748b]" />
                    ) : (
                        <Moon size={14} strokeWidth={1.5} className="text-[#64748b]" />
                    )}
                </div>
            </div>
        </button>
    );
};

export default ThemeToggle;
