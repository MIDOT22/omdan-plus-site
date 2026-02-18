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
        desc: 'A full-suite platform for insurance carriers and property managers. Batch processing, team dashboards, and deep ERP integrations.',
        features: ['Batch Processing', 'Team Dashboards', 'ERP Integration', 'Custom Workflows'],
        cta: 'Join Waitlist',
        highlight: false,
    },
    {
        id: 'omdan-api',
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="16 18 22 12 16 6" />
                <polyline points="8 6 2 12 8 18" />
            </svg>
        ),
        name: 'OmdanAPI',
        badge: 'COMING SOON',
        badgeColor: '#888',
        desc: 'Headless API access to the full OmdanAI engine. Build your own products on top of our assessment and pricing infrastructure.',
        features: ['REST & GraphQL', 'Webhook Support', 'SLA Guarantee', 'Sandbox Environment'],
        cta: 'View Docs',
        highlight: false,
    },
];

const ProductShowcase = () => {
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
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '1.5rem',
                    alignItems: 'start',
                }}>
                    {products.map((product) => (
                        <div
                            key={product.id}
                            id={`product-${product.id}`}
                            style={{
                                border: product.highlight ? '1.5px solid #0052ff' : '1px solid #ebebeb',
                                borderRadius: '16px',
                                padding: '2.5rem',
                                background: product.highlight ? 'linear-gradient(135deg, #fafcff 0%, #f0f5ff 100%)' : '#fff',
                                position: 'relative',
                                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                boxShadow: product.highlight ? '0 8px 32px rgba(0,82,255,0.1)' : 'none',
                            }}
                            onMouseEnter={e => {
                                const el = e.currentTarget;
                                el.style.transform = 'translateY(-6px)';
                                el.style.boxShadow = product.highlight
                                    ? '0 20px 60px rgba(0,82,255,0.15)'
                                    : '0 20px 60px rgba(0,0,0,0.08)';
                            }}
                            onMouseLeave={e => {
                                const el = e.currentTarget;
                                el.style.transform = 'translateY(0)';
                                el.style.boxShadow = product.highlight ? '0 8px 32px rgba(0,82,255,0.1)' : 'none';
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
                                background: product.highlight
                                    ? 'linear-gradient(135deg, #0052ff, #00c6ff)'
                                    : 'linear-gradient(135deg, #333, #555)',
                                borderRadius: '14px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginBottom: '1.5rem',
                                boxShadow: product.highlight ? '0 8px 20px rgba(0,82,255,0.3)' : 'none',
                            }}>
                                {product.icon}
                            </div>

                            {/* Name + Badge */}
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
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
                                    padding: '0.3rem 0.6rem',
                                    borderRadius: '6px',
                                    fontWeight: 700,
                                    letterSpacing: '0.5px',
                                    border: product.highlight ? '1px solid rgba(0,184,148,0.2)' : '1px solid #eee',
                                    flexShrink: 0,
                                    marginLeft: '0.5rem',
                                }}>
                                    {product.badge}
                                </span>
                            </div>

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
                            <ul style={{ listStyle: 'none', marginBottom: '2rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                {product.features.map((feat, j) => (
                                    <li key={j} style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '0.6rem',
                                        fontSize: '0.875rem',
                                        color: '#444',
                                    }}>
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={product.highlight ? '#0052ff' : '#888'} strokeWidth="2.5">
                                            <polyline points="20 6 9 17 4 12" />
                                        </svg>
                                        {feat}
                                    </li>
                                ))}
                            </ul>

                            {/* CTA */}
                            <a
                                href="#contact"
                                style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '0.5rem',
                                    padding: '0.75rem 1.5rem',
                                    background: product.highlight ? 'linear-gradient(135deg, #0052ff, #0041cc)' : 'transparent',
                                    color: product.highlight ? '#fff' : '#0a0a0a',
                                    border: product.highlight ? 'none' : '1px solid #ddd',
                                    borderRadius: '8px',
                                    fontWeight: 600,
                                    fontSize: '0.875rem',
                                    textDecoration: 'none',
                                    transition: 'all 0.2s ease',
                                    boxShadow: product.highlight ? '0 4px 16px rgba(0,82,255,0.25)' : 'none',
                                    width: '100%',
                                    justifyContent: 'center',
                                }}
                                onMouseEnter={e => {
                                    if (!product.highlight) {
                                        (e.currentTarget as HTMLElement).style.background = '#f5f5f5';
                                        (e.currentTarget as HTMLElement).style.borderColor = '#000';
                                    }
                                }}
                                onMouseLeave={e => {
                                    if (!product.highlight) {
                                        (e.currentTarget as HTMLElement).style.background = 'transparent';
                                        (e.currentTarget as HTMLElement).style.borderColor = '#ddd';
                                    }
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
        </section>
    );
};

export default ProductShowcase;
