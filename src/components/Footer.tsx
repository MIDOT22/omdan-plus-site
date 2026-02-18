import React from 'react';

const Footer = () => {
    const year = new Date().getFullYear();

    const sections = [
        {
            title: 'Solutions',
            links: [
                { label: 'Assessment Engine', href: '#tech' },
                { label: 'Risk Modeling', href: '#tech' },
                { label: 'Data Integration', href: '#tech' },
                { label: 'Enterprise API', href: '#products' },
            ],
        },
        {
            title: 'Products',
            links: [
                { label: 'OmdanAI App', href: '#products' },
                { label: 'OmdanEnterprise', href: '#products' },
                { label: 'OmdanAPI', href: '#products' },
                { label: 'Pricing', href: '#contact' },
            ],
        },
        {
            title: 'Company',
            links: [
                { label: 'About', href: '#about' },
                { label: 'Careers', href: '#contact' },
                { label: 'Press', href: '#contact' },
                { label: 'Legal', href: '#contact' },
            ],
        },
    ];

    return (
        <footer style={{
            background: 'linear-gradient(180deg, #0a0a0a 0%, #050505 100%)',
            color: '#fff',
            paddingTop: '6rem',
            paddingBottom: '3rem',
        }}>
            <div className="container">
                {/* Top section */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1.5fr repeat(3, 1fr)',
                    gap: '3rem',
                    marginBottom: '5rem',
                }} className="footer-grid">
                    {/* Brand */}
                    <div>
                        {/* Logo */}
                        <a href="#" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', textDecoration: 'none', marginBottom: '1.5rem' }}>
                            <div style={{
                                width: '34px',
                                height: '34px',
                                background: 'linear-gradient(135deg, #0052ff 0%, #00c6ff 100%)',
                                borderRadius: '8px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}>
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <span style={{ fontWeight: 800, fontSize: '1.15rem', letterSpacing: '-0.5px', color: '#fff' }}>
                                Omdan<span style={{ color: '#0052ff' }}>AI</span>
                            </span>
                        </a>
                        <p style={{ color: '#555', lineHeight: 1.7, fontSize: '0.9rem', maxWidth: '260px', marginBottom: '2rem' }}>
                            Providing the structural framework for enterprise property intelligence. Built for the future of insurance and real estate.
                        </p>
                        {/* Social links */}
                        <div style={{ display: 'flex', gap: '0.75rem' }}>
                            {[
                                { label: 'LinkedIn', icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg> },
                                { label: 'Twitter', icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" /></svg> },
                                { label: 'GitHub', icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" /></svg> },
                            ].map((social) => (
                                <a
                                    key={social.label}
                                    href="#"
                                    aria-label={social.label}
                                    style={{
                                        width: '36px',
                                        height: '36px',
                                        background: 'rgba(255,255,255,0.06)',
                                        borderRadius: '8px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: '#666',
                                        transition: 'all 0.2s ease',
                                        textDecoration: 'none',
                                    }}
                                    onMouseEnter={e => {
                                        (e.currentTarget as HTMLElement).style.background = 'rgba(0,82,255,0.2)';
                                        (e.currentTarget as HTMLElement).style.color = '#0052ff';
                                    }}
                                    onMouseLeave={e => {
                                        (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.06)';
                                        (e.currentTarget as HTMLElement).style.color = '#666';
                                    }}
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Nav sections */}
                    {sections.map((section) => (
                        <div key={section.title}>
                            <h6 style={{
                                fontSize: '0.75rem',
                                fontWeight: 700,
                                letterSpacing: '1.5px',
                                marginBottom: '1.5rem',
                                color: '#444',
                                textTransform: 'uppercase',
                            }}>
                                {section.title}
                            </h6>
                            <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                                {section.links.map((link) => (
                                    <a
                                        key={link.label}
                                        href={link.href}
                                        style={{
                                            color: '#555',
                                            textDecoration: 'none',
                                            fontSize: '0.9rem',
                                            transition: 'color 0.2s ease',
                                            display: 'inline-block',
                                        }}
                                        onMouseEnter={e => (e.target as HTMLElement).style.color = '#fff'}
                                        onMouseLeave={e => (e.target as HTMLElement).style.color = '#555'}
                                    >
                                        {link.label}
                                    </a>
                                ))}
                            </nav>
                        </div>
                    ))}
                </div>

                {/* Bottom bar */}
                <div style={{
                    borderTop: '1px solid #1a1a1a',
                    paddingTop: '2rem',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    gap: '1rem',
                    color: '#444',
                    fontSize: '0.85rem',
                }}>
                    <div>© {year} OmdanAI Group. All rights reserved.</div>
                    <div style={{ display: 'flex', gap: '2rem' }}>
                        <a href="#" style={{ color: '#444', textDecoration: 'none', transition: 'color 0.2s' }}
                            onMouseEnter={e => (e.target as HTMLElement).style.color = '#fff'}
                            onMouseLeave={e => (e.target as HTMLElement).style.color = '#444'}>
                            Privacy Policy
                        </a>
                        <a href="#" style={{ color: '#444', textDecoration: 'none', transition: 'color 0.2s' }}
                            onMouseEnter={e => (e.target as HTMLElement).style.color = '#fff'}
                            onMouseLeave={e => (e.target as HTMLElement).style.color = '#444'}>
                            Terms of Service
                        </a>
                        <a href="#" style={{ color: '#444', textDecoration: 'none', transition: 'color 0.2s' }}
                            onMouseEnter={e => (e.target as HTMLElement).style.color = '#fff'}
                            onMouseLeave={e => (e.target as HTMLElement).style.color = '#444'}>
                            Cookie Policy
                        </a>
                    </div>
                </div>
            </div>

            <style>{`
                @media (max-width: 900px) {
                    .footer-grid {
                        grid-template-columns: 1fr 1fr !important;
                    }
                }
                @media (max-width: 560px) {
                    .footer-grid {
                        grid-template-columns: 1fr !important;
                    }
                }
            `}</style>
        </footer>
    );
};

export default Footer;
