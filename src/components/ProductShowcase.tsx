import React from 'react';

const products = [
    {
        id: 'omdanai',
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                <circle cx="12" cy="12" r="3" />
            </svg>
        ),
        name: 'OmdanAI',
        badge: 'MARKET READY',
        badgeColor: '#00b894',
        desc: 'Our flagship mobile solution. Turn a smartphone into a professional adjuster. Capture photos, receive a full damage report, and get a localized price estimate in seconds.',
        features: ['Visual AI Analysis', 'Geo-Pricing Engine', 'PDF Report Export', 'Multi-language Support'],
        cta: 'View Integration',
        highlight: true,
    },
    {
        id: 'damages-market',
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <line x1="2" y1="12" x2="22" y2="12" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </svg>
        ),
        name: 'Damages Market',
        subtitle: 'Powering the DTB Revolution',
        badge: 'COMING SOON',
        badgeColor: '#888',
        desc: 'The core engine where forensic intelligence meets high-liquidity execution. We’ve built a bridge between high-precision AI diagnostics and the global restoration industry, transforming damage data into a decentralized DTB (Damage to Business) marketplace. OmdanAI’s diagnostics flow into a geo-fenced ecosystem, matching verified property claims—from water damage in Buenos Aires to structural repairs in Athens—with a pre-vetted network of local contractors for real-time business execution.',
        features: [],
        cta: 'Explore the Market',
        highlight: false,
    },
    {
        id: 'omdan-enterprise',
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="3" width="20" height="14" rx="2" />
                <line x1="8" y1="21" x2="16" y2="21" />
                <line x1="12" y1="17" x2="12" y2="21" />
            </svg>
        ),
        name: 'OmdanEnterprise',
        badge: 'COMING SOON',
        badgeColor: '#888',
        desc: 'A dedicated platform for property adjusters to generate professional reports in minutes, built for industry compliance.',
        features: [
            'Regulatory Alignment',
            'Insurance Interface Integration',
            'Rapid Report Generation'
        ],
        cta: 'View Integration',
        highlight: false,
        fullContent: {
            title: 'OmdanEnterprise: Adjuster Workflow Suite',
            desc: 'A dedicated platform for property adjusters to generate professional reports in minutes. Built to integrate seamlessly with insurance industry standards and legal requirements, ensuring speed, security, and precision.',
            features: [
                { title: 'Regulatory Alignment', desc: 'Reports generated according to insurance laws and industry-standard protocols.' },
                { title: 'Insurance Interface Integration', desc: 'Direct workflow integration with major insurance carriers for faster claim submission.' },
                { title: 'Rapid Report Generation', desc: 'Drastically reduce the time from field inspection to finalized opinion.' },
                { title: 'Audit-Ready Documentation', desc: 'High-fidelity forensic data and line-item pricing that stand up to professional scrutiny.' },
                { title: 'Enterprise Security', desc: 'Secure cloud infrastructure designed to protect sensitive property and claimant information.' }
            ]
        }
    },
];

const ProductShowcase = () => {
    const [activeModal, setActiveModal] = React.useState<string | null>(null);

    React.useEffect(() => {
        if (activeModal) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [activeModal]);

    const activeProduct = products.find(p => p.id === activeModal);

    return (
        <section id="products" style={{ padding: '8rem 0', background: '#fff', borderTop: '1px solid #f0f0f0' }}>
            <div className="container">
                {/* Header */}
                <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
                    <span className="tag">Featured Products</span>
                    <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.75rem)', fontWeight: 800, color: '#0a0a0a', marginBottom: '1rem' }}>
                        The OmdanAI Ecosystem
                    </h2>
                    <p style={{ color: '#666', maxWidth: '560px', margin: '0 auto', fontSize: '1.05rem', lineHeight: 1.7 }}>
                        Delivering precise solutions for complex environments, from mobile-first tools to enterprise-grade platforms.
                    </p>
                </div>

                {/* Cards */}
                <div
                    className="ecosystem-grid"
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                        gap: '1.5rem',
                        alignItems: 'stretch',
                    }}
                >
                    {products.map((product) => (
                        <div
                            key={product.id}
                            id={`product-${product.id}`}
                            style={{
                                border: '1.5px solid #0052ff',
                                borderRadius: '16px',
                                padding: '2.5rem',
                                background: 'linear-gradient(135deg, #fafcff 0%, #f0f5ff 100%)',
                                position: 'relative',
                                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                boxShadow: '0 8px 32px rgba(0,82,255,0.1)',
                                display: 'flex',
                                flexDirection: 'column',
                                height: '100%',
                            }}
                            onMouseEnter={e => {
                                const el = e.currentTarget;
                                el.style.transform = 'translateY(-6px)';
                                el.style.boxShadow = '0 20px 60px rgba(0,82,255,0.15)';
                            }}
                            onMouseLeave={e => {
                                const el = e.currentTarget;
                                el.style.transform = 'translateY(0)';
                                el.style.boxShadow = '0 8px 32px rgba(0,82,255,0.1)';
                            }}
                        >
                            {/* Popular badge */}
                            {product.highlight && (
                                <div style={{
                                    position: 'absolute',
                                    top: '-12px',
                                    left: '50%',
                                    transform: 'translateX(-50%)',
                                    background: 'linear-gradient(135deg, #0052ff, #00c6ff)',
                                    color: '#fff',
                                    fontSize: '0.7rem',
                                    fontWeight: 700,
                                    letterSpacing: '1px',
                                    padding: '0.3rem 1rem',
                                    borderRadius: '100px',
                                    whiteSpace: 'nowrap',
                                }}>
                                    ★ FLAGSHIP PRODUCT
                                </div>
                            )}

                            {/* Icon */}
                            <div style={{
                                width: '56px',
                                height: '56px',
                                background: 'linear-gradient(135deg, #0052ff, #00c6ff)',
                                borderRadius: '14px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginBottom: '1.5rem',
                                boxShadow: '0 8px 20px rgba(0,82,255,0.3)',
                            }}>
                                {product.icon}
                            </div>

                            {/* Name + Badge */}
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: (product as any).subtitle ? '0.25rem' : '1rem' }}>
                                <h3 style={{
                                    fontSize: '1.5rem',
                                    fontWeight: 800,
                                    color: '#0a0a0a',
                                    letterSpacing: '-0.03em',
                                    margin: 0,
                                }}>
                                    {product.name}
                                </h3>
                                <span style={{
                                    background: product.highlight ? 'rgba(0,184,148,0.1)' : '#f5f5f5',
                                    color: product.badgeColor,
                                    fontSize: '0.65rem',
                                    padding: '0.35rem 0.8rem',
                                    borderRadius: '100px',
                                    fontWeight: 700,
                                    letterSpacing: '0.5px',
                                    border: product.highlight ? '1px solid rgba(0,184,148,0.2)' : '1px solid #eee',
                                    flexShrink: 0,
                                    marginLeft: '0.5rem',
                                }}>
                                    {product.badge}
                                </span>
                            </div>

                            {/* Subtitle */}
                            {(product as any).subtitle && (
                                <div style={{ color: '#0052ff', fontWeight: 600, fontSize: '0.95rem', marginBottom: '1rem' }}>
                                    {(product as any).subtitle}
                                </div>
                            )}

                            {/* Description */}
                            <p style={{
                                color: '#666',
                                lineHeight: 1.7,
                                fontSize: '0.95rem',
                                marginBottom: '1.75rem',
                            }}>
                                {product.desc}
                            </p>

                            {/* Features */}
                            {product.features && product.features.length > 0 && (
                                <ul style={{ listStyle: 'none', marginBottom: '2rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                                    {product.features.map((feat, j) => (
                                        <li key={j} style={{
                                            display: 'flex',
                                            alignItems: 'flex-start',
                                            gap: '0.6rem',
                                            fontSize: '0.875rem',
                                            color: '#444',
                                            lineHeight: 1.5,
                                        }}>
                                            <div style={{ marginTop: '0.15rem', flexShrink: 0 }}>
                                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0052ff" strokeWidth="2.5">
                                                    <polyline points="20 6 9 17 4 12" />
                                                </svg>
                                            </div>
                                            <div>{feat}</div>
                                        </li>
                                    ))}
                                </ul>
                            )}

                            {/* CTA */}
                            <a
                                href={(product as any).fullContent ? '#' : '#contact'}
                                onClick={(e) => {
                                    if ((product as any).fullContent) {
                                        e.preventDefault();
                                        setActiveModal(product.id);
                                    }
                                }}
                                style={{
                                    marginTop: 'auto',
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '0.5rem',
                                    padding: '0.75rem 1.5rem',
                                    background: 'linear-gradient(135deg, #0052ff, #0041cc)',
                                    color: '#fff',
                                    border: 'none',
                                    borderRadius: '8px',
                                    fontWeight: 600,
                                    fontSize: '0.875rem',
                                    textDecoration: 'none',
                                    transition: 'all 0.2s ease',
                                    boxShadow: '0 4px 16px rgba(0,82,255,0.25)',
                                    width: '100%',
                                    justifyContent: 'center',
                                }}
                                onMouseEnter={e => {
                                    (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
                                    (e.currentTarget as HTMLElement).style.boxShadow = '0 6px 20px rgba(0,82,255,0.3)';
                                }}
                                onMouseLeave={e => {
                                    (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                                    (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 16px rgba(0,82,255,0.25)';
                                }}
                            >
                                {product.cta}
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </a>
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal Overlay for Full Content */}
            {activeModal && activeProduct && (activeProduct as any).fullContent && (
                <div
                    style={{
                        position: 'fixed',
                        inset: 0,
                        zIndex: 9999,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '1.5rem',
                    }}
                >
                    <div
                        style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(4px)' }}
                        onClick={() => setActiveModal(null)}
                    />

                    <div style={{
                        position: 'relative',
                        background: '#fff',
                        width: '100%',
                        maxWidth: '800px',
                        maxHeight: '90vh',
                        borderRadius: '24px',
                        overflow: 'hidden',
                        display: 'flex',
                        flexDirection: 'column',
                        boxShadow: '0 24px 80px rgba(0,0,0,0.2)',
                        animation: 'modalSlideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                    }}>
                        {/* Modal Header */}
                        <div style={{
                            padding: '2.5rem',
                            borderBottom: '1px solid #f0f0f0',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '1.5rem',
                            background: '#fafafa',
                        }}>
                            <div style={{
                                width: '64px',
                                height: '64px',
                                background: activeProduct.highlight ? 'linear-gradient(135deg, #0052ff, #00c6ff)' : 'linear-gradient(135deg, #333, #555)',
                                borderRadius: '16px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                flexShrink: 0,
                                boxShadow: activeProduct.highlight ? '0 12px 24px rgba(0,82,255,0.2)' : 'none',
                            }}>
                                {activeProduct.icon}
                            </div>
                            <div>
                                <h3 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#0a0a0a', marginBottom: '0.25rem', letterSpacing: '-0.02em' }}>
                                    {(activeProduct as any).fullContent.title}
                                </h3>
                                <p style={{ color: '#0052ff', fontWeight: 600, fontSize: '0.9rem' }}>
                                    {activeProduct.badge}
                                </p>
                            </div>
                            <button
                                onClick={() => setActiveModal(null)}
                                style={{
                                    marginLeft: 'auto',
                                    background: 'none',
                                    border: 'none',
                                    color: '#999',
                                    cursor: 'pointer',
                                    padding: '0.5rem',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    borderRadius: '50%',
                                    transition: 'all 0.2s',
                                }}
                                onMouseEnter={e => {
                                    (e.currentTarget as HTMLElement).style.background = '#eee';
                                    (e.currentTarget as HTMLElement).style.color = '#333';
                                }}
                                onMouseLeave={e => {
                                    (e.currentTarget as HTMLElement).style.background = 'none';
                                    (e.currentTarget as HTMLElement).style.color = '#999';
                                }}
                            >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <line x1="18" y1="6" x2="6" y2="18" />
                                    <line x1="6" y1="6" x2="18" y2="18" />
                                </svg>
                            </button>
                        </div>

                        {/* Modal Body */}
                        <div style={{ padding: '2.5rem', overflowY: 'auto' }}>
                            <p style={{
                                fontSize: '1.1rem',
                                color: '#444',
                                lineHeight: 1.8,
                                marginBottom: '2.5rem',
                            }}>
                                {(activeProduct as any).fullContent.desc}
                            </p>

                            <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#0a0a0a', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0052ff" strokeWidth="2">
                                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                </svg>
                                Enterprise Capabilities
                            </h4>

                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
                                {((activeProduct as any).fullContent.features || []).map((feat: any, idx: number) => (
                                    <div key={idx} style={{
                                        padding: '1.5rem',
                                        background: '#f8f9fc',
                                        borderRadius: '12px',
                                        border: '1px solid #eef2f6',
                                    }}>
                                        <div style={{ fontSize: '1rem', fontWeight: 700, color: '#0a0a0a', marginBottom: '0.5rem' }}>
                                            {feat.title}
                                        </div>
                                        <div style={{ fontSize: '0.9rem', color: '#666', lineHeight: 1.6 }}>
                                            {feat.desc}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Modal Footer */}
                        <div style={{
                            padding: '1.5rem 2.5rem',
                            borderTop: '1px solid #f0f0f0',
                            background: '#fafafa',
                            display: 'flex',
                            justifyContent: 'flex-end',
                            gap: '1rem',
                        }}>
                            <a
                                href="#contact"
                                onClick={() => setActiveModal(null)}
                                style={{
                                    padding: '0.75rem 2rem',
                                    background: 'linear-gradient(135deg, #000, #333)',
                                    color: '#fff',
                                    borderRadius: '8px',
                                    fontWeight: 600,
                                    textDecoration: 'none',
                                    transition: 'transform 0.2s, box-shadow 0.2s',
                                    boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                                }}
                                onMouseEnter={e => {
                                    (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
                                    (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 20px rgba(0,0,0,0.2)';
                                }}
                                onMouseLeave={e => {
                                    (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                                    (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
                                }}
                            >
                                Contact Enterprise Sales
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default ProductShowcase;
