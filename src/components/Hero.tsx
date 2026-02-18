import React, { useEffect, useRef } from 'react';

const Hero = () => {
    const heroRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (!heroRef.current) return;
            const { clientX, clientY } = e;
            const { innerWidth, innerHeight } = window;
            const x = (clientX / innerWidth - 0.5) * 20;
            const y = (clientY / innerHeight - 0.5) * 20;
            const orb = heroRef.current.querySelector('.hero-orb') as HTMLElement;
            if (orb) {
                orb.style.transform = `translate(${x}px, ${y}px)`;
            }
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const stats = [
        { value: '94%', label: 'Assessment Accuracy' },
        { value: '< 30s', label: 'Report Generation' },
        { value: '60+', label: 'Cities Covered' },
        { value: '3x', label: 'Faster Claims' },
    ];

    return (
        <section
            ref={heroRef}
            id="about"
            style={{
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                overflow: 'hidden',
                background: '#fafafa',
            }}
        >
            {/* Background grid */}
            <div style={{
                position: 'absolute',
                inset: 0,
                backgroundImage: `
                    linear-gradient(rgba(0,82,255,0.04) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(0,82,255,0.04) 1px, transparent 1px)
                `,
                backgroundSize: '60px 60px',
                zIndex: 0,
            }} />

            {/* Gradient orb */}
            <div
                className="hero-orb"
                style={{
                    position: 'absolute',
                    width: '700px',
                    height: '700px',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(0,82,255,0.08) 0%, rgba(0,198,255,0.04) 50%, transparent 70%)',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    transition: 'transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
                    zIndex: 0,
                    pointerEvents: 'none',
                }}
            />

            {/* Content */}
            <div className="container" style={{
                position: 'relative',
                zIndex: 1,
                textAlign: 'center',
                paddingTop: '8rem',
                paddingBottom: '4rem',
            }}>
                {/* Badge */}
                <div className="animate-fade-in-up" style={{ marginBottom: '2rem' }}>
                    <span style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        background: 'rgba(0,82,255,0.06)',
                        border: '1px solid rgba(0,82,255,0.15)',
                        color: '#0052ff',
                        padding: '0.4rem 1rem',
                        borderRadius: '100px',
                        fontSize: '0.8rem',
                        fontWeight: 600,
                        letterSpacing: '0.5px',
                    }}>
                        <span style={{
                            width: '6px',
                            height: '6px',
                            borderRadius: '50%',
                            background: '#0052ff',
                            animation: 'pulse-ring 1.5s ease-out infinite',
                            display: 'inline-block',
                        }} />
                        Now Available · OmdanAI v2.0
                    </span>
                </div>

                {/* Headline */}
                <h1
                    className="animate-fade-in-up delay-1"
                    style={{
                        fontSize: 'clamp(2.8rem, 6vw, 5.5rem)',
                        fontWeight: 900,
                        letterSpacing: '-0.04em',
                        lineHeight: 1.05,
                        color: '#0a0a0a',
                        marginBottom: '1.75rem',
                        maxWidth: '900px',
                        margin: '0 auto 1.75rem',
                    }}
                >
                    Intelligence That{' '}
                    <span style={{
                        background: 'linear-gradient(135deg, #0052ff 0%, #00c6ff 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                    }}>
                        Sees Beyond
                    </span>
                    {' '}Damage.
                </h1>

                {/* Subheadline */}
                <p
                    className="animate-fade-in-up delay-2"
                    style={{
                        fontSize: 'clamp(1rem, 2vw, 1.25rem)',
                        fontWeight: 400,
                        color: '#666',
                        maxWidth: '620px',
                        margin: '0 auto 3rem',
                        lineHeight: 1.7,
                    }}
                >
                    The next generation of PropTech. Automated assessment, localized pricing, and seamless integration for the insurance and renovation industries.
                </p>

                {/* CTA Buttons */}
                <div
                    className="animate-fade-in-up delay-3"
                    style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '5rem' }}
                >
                    <a
                        href="#contact"
                        style={{
                            padding: '0.9rem 2.25rem',
                            fontSize: '1rem',
                            background: 'linear-gradient(135deg, #0052ff 0%, #0041cc 100%)',
                            color: '#fff',
                            border: 'none',
                            borderRadius: '8px',
                            fontWeight: 700,
                            cursor: 'pointer',
                            textDecoration: 'none',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            boxShadow: '0 8px 24px rgba(0,82,255,0.3)',
                            transition: 'all 0.3s ease',
                        }}
                        onMouseEnter={e => {
                            (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
                            (e.currentTarget as HTMLElement).style.boxShadow = '0 12px 32px rgba(0,82,255,0.4)';
                        }}
                        onMouseLeave={e => {
                            (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                            (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 24px rgba(0,82,255,0.3)';
                        }}
                    >
                        Explore Our Ecosystem
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </a>
                    <a
                        href="#tech"
                        style={{
                            padding: '0.9rem 2.25rem',
                            fontSize: '1rem',
                            background: '#fff',
                            color: '#0a0a0a',
                            border: '1px solid #e0e0e0',
                            borderRadius: '8px',
                            fontWeight: 600,
                            cursor: 'pointer',
                            textDecoration: 'none',
                            transition: 'all 0.3s ease',
                            boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                        }}
                        onMouseEnter={e => {
                            (e.currentTarget as HTMLElement).style.borderColor = '#000';
                            (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
                            (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 24px rgba(0,0,0,0.08)';
                        }}
                        onMouseLeave={e => {
                            (e.currentTarget as HTMLElement).style.borderColor = '#e0e0e0';
                            (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                            (e.currentTarget as HTMLElement).style.boxShadow = '0 2px 8px rgba(0,0,0,0.04)';
                        }}
                    >
                        View Technology
                    </a>
                </div>

                {/* Stats Bar */}
                <div
                    className="animate-fade-in-up delay-4"
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(4, 1fr)',
                        gap: '1px',
                        background: '#e8e8e8',
                        border: '1px solid #e8e8e8',
                        borderRadius: '12px',
                        overflow: 'hidden',
                        maxWidth: '800px',
                        margin: '0 auto',
                        boxShadow: '0 4px 20px rgba(0,0,0,0.04)',
                    }}
                >
                    {stats.map((stat, i) => (
                        <div
                            key={i}
                            style={{
                                background: '#fff',
                                padding: '1.75rem 1.5rem',
                                textAlign: 'center',
                            }}
                        >
                            <div style={{
                                fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                                fontWeight: 800,
                                color: '#0a0a0a',
                                letterSpacing: '-0.03em',
                                marginBottom: '0.25rem',
                            }}>
                                {stat.value}
                            </div>
                            <div style={{
                                fontSize: '0.78rem',
                                color: '#888',
                                fontWeight: 500,
                                letterSpacing: '0.01em',
                            }}>
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Scroll indicator */}
            <div style={{
                position: 'absolute',
                bottom: '2.5rem',
                left: '50%',
                transform: 'translateX(-50%)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '0.5rem',
                color: '#bbb',
                fontSize: '0.75rem',
                letterSpacing: '1px',
                animation: 'fadeInUp 1s 1s both',
            }}>
                <span>SCROLL</span>
                <div style={{
                    width: '1px',
                    height: '40px',
                    background: 'linear-gradient(to bottom, #bbb, transparent)',
                    animation: 'float 2s ease-in-out infinite',
                }} />
            </div>

            <style>{`
                @keyframes pulse-ring {
                    0% { transform: scale(0.8); opacity: 1; }
                    100% { transform: scale(2); opacity: 0; }
                }
                @media (max-width: 640px) {
                    div[style*="gridTemplateColumns: repeat(4, 1fr)"] {
                        grid-template-columns: repeat(2, 1fr) !important;
                    }
                }
            `}</style>
        </section>
    );
};

export default Hero;
