import React from 'react';

const capabilities = [
    {
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                <circle cx="12" cy="12" r="3" />
            </svg>
        ),
        title: 'Visual AI Recognition',
        desc: 'Specialized neural networks trained to identify materials, textures, and structural damage with surgical precision across fire, water, and impact events.',
        accent: '#0052ff',
        accentLight: 'rgba(0,82,255,0.06)',
    },
    {
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <line x1="12" y1="1" x2="12" y2="23" />
                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
            </svg>
        ),
        title: 'Dynamic Geo-Pricing',
        desc: 'Real-time integration with local market data to provide instant, accurate labor and material cost estimates calibrated to your specific region.',
        accent: '#00b894',
        accentLight: 'rgba(0,184,148,0.06)',
    },
    {
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                <line x1="8" y1="21" x2="16" y2="21" />
                <line x1="12" y1="17" x2="12" y2="21" />
            </svg>
        ),
        title: 'Enterprise Integration',
        desc: 'API-first architecture designed to plug directly into existing insurance and construction management workflows with zero friction.',
        accent: '#6c5ce7',
        accentLight: 'rgba(108,92,231,0.06)',
    },
];

const TechGrid = () => {
    return (
        <section id="tech" style={{ padding: '8rem 0', background: '#ffffff', borderTop: '1px solid #f0f0f0' }}>
            <div className="container">
                {/* Header */}
                <div style={{ marginBottom: '5rem', maxWidth: '600px' }}>
                    <span className="tag">Core Technology</span>
                    <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.75rem)', fontWeight: 800, color: '#0a0a0a', marginBottom: '1rem' }}>
                        Built on a Foundation of Precision
                    </h2>
                    <p style={{ color: '#666', fontSize: '1.05rem', lineHeight: 1.7 }}>
                        Providing the foundational infrastructure for next-generation property intelligence applications.
                    </p>
                </div>

                {/* Cards */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '1.5rem',
                }}>
                    {capabilities.map((item, i) => (
                        <div
                            key={i}
                            style={{
                                padding: '2.5rem',
                                border: '1px solid #ebebeb',
                                borderRadius: '12px',
                                background: '#fff',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '1.25rem',
                                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                cursor: 'default',
                                position: 'relative',
                                overflow: 'hidden',
                            }}
                            onMouseEnter={e => {
                                const el = e.currentTarget;
                                el.style.borderColor = item.accent;
                                el.style.transform = 'translateY(-6px)';
                                el.style.boxShadow = `0 20px 50px rgba(0,0,0,0.08)`;
                            }}
                            onMouseLeave={e => {
                                const el = e.currentTarget;
                                el.style.borderColor = '#ebebeb';
                                el.style.transform = 'translateY(0)';
                                el.style.boxShadow = 'none';
                            }}
                        >
                            {/* Top accent line */}
                            <div style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                right: 0,
                                height: '3px',
                                background: `linear-gradient(90deg, ${item.accent}, transparent)`,
                                opacity: 0,
                                transition: 'opacity 0.3s ease',
                            }} className="card-accent-line" />

                            {/* Icon */}
                            <div style={{
                                width: '52px',
                                height: '52px',
                                background: item.accentLight,
                                borderRadius: '12px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: item.accent,
                                flexShrink: 0,
                            }}>
                                {item.icon}
                            </div>

                            <div>
                                <h3 style={{
                                    fontSize: '1.15rem',
                                    fontWeight: 700,
                                    color: '#0a0a0a',
                                    marginBottom: '0.75rem',
                                    letterSpacing: '-0.01em',
                                }}>
                                    {item.title}
                                </h3>
                                <p style={{ color: '#666', lineHeight: 1.75, fontSize: '0.95rem' }}>
                                    {item.desc}
                                </p>
                            </div>

                            {/* Learn more */}
                            <div style={{
                                marginTop: 'auto',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.4rem',
                                color: item.accent,
                                fontSize: '0.875rem',
                                fontWeight: 600,
                            }}>
                                Learn more
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom visual: animated data flow */}
                <div style={{
                    marginTop: '5rem',
                    padding: '3rem',
                    background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 100%)',
                    borderRadius: '16px',
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                    gap: '2rem',
                    position: 'relative',
                    overflow: 'hidden',
                }}>
                    {/* Background pattern */}
                    <div style={{
                        position: 'absolute',
                        inset: 0,
                        backgroundImage: 'radial-gradient(rgba(0,82,255,0.15) 1px, transparent 1px)',
                        backgroundSize: '30px 30px',
                        opacity: 0.5,
                    }} />

                    {[
                        { label: 'Models Trained', value: '47', unit: 'neural nets' },
                        { label: 'Data Points', value: '2.4M', unit: 'property records' },
                        { label: 'Uptime SLA', value: '99.9%', unit: 'guaranteed' },
                        { label: 'API Latency', value: '< 200ms', unit: 'p95 response' },
                    ].map((metric, i) => (
                        <div key={i} style={{ position: 'relative', zIndex: 1 }}>
                            <div style={{
                                fontSize: 'clamp(1.5rem, 3vw, 2.25rem)',
                                fontWeight: 800,
                                color: '#fff',
                                letterSpacing: '-0.03em',
                                marginBottom: '0.25rem',
                            }}>
                                {metric.value}
                            </div>
                            <div style={{ color: '#aaa', fontSize: '0.8rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.25rem' }}>
                                {metric.label}
                            </div>
                            <div style={{ color: '#555', fontSize: '0.8rem' }}>
                                {metric.unit}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TechGrid;
