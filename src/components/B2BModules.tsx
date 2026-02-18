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
        <text x="44" y="200" fill="#555" fontSize="9" fontFamily="monospace">Q1</text>
        <text x="76" y="200" fill="#555" fontSize="9" fontFamily="monospace">Q2</text>
        <text x="108" y="200" fill="#555" fontSize="9" fontFamily="monospace">Q3</text>
        <text x="140" y="200" fill="#555" fontSize="9" fontFamily="monospace">Q4</text>
        <text x="172" y="200" fill="#555" fontSize="9" fontFamily="monospace">Q5</text>
        <text x="204" y="200" fill="#555" fontSize="9" fontFamily="monospace">Q6</text>
        <text x="236" y="200" fill="#555" fontSize="9" fontFamily="monospace">Q7</text>
        {/* Title */}
        <text x="44" y="44" fill="#fff" fontSize="11" fontWeight="600" fontFamily="sans-serif">Property Value Index</text>
        <text x="44" y="58" fill="#0052ff" fontSize="9" fontFamily="monospace">+18.4% YoY</text>
        {/* Right panel */}
        <rect x="320" y="24" width="136" height="80" rx="8" fill="#111827" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
        <text x="336" y="44" fill="#888" fontSize="9" fontFamily="monospace">PORTFOLIO VALUE</text>
        <text x="336" y="64" fill="#fff" fontSize="18" fontWeight="800" fontFamily="sans-serif">₪4.2M</text>
        <text x="336" y="80" fill="#00b894" fontSize="9" fontFamily="monospace">↑ 12.3% this month</text>
        {/* Map placeholder */}
        <rect x="320" y="116" width="136" height="88" rx="8" fill="#111827" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
        <circle cx="388" cy="155" r="30" fill="rgba(0,82,255,0.1)" stroke="rgba(0,82,255,0.3)" strokeWidth="1" />
        <circle cx="388" cy="155" r="4" fill="#0052ff" />
        <circle cx="370" cy="145" r="3" fill="rgba(0,82,255,0.6)" />
        <circle cx="400" cy="165" r="3" fill="rgba(0,82,255,0.6)" />
        <circle cx="380" cy="168" r="2" fill="rgba(0,82,255,0.4)" />
        <text x="336" y="132" fill="#888" fontSize="9" fontFamily="monospace">GEO COVERAGE</text>
        {/* Bottom row */}
        <rect x="24" y="216" width="136" height="60" rx="8" fill="#111827" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
        <text x="40" y="234" fill="#888" fontSize="9" fontFamily="monospace">ACCURACY SCORE</text>
        <text x="40" y="256" fill="#fff" fontSize="20" fontWeight="800" fontFamily="sans-serif">94.2%</text>
        <rect x="172" y="216" width="136" height="60" rx="8" fill="#111827" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
        <text x="188" y="234" fill="#888" fontSize="9" fontFamily="monospace">REPORTS TODAY</text>
        <text x="188" y="256" fill="#fff" fontSize="20" fontWeight="800" fontFamily="sans-serif">1,847</text>
        <rect x="320" y="216" width="136" height="60" rx="8" fill="#111827" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
        <text x="336" y="234" fill="#888" fontSize="9" fontFamily="monospace">AVG PROCESS TIME</text>
        <text x="336" y="256" fill="#00b894" fontSize="20" fontWeight="800" fontFamily="sans-serif">28s</text>
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
        <text x="36" y="42" fill="#888" fontSize="9" fontFamily="monospace">DAMAGE PHOTO</text>
        {/* Simulated damaged wall photo */}
        <rect x="36" y="52" width="178" height="120" rx="6" fill="#1c1c1c" />
        <rect x="36" y="52" width="178" height="120" rx="6" fill="url(#fireGrad)" opacity="0.3" />
        {/* Damage overlay boxes */}
        <rect x="60" y="70" width="50" height="40" rx="2" fill="none" stroke="#ff6b6b" strokeWidth="1.5" strokeDasharray="4,2" />
        <text x="62" y="68" fill="#ff6b6b" fontSize="7" fontFamily="monospace">FIRE DMG</text>
        <rect x="130" y="90" width="60" height="50" rx="2" fill="none" stroke="#ffd93d" strokeWidth="1.5" strokeDasharray="4,2" />
        <text x="132" y="88" fill="#ffd93d" fontSize="7" fontFamily="monospace">SMOKE</text>
        <rect x="50" y="120" width="40" height="30" rx="2" fill="none" stroke="#74b9ff" strokeWidth="1.5" strokeDasharray="4,2" />
        <text x="52" y="118" fill="#74b9ff" fontSize="7" fontFamily="monospace">WATER</text>
        <defs>
            <linearGradient id="fireGrad" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#ff6b6b" />
                <stop offset="100%" stopColor="#ffd93d" />
            </linearGradient>
        </defs>
        {/* Confidence scores */}
        <text x="36" y="192" fill="#888" fontSize="9" fontFamily="monospace">DETECTION CONFIDENCE</text>
        {[
            { label: 'Fire Damage', pct: 94, color: '#ff6b6b' },
            { label: 'Smoke Damage', pct: 87, color: '#ffd93d' },
            { label: 'Water Damage', pct: 72, color: '#74b9ff' },
        ].map((item, i) => (
            <g key={i} transform={`translate(36, ${208 + i * 36})`}>
                <text fill="#ccc" fontSize="9" fontFamily="monospace" y="10">{item.label}</text>
                <text fill={item.color} fontSize="9" fontFamily="monospace" x="130" y="10">{item.pct}%</text>
                <rect y="16" width="178" height="6" rx="3" fill="rgba(255,255,255,0.05)" />
                <rect y="16" width={178 * item.pct / 100} height="6" rx="3" fill={item.color} opacity="0.8" />
            </g>
        ))}
        {/* Right: Assessment panel */}
        <rect x="246" y="20" width="214" height="320" rx="10" fill="#161b22" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
        <text x="262" y="42" fill="#888" fontSize="9" fontFamily="monospace">AI ASSESSMENT</text>
        {/* Status badge */}
        <rect x="262" y="52" width="80" height="20" rx="10" fill="rgba(0,184,148,0.15)" stroke="rgba(0,184,148,0.3)" strokeWidth="1" />
        <text x="272" y="65" fill="#00b894" fontSize="8" fontFamily="monospace">● APPROVED</text>
        {/* Cost breakdown */}
        <text x="262" y="92" fill="#888" fontSize="9" fontFamily="monospace">ESTIMATED COST</text>
        <text x="262" y="116" fill="#fff" fontSize="26" fontWeight="800" fontFamily="sans-serif">€1,970</text>
        <text x="262" y="132" fill="#888" fontSize="9" fontFamily="monospace">± 5% confidence interval</text>
        {/* Line items */}
        <line x1="262" y1="148" x2="444" y2="148" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
        {[
            { label: 'Structural Repair', cost: '€1,200' },
            { label: 'Smoke Remediation', cost: '€450' },
            { label: 'Water Extraction', cost: '€320' },
        ].map((item, i) => (
            <g key={i} transform={`translate(262, ${160 + i * 28})`}>
                <text fill="#aaa" fontSize="9" fontFamily="monospace" y="10">{item.label}</text>
                <text fill="#fff" fontSize="9" fontFamily="monospace" x="120" y="10">{item.cost}</text>
            </g>
        ))}
        <line x1="262" y1="278" x2="444" y2="278" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
        <text x="262" y="296" fill="#888" fontSize="9" fontFamily="monospace">TOTAL CLAIM</text>
        <text x="350" y="296" fill="#00b894" fontSize="11" fontWeight="700" fontFamily="sans-serif">€1,970</text>
        {/* Process time */}
        <rect x="262" y="308" width="182" height="22" rx="6" fill="rgba(0,82,255,0.1)" stroke="rgba(0,82,255,0.2)" strokeWidth="1" />
        <text x="272" y="323" fill="#0052ff" fontSize="9" fontFamily="monospace">⚡ Processed in 28 seconds</text>
    </svg>
);

// SVG Illustration: Infrastructure Monitoring
const InfrastructureIllustration = () => (
    <svg viewBox="0 0 480 360" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
        <rect width="480" height="360" fill="#0a0f1e" />
        <defs>
            <pattern id="grid3" width="30" height="30" patternUnits="userSpaceOnUse">
                <path d="M 30 0 L 0 0 0 30" fill="none" stroke="rgba(0,198,255,0.05)" strokeWidth="1" />
            </pattern>
        </defs>
        <rect width="480" height="360" fill="url(#grid3)" />
        {/* Network nodes */}
        {[
            { cx: 240, cy: 180, r: 16, color: '#00c6ff', label: 'HUB' },
            { cx: 120, cy: 100, r: 10, color: '#0052ff', label: 'NODE A' },
            { cx: 360, cy: 100, r: 10, color: '#0052ff', label: 'NODE B' },
            { cx: 80, cy: 240, r: 8, color: '#6c5ce7', label: 'SENSOR' },
            { cx: 200, cy: 290, r: 8, color: '#6c5ce7', label: 'SENSOR' },
            { cx: 380, cy: 260, r: 8, color: '#6c5ce7', label: 'SENSOR' },
            { cx: 420, cy: 140, r: 8, color: '#00b894', label: 'OK' },
            { cx: 60, cy: 160, r: 8, color: '#ffd93d', label: 'WARN' },
        ].map((node, i) => (
            <g key={i}>
                <circle cx={node.cx} cy={node.cy} r={node.r + 8} fill={node.color} opacity="0.08" />
                <circle cx={node.cx} cy={node.cy} r={node.r} fill={node.color} opacity="0.2" stroke={node.color} strokeWidth="1.5" />
                <circle cx={node.cx} cy={node.cy} r={node.r - 4} fill={node.color} opacity="0.8" />
                <text x={node.cx} y={node.cy + node.r + 12} fill={node.color} fontSize="7" fontFamily="monospace" textAnchor="middle">{node.label}</text>
            </g>
        ))}
        {/* Connection lines */}
        {[
            [240, 180, 120, 100],
            [240, 180, 360, 100],
            [240, 180, 80, 240],
            [240, 180, 200, 290],
            [240, 180, 380, 260],
            [240, 180, 420, 140],
            [240, 180, 60, 160],
            [120, 100, 60, 160],
            [360, 100, 420, 140],
        ].map(([x1, y1, x2, y2], i) => (
            <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="rgba(0,198,255,0.15)" strokeWidth="1" strokeDasharray="4,4" />
        ))}
        {/* Alert panel */}
        <rect x="20" y="20" width="160" height="100" rx="8" fill="rgba(10,15,30,0.9)" stroke="rgba(0,198,255,0.15)" strokeWidth="1" />
        <text x="36" y="38" fill="#888" fontSize="8" fontFamily="monospace">SYSTEM STATUS</text>
        <text x="36" y="56" fill="#00b894" fontSize="9" fontFamily="monospace">● 47 Nodes Online</text>
        <text x="36" y="72" fill="#ffd93d" fontSize="9" fontFamily="monospace">⚠ 2 Warnings</text>
        <text x="36" y="88" fill="#ff6b6b" fontSize="9" fontFamily="monospace">✕ 0 Critical</text>
        <text x="36" y="108" fill="#555" fontSize="8" fontFamily="monospace">Last scan: 12s ago</text>
        {/* Metrics panel */}
        <rect x="300" y="20" width="160" height="100" rx="8" fill="rgba(10,15,30,0.9)" stroke="rgba(0,198,255,0.15)" strokeWidth="1" />
        <text x="316" y="38" fill="#888" fontSize="8" fontFamily="monospace">ANOMALY DETECTION</text>
        <text x="316" y="56" fill="#fff" fontSize="18" fontWeight="800" fontFamily="sans-serif">0</text>
        <text x="316" y="70" fill="#00b894" fontSize="8" fontFamily="monospace">Active Anomalies</text>
        <text x="316" y="88" fill="#555" fontSize="8" fontFamily="monospace">99.97% uptime (30d)</text>
        {/* Waveform */}
        <rect x="20" y="300" width="440" height="44" rx="8" fill="rgba(10,15,30,0.9)" stroke="rgba(0,198,255,0.1)" strokeWidth="1" />
        <polyline
            points="36,322 60,318 80,326 100,314 120,322 140,318 160,322 180,316 200,322 220,318 240,310 260,318 280,322 300,316 320,322 340,318 360,322 380,316 400,322 420,318 440,322"
            fill="none"
            stroke="#00c6ff"
            strokeWidth="1.5"
            opacity="0.7"
        />
        <text x="36" y="338" fill="#555" fontSize="7" fontFamily="monospace">SENSOR FEED — LIVE</text>
    </svg>
);

const modules = [
    {
        tag: 'Sector 01',
        title: 'Real Estate Intelligence',
        desc: 'Optimizing asset management through predictive analytics. Enhance property value and operational efficiency with data-driven insights that go beyond surface-level assessments.',
        cta: 'Learn More',
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
        cta: 'Learn More About InsurTech Solutions',
        illustration: <InsuranceIllustration />,
        imageLeft: false,
    },
    {
        tag: 'Sector 03',
        title: 'Infrastructure Monitoring',
        desc: 'Ensure critical uptime for public and private infrastructure. Continuous monitoring and anomaly detection for large-scale operations across distributed sensor networks.',
        cta: 'View Case Studies',
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
                                    {mod.cta}
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                </a>
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
