import React from 'react';

// SVG Illustration: Real Estate Dashboard
const RealEstateIllustration = () => (
    <svg viewBox="0 0 480 360" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
        <rect width="480" height="360" fill="#0a0a1a" />
        {/* Grid */}
        <defs>
            <pattern id="grid1" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(0,82,255,0.08)" strokeWidth="1" />
            </pattern>
        </defs>
        <rect width="480" height="360" fill="url(#grid1)" />
        {/* Main card */}
        <rect x="24" y="24" width="280" height="180" rx="10" fill="#111827" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
        {/* Chart bars */}
        <rect x="44" y="120" width="24" height="64" rx="4" fill="rgba(0,82,255,0.3)" />
        <rect x="76" y="90" width="24" height="94" rx="4" fill="rgba(0,82,255,0.5)" />
        <rect x="108" y="70" width="24" height="114" rx="4" fill="rgba(0,82,255,0.7)" />
        <rect x="140" y="50" width="24" height="134" rx="4" fill="#0052ff" />
        <rect x="172" y="80" width="24" height="104" rx="4" fill="rgba(0,82,255,0.6)" />
        <rect x="204" y="60" width="24" height="124" rx="4" fill="rgba(0,82,255,0.8)" />
        <rect x="236" y="40" width="24" height="144" rx="4" fill="#0052ff" />
        {/* Labels */}
        <text x="44" y="200" fill="#888" fontSize="10" fontFamily="monospace">Q1</text>
        <text x="76" y="200" fill="#888" fontSize="10" fontFamily="monospace">Q2</text>
        <text x="108" y="200" fill="#888" fontSize="10" fontFamily="monospace">Q3</text>
        <text x="140" y="200" fill="#888" fontSize="10" fontFamily="monospace">Q4</text>
        <text x="172" y="200" fill="#888" fontSize="10" fontFamily="monospace">Q5</text>
        <text x="204" y="200" fill="#888" fontSize="10" fontFamily="monospace">Q6</text>
        <text x="236" y="200" fill="#888" fontSize="10" fontFamily="monospace">Q7</text>
        {/* Title */}
        <text x="44" y="44" fill="#ffffff" fontSize="13" fontWeight="700" fontFamily="sans-serif">Property Value Index</text>
        <text x="44" y="60" fill="#4d8fff" fontSize="11" fontFamily="monospace">+18.4% YoY</text>
        {/* Right panel */}
        <rect x="320" y="24" width="136" height="80" rx="8" fill="#111827" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
        <text x="336" y="44" fill="#aaaaaa" fontSize="10" fontFamily="monospace">PORTFOLIO VALUE</text>
        <text x="336" y="66" fill="#ffffff" fontSize="20" fontWeight="800" fontFamily="sans-serif">€3.8M</text>
        <text x="336" y="82" fill="#00e0a0" fontSize="10" fontFamily="monospace">↑ 12.3% this month</text>
        {/* Map placeholder */}
        <rect x="320" y="116" width="136" height="88" rx="8" fill="#111827" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
        <circle cx="388" cy="155" r="30" fill="rgba(0,82,255,0.1)" stroke="rgba(0,82,255,0.3)" strokeWidth="1" />
        <circle cx="388" cy="155" r="4" fill="#0052ff" />
        <circle cx="370" cy="145" r="3" fill="rgba(0,82,255,0.6)" />
        <circle cx="400" cy="165" r="3" fill="rgba(0,82,255,0.6)" />
        <circle cx="380" cy="168" r="2" fill="rgba(0,82,255,0.4)" />
        <text x="336" y="134" fill="#aaaaaa" fontSize="10" fontFamily="monospace">GEO COVERAGE</text>
        {/* Bottom row */}
        <rect x="24" y="216" width="136" height="60" rx="8" fill="#111827" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
        <text x="40" y="235" fill="#aaaaaa" fontSize="10" fontFamily="monospace">ACCURACY SCORE</text>
        <text x="40" y="260" fill="#ffffff" fontSize="24" fontWeight="800" fontFamily="sans-serif">94.2%</text>
        <rect x="172" y="216" width="136" height="60" rx="8" fill="#111827" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
        <text x="188" y="235" fill="#aaaaaa" fontSize="10" fontFamily="monospace">REPORTS TODAY</text>
        <text x="188" y="260" fill="#ffffff" fontSize="24" fontWeight="800" fontFamily="sans-serif">1,847</text>
        <rect x="320" y="216" width="136" height="60" rx="8" fill="#111827" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
        <text x="336" y="235" fill="#aaaaaa" fontSize="10" fontFamily="monospace">AVG PROCESS TIME</text>
        <text x="336" y="260" fill="#00e0a0" fontSize="24" fontWeight="800" fontFamily="sans-serif">28s</text>
        {/* Scan line animation */}
        <rect x="24" y="24" width="432" height="2" fill="url(#scanGrad)" opacity="0.4">
            <animateTransform attributeName="transform" type="translate" from="0,0" to="0,312" dur="3s" repeatCount="indefinite" />
        </rect>
        <defs>
            <linearGradient id="scanGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="transparent" />
                <stop offset="50%" stopColor="#0052ff" />
                <stop offset="100%" stopColor="transparent" />
            </linearGradient>
        </defs>
    </svg>
);

// SVG Illustration: Insurance Claims AI
const InsuranceIllustration = () => (
    <svg viewBox="0 0 480 360" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
        <rect width="480" height="360" fill="#0d1117" />
        {/* Left: Photo analysis */}
        <rect x="20" y="20" width="210" height="320" rx="10" fill="#161b22" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
        <text x="36" y="42" fill="#aaaaaa" fontSize="11" fontFamily="monospace">DAMAGE PHOTO</text>
        {/* Simulated damaged wall photo */}
        <rect x="36" y="52" width="178" height="120" rx="6" fill="#1c1c1c" />
        <rect x="36" y="52" width="178" height="120" rx="6" fill="url(#fireGrad)" opacity="0.3" />
        {/* Damage overlay boxes */}
        <rect x="60" y="70" width="50" height="40" rx="2" fill="none" stroke="#ff6b6b" strokeWidth="2" strokeDasharray="4,2" />
        <text x="62" y="68" fill="#ff6b6b" fontSize="9" fontFamily="monospace" fontWeight="700">FIRE DMG</text>
        <rect x="130" y="90" width="60" height="50" rx="2" fill="none" stroke="#ffd93d" strokeWidth="2" strokeDasharray="4,2" />
        <text x="132" y="88" fill="#ffd93d" fontSize="9" fontFamily="monospace" fontWeight="700">SMOKE</text>
        <rect x="50" y="120" width="40" height="30" rx="2" fill="none" stroke="#74b9ff" strokeWidth="2" strokeDasharray="4,2" />
        <text x="52" y="118" fill="#74b9ff" fontSize="9" fontFamily="monospace" fontWeight="700">WATER</text>
        <defs>
            <linearGradient id="fireGrad" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#ff6b6b" />
                <stop offset="100%" stopColor="#ffd93d" />
            </linearGradient>
        </defs>
        {/* Confidence scores */}
        <text x="36" y="192" fill="#aaaaaa" fontSize="11" fontFamily="monospace">DETECTION CONFIDENCE</text>
        {[
            { label: 'Fire Damage', pct: 94, color: '#ff6b6b' },
            { label: 'Smoke Damage', pct: 87, color: '#ffd93d' },
            { label: 'Water Damage', pct: 72, color: '#74b9ff' },
        ].map((item, i) => (
            <g key={i} transform={`translate(36, ${208 + i * 36})`}>
                <text fill="#dddddd" fontSize="11" fontFamily="monospace" fontWeight="600" y="11">{item.label}</text>
                <text fill={item.color} fontSize="12" fontFamily="monospace" fontWeight="800" x="128" y="11">{item.pct}%</text>
                <rect y="18" width="178" height="8" rx="4" fill="rgba(255,255,255,0.08)" />
                <rect y="18" width={178 * item.pct / 100} height="8" rx="4" fill={item.color} opacity="1" />
            </g>
        ))}
        {/* Right: Assessment panel */}
        <rect x="246" y="20" width="214" height="320" rx="10" fill="#161b22" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
        <text x="262" y="42" fill="#aaaaaa" fontSize="11" fontFamily="monospace">AI ASSESSMENT</text>
        {/* Status badge */}
        <rect x="262" y="52" width="90" height="22" rx="11" fill="rgba(0,184,148,0.2)" stroke="rgba(0,184,148,0.5)" strokeWidth="1.5" />
        <text x="272" y="67" fill="#00e0a0" fontSize="10" fontFamily="monospace" fontWeight="700">● APPROVED</text>
        {/* Cost breakdown */}
        <text x="262" y="94" fill="#aaaaaa" fontSize="11" fontFamily="monospace">ESTIMATED COST</text>
        <text x="262" y="122" fill="#ffffff" fontSize="30" fontWeight="800" fontFamily="sans-serif">€1,970</text>
        <text x="262" y="138" fill="#888888" fontSize="10" fontFamily="monospace">± 5% confidence interval</text>
        {/* Line items */}
        <line x1="262" y1="152" x2="444" y2="152" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
        {[
            { label: 'Structural Repair', cost: '€1,200' },
            { label: 'Smoke Remediation', cost: '€450' },
            { label: 'Water Extraction', cost: '€320' },
            { label: 'Content Replacement', cost: '€0' },
        ].map((item, i) => (
            <g key={i} transform={`translate(262, ${164 + i * 26})`}>
                <text fill="#cccccc" fontSize="11" fontFamily="monospace" y="10">{item.label}</text>
                <text fill="#ffffff" fontSize="11" fontFamily="monospace" fontWeight="700" x="118" y="10">{item.cost}</text>
            </g>
        ))}
        <line x1="262" y1="272" x2="444" y2="272" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
        <text x="262" y="290" fill="#aaaaaa" fontSize="11" fontFamily="monospace">TOTAL CLAIM</text>
        <text x="348" y="290" fill="#00e0a0" fontSize="13" fontWeight="800" fontFamily="sans-serif">€1,970</text>
        {/* Process time */}
        <rect x="262" y="302" width="182" height="26" rx="7" fill="rgba(0,82,255,0.15)" stroke="rgba(0,82,255,0.4)" strokeWidth="1.5" />
        <text x="270" y="319" fill="#4d8fff" fontSize="11" fontFamily="monospace" fontWeight="600">⚡ Processed in 28 seconds</text>
    </svg>
);

// SVG Illustration: Private Property Advocacy
const InfrastructureIllustration = () => (
    <svg viewBox="0 0 480 360" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
        <rect width="480" height="360" fill="#080d18" />
        <defs>
            <pattern id="grid3" width="30" height="30" patternUnits="userSpaceOnUse">
                <path d="M 30 0 L 0 0 0 30" fill="none" stroke="rgba(108,92,231,0.07)" strokeWidth="1" />
            </pattern>
            <linearGradient id="houseGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#6c5ce7" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#6c5ce7" stopOpacity="0.05" />
            </linearGradient>
        </defs>
        <rect width="480" height="360" fill="url(#grid3)" />

        {/* House outline – centre graphic */}
        <g transform="translate(170, 60)">
            {/* Roof */}
            <polygon points="70,0 140,60 0,60" fill="url(#houseGrad)" stroke="#6c5ce7" strokeWidth="2" />
            {/* Walls */}
            <rect x="15" y="60" width="110" height="80" fill="rgba(108,92,231,0.1)" stroke="#6c5ce7" strokeWidth="2" />
            {/* Door */}
            <rect x="55" y="105" width="30" height="35" rx="3" fill="rgba(108,92,231,0.25)" stroke="rgba(108,92,231,0.6)" strokeWidth="1.5" />
            {/* Window left */}
            <rect x="22" y="72" width="28" height="24" rx="3" fill="rgba(0,198,255,0.15)" stroke="rgba(0,198,255,0.5)" strokeWidth="1.5" />
            {/* Window right */}
            <rect x="90" y="72" width="28" height="24" rx="3" fill="rgba(0,198,255,0.15)" stroke="rgba(0,198,255,0.5)" strokeWidth="1.5" />
            {/* Damage marker */}
            <circle cx="105" cy="88" r="8" fill="rgba(255,107,107,0.2)" stroke="#ff6b6b" strokeWidth="2" />
            <text x="101" y="93" fill="#ff6b6b" fontSize="10" fontWeight="800" fontFamily="sans-serif">!</text>
        </g>

        {/* Left panel: Property Status */}
        <rect x="16" y="20" width="148" height="118" rx="8" fill="rgba(8,13,24,0.92)" stroke="rgba(108,92,231,0.35)" strokeWidth="1.5" />
        <text x="30" y="40" fill="#aaaaaa" fontSize="11" fontFamily="monospace" fontWeight="600">PROPERTY STATUS</text>
        <rect x="30" y="50" width="110" height="22" rx="11" fill="rgba(0,184,148,0.18)" stroke="rgba(0,184,148,0.5)" strokeWidth="1.5" />
        <text x="40" y="65" fill="#00e0a0" fontSize="11" fontFamily="monospace" fontWeight="700">✔ Analysis Complete</text>
        <text x="30" y="88" fill="#cccccc" fontSize="12" fontFamily="monospace" fontWeight="600">Identified Issues</text>
        <text x="30" y="110" fill="#ffffff" fontSize="26" fontWeight="800" fontFamily="sans-serif">4</text>
        <text x="58" y="110" fill="#aaaaaa" fontSize="11" fontFamily="monospace"> found</text>
        <text x="30" y="130" fill="#888888" fontSize="10" fontFamily="monospace">Roof · Wall · Window · Door</text>

        {/* Right panel: Repair Estimate */}
        <rect x="316" y="20" width="148" height="118" rx="8" fill="rgba(8,13,24,0.92)" stroke="rgba(0,198,255,0.3)" strokeWidth="1.5" />
        <text x="330" y="40" fill="#aaaaaa" fontSize="11" fontFamily="monospace" fontWeight="600">REPAIR ESTIMATE</text>
        <text x="330" y="72" fill="#ffffff" fontSize="28" fontWeight="800" fontFamily="sans-serif">€2,340</text>
        <text x="330" y="88" fill="#00e0a0" fontSize="11" fontFamily="monospace">± 5% margin</text>
        <line x1="330" y1="98" x2="450" y2="98" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
        <text x="330" y="112" fill="#cccccc" fontSize="11" fontFamily="monospace">Contractor verified</text>
        <text x="330" y="128" fill="#4d8fff" fontSize="11" fontFamily="monospace" fontWeight="600">● Independent estimate</text>

        {/* Severity Level bar chart */}
        <rect x="16" y="152" width="448" height="130" rx="8" fill="rgba(8,13,24,0.92)" stroke="rgba(108,92,231,0.2)" strokeWidth="1" />
        <text x="30" y="172" fill="#aaaaaa" fontSize="11" fontFamily="monospace" fontWeight="600">SEVERITY LEVEL</text>
        {[
            { label: 'Roof Damage', pct: 78, color: '#ff6b6b' },
            { label: 'Wall Cracks', pct: 52, color: '#ffd93d' },
            { label: 'Water Ingress', pct: 35, color: '#74b9ff' },
        ].map((item, i) => (
            <g key={i} transform={`translate(30, ${184 + i * 30})`}>
                <text fill="#dddddd" fontSize="11" fontFamily="monospace" fontWeight="600" y="11">{item.label}</text>
                <text fill={item.color} fontSize="13" fontFamily="monospace" fontWeight="800" x="280" y="11">{item.pct}%</text>
                <rect y="16" width="310" height="9" rx="4" fill="rgba(255,255,255,0.07)" />
                <rect y="16" width={310 * item.pct / 100} height="9" rx="4" fill={item.color} opacity="1" />
            </g>
        ))}

        {/* Footer strip */}
        <rect x="16" y="296" width="448" height="48" rx="8" fill="rgba(8,13,24,0.92)" stroke="rgba(0,198,255,0.12)" strokeWidth="1" />
        <polyline
            points="30,320 55,315 78,324 102,311 126,320 150,316 174,320 198,314 222,320 246,315 270,308 294,316 318,320 342,314 366,320 390,315 414,320 438,315 458,320"
            fill="none" stroke="#6c5ce7" strokeWidth="2" opacity="0.85"
        />
        <text x="30" y="336" fill="#aaaaaa" fontSize="11" fontFamily="monospace" fontWeight="600">DAMAGE SCAN — COMPLETE</text>
    </svg>
);

const modules = [
    {
        tag: 'Sector 01',
        title: 'Real Estate Intelligence',
        desc: "Optimizing asset management through predictive analytics and localized execution. Our technology empowers property owners with an immediate cost anchor, while renovation contractors can remotely assess damage severity through the Engineering damage report. This pre-verification allows professionals to filter leads that match their expertise before committing to a site visit, eliminating 'estimate-only' travel and significantly reducing operational overhead for both parties.",
        illustration: <RealEstateIllustration />,
        imageLeft: true,
    },
    {
        tag: 'Sector 02',
        title: 'Insurance: Frictionless Claims Processing',
        headline: 'Accelerate Claims from Weeks to Minutes.',
        desc: 'Lower your Loss Adjustment Expense (LAE) by automating the damage reporting workflow. Our AI engine provides instant, forensic-level assessments that allow your team to settle claims faster and more accurately.',
        features: [
            '<strong>Automated Triage:</strong> Instant damage severity classification.',
            '<strong>Cost Reduction:</strong> Eliminate unnecessary on-site adjuster visits.',
            '<strong>Data Integrity:</strong> High-precision AI analysis for fraud prevention.',
        ],

        illustration: <InsuranceIllustration />,
        imageLeft: false,
    },
    {
        tag: 'Sector 03',
        title: 'Private Property Advocacy',
        desc: 'Empowering homeowners with professional-grade insights before they hire a contractor. For those without insurance coverage, OmdanAI provides a transparent \'source of truth\'—analyzing damage and generating independent cost estimates to ensure fair pricing and technical clarity.',
        illustration: <InfrastructureIllustration />,
        imageLeft: true,
    },
];

const B2BModules = () => {
    return (
        <section id="industries" style={{ padding: '8rem 0', background: '#fafafa', borderTop: '1px solid #f0f0f0' }}>
            <div className="container">
                {/* Header */}
                <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
                    <span className="tag">Industry Applications</span>
                    <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.75rem)', fontWeight: 800, color: '#0a0a0a', marginBottom: '1rem' }}>
                        Targeted Solutions for Specialized Sectors
                    </h2>
                    <p style={{ color: '#666', maxWidth: '560px', margin: '0 auto', fontSize: '1.05rem', lineHeight: 1.7 }}>
                        Purpose-built AI modules designed for the unique demands of each industry vertical.
                    </p>
                </div>

                {/* Modules */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6rem' }}>
                    {modules.map((mod, i) => (
                        <div
                            key={i}
                            style={{
                                display: 'grid',
                                gridTemplateColumns: '1fr 1fr',
                                gap: '4rem',
                                alignItems: 'center',
                            }}
                            className="module-grid"
                        >
                            {/* Illustration */}
                            <div
                                style={{
                                    order: mod.imageLeft ? 0 : 1,
                                    borderRadius: '16px',
                                    overflow: 'hidden',
                                    border: '1px solid #e0e0e0',
                                    boxShadow: '0 20px 60px rgba(0,0,0,0.08)',
                                    aspectRatio: '4/3',
                                    background: '#0a0a1a',
                                    transition: 'transform 0.4s ease, box-shadow 0.4s ease',
                                }}
                                onMouseEnter={e => {
                                    (e.currentTarget as HTMLElement).style.transform = 'scale(1.02)';
                                    (e.currentTarget as HTMLElement).style.boxShadow = '0 30px 80px rgba(0,0,0,0.12)';
                                }}
                                onMouseLeave={e => {
                                    (e.currentTarget as HTMLElement).style.transform = 'scale(1)';
                                    (e.currentTarget as HTMLElement).style.boxShadow = '0 20px 60px rgba(0,0,0,0.08)';
                                }}
                            >
                                {mod.illustration}
                            </div>

                            {/* Text */}
                            <div style={{ order: mod.imageLeft ? 1 : 0 }}>
                                <span style={{
                                    display: 'block',
                                    textTransform: 'uppercase',
                                    fontSize: '0.75rem',
                                    letterSpacing: '2px',
                                    fontWeight: 700,
                                    color: '#0052ff',
                                    marginBottom: '1rem',
                                }}>
                                    {mod.tag}
                                </span>
                                <h3 style={{
                                    fontSize: 'clamp(1.5rem, 3vw, 2.25rem)',
                                    fontWeight: 800,
                                    color: '#0a0a0a',
                                    marginBottom: '1.25rem',
                                    letterSpacing: '-0.02em',
                                    lineHeight: 1.2,
                                }}>
                                    {mod.title}
                                </h3>

                                {/* New Headline */}
                                {(mod as any).headline && (
                                    <h4 style={{ fontSize: '1.25rem', fontWeight: 600, color: '#333', marginBottom: '1rem', lineHeight: 1.4 }}>
                                        {(mod as any).headline}
                                    </h4>
                                )}

                                <p style={{
                                    color: '#666',
                                    lineHeight: 1.8,
                                    marginBottom: '2rem',
                                    fontSize: '1.05rem',
                                }}>
                                    {mod.desc}
                                </p>

                                {/* New Key Features */}
                                {(mod as any).features && (
                                    <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem 0', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                                        {(mod as any).features.map((feat: any, k: number) => (
                                            <li key={k} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', color: '#555', fontSize: '0.95rem', lineHeight: 1.5 }}>
                                                <div style={{ marginTop: '0.4rem', width: '6px', height: '6px', borderRadius: '50%', background: '#0052ff', flexShrink: 0 }} />
                                                <span dangerouslySetInnerHTML={{ __html: feat }} />
                                            </li>
                                        ))}
                                    </ul>
                                )}

                                {(mod as any).cta && (
                                    <a
                                        href="#contact"
                                        style={{
                                            display: 'inline-flex',
                                            alignItems: 'center',
                                            gap: '0.5rem',
                                            padding: '0.75rem 1.5rem',
                                            background: '#0a0a0a',
                                            color: '#fff',
                                            borderRadius: '8px',
                                            fontWeight: 600,
                                            fontSize: '0.9rem',
                                            textDecoration: 'none',
                                            transition: 'all 0.3s ease',
                                        }}
                                        onMouseEnter={e => {
                                            (e.currentTarget as HTMLElement).style.background = '#0052ff';
                                            (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
                                            (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 24px rgba(0,82,255,0.3)';
                                        }}
                                        onMouseLeave={e => {
                                            (e.currentTarget as HTMLElement).style.background = '#0a0a0a';
                                            (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                                            (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                                        }}
                                    >
                                        {(mod as any).cta}
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                            <path d="M5 12h14M12 5l7 7-7 7" />
                                        </svg>
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
                @media (max-width: 900px) {
                    .module-grid {
                        grid-template-columns: 1fr !important;
                        gap: 2.5rem !important;
                    }
                    .module-grid > div {
                        order: unset !important;
                    }
                }
            `}</style>
        </section>
    );
};

export default B2BModules;
