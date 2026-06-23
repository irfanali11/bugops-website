/** Conceptual delivery-phase illustrations — Technical Prism palette */

export function ProductDiscoveryIllustration() {
  return (
    <svg viewBox="0 0 640 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full" aria-hidden>
      <rect width="640" height="400" fill="#F8FAFC" />
      <rect x="24" y="20" width="592" height="360" rx="12" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1.5" />
      <rect x="40" y="36" width="560" height="328" rx="8" fill="#F1F5F9" stroke="#CBD5E1" strokeWidth="1" />

      {/* Whiteboard header */}
      <text x="56" y="64" fill="#64748B" fontSize="10" fontFamily="ui-monospace, monospace" fontWeight="600" letterSpacing="0.12em">
        DISCOVERY · SCOPE MAP
      </text>
      <rect x="480" y="48" width="100" height="22" rx="4" fill="rgba(6,182,212,0.12)" stroke="#06B6D4" strokeWidth="1" />
      <text x="492" y="63" fill="#06B6D4" fontSize="9" fontFamily="ui-monospace, monospace" fontWeight="600">v0.3 DRAFT</text>

      {/* Data-flow diagram */}
      <rect x="56" y="80" width="72" height="40" rx="6" fill="#FFFFFF" stroke="#06B6D4" strokeWidth="1.2" />
      <text x="68" y="98" fill="#0F172A" fontSize="8" fontWeight="600">Users</text>
      <text x="68" y="110" fill="#64748B" fontSize="7">Input layer</text>
      <path d="M128 100h28" stroke="#06B6D4" strokeWidth="1.5" markerEnd="url(#arrowCyan)" />
      <rect x="156" y="80" width="88" height="40" rx="6" fill="#FFFFFF" stroke="#8B5CF6" strokeWidth="1.2" />
      <text x="168" y="98" fill="#0F172A" fontSize="8" fontWeight="600">Core API</text>
      <text x="168" y="110" fill="#64748B" fontSize="7">Process flow</text>
      <path d="M244 100h28" stroke="#8B5CF6" strokeWidth="1.5" />
      <polygon points="272,100 266,96 266,104" fill="#8B5CF6" />
      <rect x="274" y="80" width="72" height="40" rx="6" fill="#FFFFFF" stroke="#06B6D4" strokeWidth="1.2" />
      <text x="286" y="98" fill="#0F172A" fontSize="8" fontWeight="600">Output</text>
      <text x="286" y="110" fill="#64748B" fontSize="7">Dashboard</text>

      {/* Feature prioritization */}
      <text x="56" y="148" fill="#64748B" fontSize="9" fontWeight="600" letterSpacing="0.08em">FEATURE PRIORITY</text>
      <rect x="56" y="156" width="140" height="8" rx="2" fill="#E2E8F0" />
      <rect x="56" y="156" width="112" height="8" rx="2" fill="#06B6D4" />
      <text x="204" y="164" fill="#06B6D4" fontSize="8" fontWeight="600">P0 · 80%</text>
      <rect x="56" y="172" width="140" height="8" rx="2" fill="#E2E8F0" />
      <rect x="56" y="172" width="84" height="8" rx="2" fill="#8B5CF6" />
      <text x="204" y="180" fill="#8B5CF6" fontSize="8" fontWeight="600">P1 · 60%</text>
      <rect x="56" y="188" width="140" height="8" rx="2" fill="#E2E8F0" />
      <rect x="56" y="188" width="56" height="8" rx="2" fill="#94A3B8" />
      <text x="204" y="196" fill="#64748B" fontSize="8">P2 · 40%</text>

      {/* User journey + personas */}
      <text x="280" y="148" fill="#64748B" fontSize="9" fontWeight="600" letterSpacing="0.08em">USER JOURNEY</text>
      <circle cx="296" cy="178" r="14" fill="#06B6D4" fillOpacity="0.15" stroke="#06B6D4" strokeWidth="1.2" />
      <text x="290" y="182" fill="#06B6D4" fontSize="8" fontWeight="700">A1</text>
      <path d="M310 178h40" stroke="#CBD5E1" strokeWidth="1.5" strokeDasharray="4 3" />
      <circle cx="364" cy="178" r="14" fill="#8B5CF6" fillOpacity="0.15" stroke="#8B5CF6" strokeWidth="1.2" />
      <text x="358" y="182" fill="#8B5CF6" fontSize="8" fontWeight="700">A2</text>
      <path d="M378 178h40" stroke="#CBD5E1" strokeWidth="1.5" strokeDasharray="4 3" />
      <circle cx="432" cy="178" r="14" fill="#06B6D4" fillOpacity="0.15" stroke="#06B6D4" strokeWidth="1.2" />
      <text x="426" y="182" fill="#06B6D4" fontSize="8" fontWeight="700">A3</text>
      <text x="280" y="208" fill="#64748B" fontSize="7">Persona: Ops Lead → Review → Sign-off</text>

      {/* Wireframes */}
      <text x="56" y="232" fill="#64748B" fontSize="9" fontWeight="600" letterSpacing="0.08em">WIREFRAMES</text>
      <rect x="56" y="240" width="100" height="72" rx="6" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="1" />
      <rect x="64" y="248" width="84" height="10" rx="2" fill="#E2E8F0" />
      <rect x="64" y="264" width="60" height="6" rx="1" fill="#F1F5F9" stroke="#E2E8F0" />
      <rect x="64" y="276" width="84" height="6" rx="1" fill="#F1F5F9" stroke="#E2E8F0" />
      <rect x="64" y="288" width="40" height="16" rx="3" fill="rgba(6,182,212,0.2)" stroke="#06B6D4" strokeWidth="0.8" />
      <rect x="168" y="240" width="100" height="72" rx="6" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="1" />
      <rect x="176" y="248" width="84" height="8" rx="2" fill="#E2E8F0" />
      <rect x="176" y="262" width="36" height="36" rx="4" fill="#F1F5F9" stroke="#E2E8F0" />
      <rect x="218" y="262" width="42" height="6" rx="1" fill="#F1F5F9" />
      <rect x="218" y="274" width="42" height="6" rx="1" fill="#F1F5F9" />
      <rect x="218" y="286" width="28" height="12" rx="2" fill="rgba(139,92,246,0.15)" stroke="#8B5CF6" strokeWidth="0.8" />
      <rect x="280" y="240" width="100" height="72" rx="6" fill="#FFFFFF" stroke="#06B6D4" strokeWidth="1.2" strokeDasharray="4 2" />
      <rect x="288" y="252" width="84" height="48" rx="4" fill="#F8FAFC" stroke="#E2E8F0" />
      <text x="296" y="280" fill="#64748B" fontSize="7">Mobile flow</text>

      {/* Sticky notes */}
      <rect x="400" y="156" width="48" height="48" rx="4" fill="#FEF9C3" fillOpacity="0.6" stroke="#EAB308" strokeWidth="0.8" transform="rotate(-4 424 180)" />
      <text x="408" y="176" fill="#854D0E" fontSize="7" transform="rotate(-4 424 180)">Scope</text>
      <text x="408" y="186" fill="#854D0E" fontSize="7" transform="rotate(-4 424 180)">locked</text>
      <rect x="460" y="220" width="120" height="100" rx="6" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1" />
      <text x="472" y="238" fill="#64748B" fontSize="8" fontWeight="600">Deliverables</text>
      <text x="472" y="254" fill="#0F172A" fontSize="7">□ Stakeholder map</text>
      <text x="472" y="268" fill="#0F172A" fontSize="7">□ Feasibility doc</text>
      <text x="472" y="282" fill="#06B6D4" fontSize="7">☑ Timeline v1</text>
      <text x="472" y="296" fill="#0F172A" fontSize="7">□ Scope quote</text>

      <defs>
        <marker id="arrowCyan" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="#06B6D4" />
        </marker>
      </defs>
    </svg>
  );
}

export function MvpDevelopmentIllustration() {
  return (
    <svg viewBox="0 0 640 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full" aria-hidden>
      <rect width="640" height="400" fill="#F8FAFC" />
      <rect x="20" y="16" width="600" height="368" rx="12" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1.5" />

      {/* Kanban header */}
      <text x="36" y="44" fill="#64748B" fontSize="10" fontFamily="ui-monospace, monospace" fontWeight="600" letterSpacing="0.1em">
        SPRINT BOARD · MVP BUILD
      </text>
      <rect x="500" y="28" width="104" height="22" rx="4" fill="rgba(139,92,246,0.1)" stroke="#8B5CF6" strokeWidth="1" />
      <text x="512" y="43" fill="#8B5CF6" fontSize="9" fontFamily="ui-monospace, monospace">Sprint 04</text>

      {/* Columns */}
      {[
        { x: 36, label: "BACKLOG", color: "#94A3B8" },
        { x: 168, label: "IN PROGRESS", color: "#06B6D4" },
        { x: 320, label: "TESTING", color: "#8B5CF6" },
        { x: 472, label: "DONE", color: "#10B981" },
      ].map((col) => (
        <g key={col.label}>
          <rect x={col.x} y="56" width="120" height="280" rx="8" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="1" />
          <text x={col.x + 12} y="76" fill={col.color} fontSize="8" fontWeight="700" letterSpacing="0.06em">{col.label}</text>
        </g>
      ))}

      {/* Backlog cards */}
      <rect x="44" y="88" width="104" height="52" rx="6" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="1" />
      <text x="52" y="104" fill="#0F172A" fontSize="8" fontWeight="600">Auth module</text>
      <rect x="52" y="112" width="80" height="4" rx="1" fill="#E2E8F0" />
      <rect x="52" y="112" width="24" height="4" rx="1" fill="#94A3B8" />
      <text x="52" y="130" fill="#64748B" fontSize="6" fontFamily="ui-monospace, monospace">feat/auth · pending</text>

      <rect x="44" y="148" width="104" height="52" rx="6" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="1" />
      <text x="52" y="164" fill="#0F172A" fontSize="8" fontWeight="600">Analytics</text>
      <rect x="52" y="172" width="80" height="4" rx="1" fill="#E2E8F0" />
      <text x="52" y="190" fill="#64748B" fontSize="6" fontFamily="ui-monospace, monospace">feat/data · queued</text>

      {/* In Progress cards */}
      <rect x="176" y="88" width="104" height="68" rx="6" fill="#FFFFFF" stroke="#06B6D4" strokeWidth="1.5" />
      <text x="184" y="104" fill="#0F172A" fontSize="8" fontWeight="600">Core dashboard</text>
      <rect x="184" y="112" width="88" height="5" rx="1" fill="#E2E8F0" />
      <rect x="184" y="112" width="62" height="5" rx="1" fill="#06B6D4" />
      <text x="184" y="128" fill="#64748B" fontSize="6" fontFamily="ui-monospace, monospace">a3f91c2 · 68% complete</text>
      <text x="184" y="140" fill="#64748B" fontSize="6" fontFamily="ui-monospace, monospace">+847 −124 lines</text>
      <rect x="184" y="146" width="36" height="4" rx="1" fill="rgba(6,182,212,0.3)" />

      <rect x="176" y="164" width="104" height="56" rx="6" fill="#FFFFFF" stroke="#06B6D4" strokeWidth="1" />
      <text x="184" y="180" fill="#0F172A" fontSize="8" fontWeight="600">API layer</text>
      <rect x="184" y="188" width="88" height="5" rx="1" fill="#E2E8F0" />
      <rect x="184" y="188" width="44" height="5" rx="1" fill="#06B6D4" />
      <text x="184" y="206" fill="#64748B" fontSize="6" fontFamily="ui-monospace, monospace">b7e02a1 · in review</text>

      {/* Testing */}
      <rect x="328" y="88" width="104" height="60" rx="6" fill="#FFFFFF" stroke="#8B5CF6" strokeWidth="1.5" />
      <text x="336" y="104" fill="#0F172A" fontSize="8" fontWeight="600">Checkout flow</text>
      <rect x="336" y="112" width="88" height="5" rx="1" fill="#E2E8F0" />
      <rect x="336" y="112" width="80" height="5" rx="1" fill="#8B5CF6" />
      <text x="336" y="128" fill="#64748B" fontSize="6" fontFamily="ui-monospace, monospace">QA · 12/14 tests</text>
      <text x="336" y="140" fill="#8B5CF6" fontSize="6" fontWeight="600">E2E running...</text>

      {/* Done */}
      <rect x="480" y="88" width="104" height="52" rx="6" fill="#FFFFFF" stroke="#10B981" strokeWidth="1.2" />
      <text x="488" y="104" fill="#0F172A" fontSize="8" fontWeight="600">Landing page</text>
      <rect x="488" y="112" width="88" height="5" rx="1" fill="#10B981" />
      <text x="488" y="130" fill="#64748B" fontSize="6" fontFamily="ui-monospace, monospace">merged · deployed</text>

      <rect x="480" y="148" width="104" height="52" rx="6" fill="#FFFFFF" stroke="#10B981" strokeWidth="1.2" />
      <text x="488" y="164" fill="#0F172A" fontSize="8" fontWeight="600">User onboarding</text>
      <rect x="488" y="172" width="88" height="5" rx="1" fill="#10B981" />
      <text x="488" y="190" fill="#64748B" fontSize="6" fontFamily="ui-monospace, monospace">c9d44f0 · shipped</text>

      {/* Rocket ascent path */}
      <path
        d="M300 340 Q340 280 380 220 Q420 160 520 100"
        stroke="#06B6D4"
        strokeWidth="2"
        strokeDasharray="6 4"
        fill="none"
        opacity="0.5"
      />
      <path d="M512 92 L528 88 L524 104 Z" fill="#06B6D4" />
      <circle cx="300" cy="340" r="16" fill="rgba(6,182,212,0.15)" stroke="#06B6D4" strokeWidth="1.5" />
      <path d="M300 332 L300 352 M292 344 L308 344" stroke="#06B6D4" strokeWidth="1.5" strokeLinecap="round" />
      <text x="300" y="346" fill="#06B6D4" fontSize="7" textAnchor="middle" fontWeight="700">MVP</text>

      {/* Working Product flag */}
      <rect x="528" y="72" width="88" height="28" rx="6" fill="rgba(16,185,129,0.12)" stroke="#10B981" strokeWidth="1.5" />
      <text x="540" y="90" fill="#10B981" fontSize="9" fontWeight="700">Working Product</text>
      <line x1="520" y1="100" x2="520" y2="120" stroke="#10B981" strokeWidth="2" />
      <path d="M520 100 L548 108 L520 116 Z" fill="#10B981" fillOpacity="0.3" stroke="#10B981" strokeWidth="1" />
    </svg>
  );
}

export function UiUxDesignIllustration() {
  return (
    <svg viewBox="0 0 640 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full" aria-hidden>
      <rect width="640" height="400" fill="#F8FAFC" />
      <rect x="20" y="16" width="600" height="368" rx="12" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1.5" />

      <text x="36" y="44" fill="#64748B" fontSize="10" fontFamily="ui-monospace, monospace" fontWeight="600" letterSpacing="0.1em">
        DESIGN SYSTEM · v2.1
      </text>

      {/* Color palette */}
      <text x="36" y="68" fill="#64748B" fontSize="8" fontWeight="600" letterSpacing="0.08em">COLORS</text>
      {[
        { x: 36, fill: "#06B6D4", hex: "#06B6D4" },
        { x: 76, fill: "#8B5CF6", hex: "#8B5CF6" },
        { x: 116, fill: "#0F172A", hex: "#0F172A" },
        { x: 156, fill: "#F8FAFC", hex: "#F8FAFC" },
      ].map((swatch) => (
        <g key={swatch.hex}>
          <rect x={swatch.x} y="76" width="32" height="32" rx="6" fill={swatch.fill} stroke="#E2E8F0" strokeWidth="1" />
          <text x={swatch.x} y="120" fill="#64748B" fontSize="6" fontFamily="ui-monospace, monospace">{swatch.hex}</text>
        </g>
      ))}

      {/* Typography */}
      <text x="220" y="68" fill="#64748B" fontSize="8" fontWeight="600" letterSpacing="0.08em">TYPE SCALE</text>
      <text x="220" y="88" fill="#0F172A" fontSize="14" fontWeight="700">H1 · 32px</text>
      <text x="220" y="108" fill="#0F172A" fontSize="11" fontWeight="600">H2 · 24px</text>
      <text x="220" y="124" fill="#475569" fontSize="9">Body · 16px / 1.65</text>
      <text x="220" y="138" fill="#64748B" fontSize="7">Caption · 12px</text>

      {/* Button states */}
      <text x="36" y="156" fill="#64748B" fontSize="8" fontWeight="600" letterSpacing="0.08em">COMPONENTS</text>
      <rect x="36" y="164" width="72" height="28" rx="6" fill="#06B6D4" />
      <text x="52" y="182" fill="#FFFFFF" fontSize="8" fontWeight="600">Default</text>
      <rect x="116" y="164" width="72" height="28" rx="6" fill="#0891B2" stroke="#06B6D4" strokeWidth="1.5" />
      <text x="128" y="182" fill="#FFFFFF" fontSize="8" fontWeight="600">Hover</text>
      <rect x="196" y="164" width="72" height="28" rx="6" fill="#E2E8F0" />
      <text x="208" y="182" fill="#94A3B8" fontSize="8" fontWeight="600">Disabled</text>
      <rect x="276" y="164" width="100" height="48" rx="8" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1" />
      <rect x="284" y="172" width="84" height="8" rx="2" fill="#E2E8F0" />
      <rect x="284" y="186" width="60" height="6" rx="1" fill="#F1F5F9" />
      <rect x="284" y="198" width="40" height="6" rx="1" fill="rgba(139,92,246,0.2)" />

      {/* Browser prototype */}
      <rect x="36" y="228" width="200" height="132" rx="8" fill="#FFFFFF" stroke="#06B6D4" strokeWidth="1.2" />
      <rect x="36" y="228" width="200" height="24" rx="8" fill="#F1F5F9" />
      <rect x="36" y="244" width="200" height="8" fill="#F1F5F9" />
      <circle cx="52" cy="240" r="4" fill="#EF4444" fillOpacity="0.6" />
      <circle cx="64" cy="240" r="4" fill="#EAB308" fillOpacity="0.6" />
      <circle cx="76" cy="240" r="4" fill="#22C55E" fillOpacity="0.6" />
      <rect x="88" y="234" width="120" height="12" rx="3" fill="#FFFFFF" stroke="#E2E8F0" />
      <rect x="48" y="260" width="176" height="12" rx="2" fill="#E2E8F0" />
      <rect x="48" y="280" width="80" height="64" rx="4" fill="#F8FAFC" stroke="#E2E8F0" />
      <rect x="136" y="280" width="88" height="8" rx="2" fill="#F1F5F9" />
      <rect x="136" y="294" width="88" height="8" rx="2" fill="#F1F5F9" />
      <rect x="136" y="312" width="56" height="20" rx="4" fill="rgba(6,182,212,0.2)" stroke="#06B6D4" strokeWidth="0.8" />

      {/* Mobile prototype */}
      <rect x="400" y="228" width="88" height="132" rx="12" fill="#FFFFFF" stroke="#8B5CF6" strokeWidth="1.2" />
      <rect x="428" y="236" width="32" height="4" rx="2" fill="#E2E8F0" />
      <rect x="412" y="248" width="64" height="8" rx="2" fill="#E2E8F0" />
      <rect x="412" y="264" width="64" height="40" rx="4" fill="#F8FAFC" stroke="#E2E8F0" />
      <rect x="412" y="312" width="64" height="20" rx="4" fill="rgba(139,92,246,0.15)" stroke="#8B5CF6" strokeWidth="0.8" />
      <rect x="412" y="340" width="64" height="12" rx="2" fill="#F1F5F9" />

      {/* Connector lines */}
      <path d="M236 310 C300 310 340 290 400 290" stroke="#8B5CF6" strokeWidth="1.5" strokeDasharray="5 3" fill="none" />
      <circle cx="236" cy="310" r="4" fill="#06B6D4" />
      <circle cx="400" cy="290" r="4" fill="#8B5CF6" />
      <text x="300" y="302" fill="#64748B" fontSize="7" textAnchor="middle">Prototype link</text>

      {/* Flow annotation */}
      <rect x="500" y="76" width="108" height="140" rx="8" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="1" />
      <text x="512" y="96" fill="#64748B" fontSize="8" fontWeight="600">Flow map</text>
      <rect x="512" y="104" width="84" height="24" rx="4" fill="#FFFFFF" stroke="#06B6D4" strokeWidth="1" />
      <text x="520" y="120" fill="#0F172A" fontSize="7">1. Browse</text>
      <path d="M554 128v12" stroke="#CBD5E1" strokeWidth="1" />
      <rect x="512" y="140" width="84" height="24" rx="4" fill="#FFFFFF" stroke="#8B5CF6" strokeWidth="1" />
      <text x="520" y="156" fill="#0F172A" fontSize="7">2. Configure</text>
      <path d="M554 164v12" stroke="#CBD5E1" strokeWidth="1" />
      <rect x="512" y="176" width="84" height="24" rx="4" fill="#FFFFFF" stroke="#10B981" strokeWidth="1" />
      <text x="520" y="192" fill="#0F172A" fontSize="7">3. Confirm</text>
    </svg>
  );
}
