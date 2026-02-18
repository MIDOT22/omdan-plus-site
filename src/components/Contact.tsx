import React, { useState } from 'react';

const Contact = () => {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        company: '',
        type: 'Request Demo',
        message: '',
    });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
    };

    const inputStyle: React.CSSProperties = {
        width: '100%',
        padding: '0.875rem 1rem',
        border: '1px solid #e0e0e0',
        borderRadius: '8px',
        background: '#fafafa',
        fontSize: '0.95rem',
        outline: 'none',
        transition: 'all 0.2s ease',
        fontFamily: 'inherit',
        color: '#0a0a0a',
    };

    const labelStyle: React.CSSProperties = {
        display: 'block',
        fontSize: '0.8rem',
        fontWeight: 700,
        color: '#444',
        marginBottom: '0.5rem',
        letterSpacing: '0.5px',
        textTransform: 'uppercase',
    };

    const handleFocus = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        e.target.style.borderColor = '#0052ff';
        e.target.style.background = '#fff';
        e.target.style.boxShadow = '0 0 0 3px rgba(0,82,255,0.08)';
    };
    const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        e.target.style.borderColor = '#e0e0e0';
        e.target.style.background = '#fafafa';
        e.target.style.boxShadow = 'none';
    };

    return (
        <section id="contact" style={{ padding: '8rem 0', background: '#fafafa', borderTop: '1px solid #f0f0f0' }}>
            <div className="container">
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1.2fr',
                    gap: '5rem',
                    alignItems: 'start',
                }} className="contact-grid">
                    {/* Left: Info */}
                    <div>
                        <span className="tag">Get In Touch</span>
                        <h2 style={{
                            fontSize: 'clamp(2rem, 4vw, 2.75rem)',
                            fontWeight: 800,
                            color: '#0a0a0a',
                            marginBottom: '1.25rem',
                            letterSpacing: '-0.03em',
                        }}>
                            Partner with OmdanAI
                        </h2>
                        <p style={{ color: '#666', lineHeight: 1.8, fontSize: '1.05rem', marginBottom: '3rem' }}>
                            Schedule a demonstration or speak with our solutions team. We work with insurance carriers, property managers, and enterprise clients.
                        </p>

                        {/* Contact methods */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            {[
                                {
                                    icon: (
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                            <polyline points="22,6 12,13 2,6" />
                                        </svg>
                                    ),
                                    label: 'Email',
                                    value: 'contact@omdanai.com',
                                },
                                {
                                    icon: (
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                                            <circle cx="12" cy="10" r="3" />
                                        </svg>
                                    ),
                                    label: 'Headquarters',
                                    value: 'Tel Aviv, Israel',
                                },
                                {
                                    icon: (
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <circle cx="12" cy="12" r="10" />
                                            <polyline points="12 6 12 12 16 14" />
                                        </svg>
                                    ),
                                    label: 'Response Time',
                                    value: 'Within 24 hours',
                                },
                            ].map((item, i) => (
                                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                    <div style={{
                                        width: '44px',
                                        height: '44px',
                                        background: 'rgba(0,82,255,0.06)',
                                        borderRadius: '10px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: '#0052ff',
                                        flexShrink: 0,
                                    }}>
                                        {item.icon}
                                    </div>
                                    <div>
                                        <div style={{ fontSize: '0.78rem', color: '#999', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '0.1rem' }}>
                                            {item.label}
                                        </div>
                                        <div style={{ fontSize: '0.95rem', color: '#0a0a0a', fontWeight: 500 }}>
                                            {item.value}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Form */}
                    <div style={{
                        background: '#fff',
                        padding: '2.5rem',
                        borderRadius: '16px',
                        border: '1px solid #e8e8e8',
                        boxShadow: '0 8px 40px rgba(0,0,0,0.04)',
                    }}>
                        {submitted ? (
                            <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
                                <div style={{
                                    width: '64px',
                                    height: '64px',
                                    background: 'rgba(0,184,148,0.1)',
                                    borderRadius: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    margin: '0 auto 1.5rem',
                                }}>
                                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#00b894" strokeWidth="2.5">
                                        <polyline points="20 6 9 17 4 12" />
                                    </svg>
                                </div>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0a0a0a', marginBottom: '0.75rem' }}>
                                    Message Received!
                                </h3>
                                <p style={{ color: '#666', lineHeight: 1.7 }}>
                                    Thank you for reaching out. Our team will get back to you within 24 hours.
                                </p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                                    <div>
                                        <label style={labelStyle}>Name</label>
                                        <input
                                            type="text"
                                            id="contact-name"
                                            required
                                            style={inputStyle}
                                            placeholder="Full Name"
                                            value={formState.name}
                                            onChange={e => setFormState(s => ({ ...s, name: e.target.value }))}
                                            onFocus={handleFocus}
                                            onBlur={handleBlur}
                                        />
                                    </div>
                                    <div>
                                        <label style={labelStyle}>Email</label>
                                        <input
                                            type="email"
                                            id="contact-email"
                                            required
                                            style={inputStyle}
                                            placeholder="work@company.com"
                                            value={formState.email}
                                            onChange={e => setFormState(s => ({ ...s, email: e.target.value }))}
                                            onFocus={handleFocus}
                                            onBlur={handleBlur}
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label style={labelStyle}>Company</label>
                                    <input
                                        type="text"
                                        id="contact-company"
                                        style={inputStyle}
                                        placeholder="Company Name"
                                        value={formState.company}
                                        onChange={e => setFormState(s => ({ ...s, company: e.target.value }))}
                                        onFocus={handleFocus}
                                        onBlur={handleBlur}
                                    />
                                </div>

                                <div>
                                    <label style={labelStyle}>Inquiry Type</label>
                                    <select
                                        id="contact-type"
                                        style={{ ...inputStyle, cursor: 'pointer' }}
                                        value={formState.type}
                                        onChange={e => setFormState(s => ({ ...s, type: e.target.value }))}
                                        onFocus={handleFocus}
                                        onBlur={handleBlur}
                                    >
                                        <option>Request Demo</option>
                                        <option>Enterprise Partnership</option>
                                        <option>API Integration</option>
                                        <option>Technical Support</option>
                                        <option>Investor Relations</option>
                                        <option>Press & Media</option>
                                    </select>
                                </div>

                                <div>
                                    <label style={labelStyle}>Message</label>
                                    <textarea
                                        id="contact-message"
                                        rows={4}
                                        style={{ ...inputStyle, resize: 'vertical', minHeight: '120px' }}
                                        placeholder="Tell us about your needs and use case..."
                                        value={formState.message}
                                        onChange={e => setFormState(s => ({ ...s, message: e.target.value }))}
                                        onFocus={handleFocus}
                                        onBlur={handleBlur}
                                    />
                                </div>

                                <button
                                    type="submit"
                                    id="contact-submit"
                                    style={{
                                        width: '100%',
                                        padding: '1rem',
                                        background: 'linear-gradient(135deg, #0052ff, #0041cc)',
                                        color: '#fff',
                                        border: 'none',
                                        borderRadius: '8px',
                                        fontSize: '1rem',
                                        fontWeight: 700,
                                        cursor: 'pointer',
                                        letterSpacing: '0.01em',
                                        transition: 'all 0.3s ease',
                                        boxShadow: '0 4px 16px rgba(0,82,255,0.25)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        gap: '0.5rem',
                                    }}
                                    onMouseEnter={e => {
                                        (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
                                        (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 24px rgba(0,82,255,0.35)';
                                    }}
                                    onMouseLeave={e => {
                                        (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                                        (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 16px rgba(0,82,255,0.25)';
                                    }}
                                >
                                    Submit Inquiry
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                        <line x1="22" y1="2" x2="11" y2="13" />
                                        <polygon points="22 2 15 22 11 13 2 9 22 2" />
                                    </svg>
                                </button>

                                <p style={{ fontSize: '0.78rem', color: '#aaa', textAlign: 'center' }}>
                                    By submitting, you agree to our Privacy Policy. No spam, ever.
                                </p>
                            </form>
                        )}
                    </div>
                </div>
            </div>

            <style>{`
                @media (max-width: 900px) {
                    .contact-grid {
                        grid-template-columns: 1fr !important;
                        gap: 3rem !important;
                    }
                }
                @media (max-width: 480px) {
                    form > div:first-child {
                        grid-template-columns: 1fr !important;
                    }
                }
            `}</style>
        </section>
    );
};

export default Contact;
