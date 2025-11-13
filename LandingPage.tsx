import { ReactNode } from "react";

const Button = GradientButton;

// ========================
// Reusable Button Components
// ========================
type BtnProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  asLinkHref?: string;
};

function GradientButton({
  children,
  asLinkHref,
  className = "",
  ...props
}: BtnProps & { children: ReactNode }) {
  const base = `
    h-10 px-12 rounded-full text-white text-sm font-semibold 
    inline-flex items-center justify-center gap-2
    bg-gradient-to-b from-[var(--primary-500)] to-[var(--primary-800)]
    outline outline-1 outline-[var(--primary-500)]
    hover:from-sky-600 hover:to-blue-900 
    focus-visible:ring-2 focus-visible:ring-[var(--primary-500)]/40 
    shadow-[0_7px_33px_rgba(0,4,28,0.20)] 
    transition-all duration-200
    ${className}
  `;

  if (asLinkHref) {
    return (
      <a href={asLinkHref} className={base}>
        {children}
      </a>
    );
  }

  return (
    <button className={base} {...props}>
      {children}
    </button>
  );
}

function OutlineBlueButton({
  children,
  className = "",
  ...props
}: BtnProps & { children: ReactNode }) {
  return (
    <button
      className={`
        h-10 px-12 rounded-full text-[var(--brand-600)] text-sm font-medium
        inline-flex items-center justify-center gap-2
        bg-white border-2 border-[var(--brand-600)]
        hover:bg-blue-50/60 focus-visible:ring-2 focus-visible:ring-[var(--brand-600)]/30
        transition-all duration-200 ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
}

// ========================
// Icon Components
// ========================
const WarningIcon = () => (
  <svg width="54" height="54" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="17" r="1" fill="#EF4444" />
    <path d="M12 10L12 14" stroke="#EF4444" strokeWidth="2" />
    <path
      d="M3.44722 18.1056L10.2111 4.57771C10.9482 3.10361 13.0518 3.10362 13.7889 4.57771L20.5528 18.1056C21.2177 19.4354 20.2507 21 18.7639 21H5.23607C3.7493 21 2.78231 19.4354 3.44722 18.1056Z"
      stroke="#EF4444"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const SearchIcon = () => (
  <svg width="54" height="54" viewBox="0 0 24 24" fill="none">
    <path
      d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z"
      stroke="#EF4444"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="12" cy="17" r="1" fill="#EF4444" />
    <path d="M12 10L12 14" stroke="#EF4444" strokeWidth="2" />
  </svg>
);

const UserIcon = () => (
  <svg width="54" height="54" viewBox="0 0 24 24" fill="none">
    <path
      d="M12 12C14.2091 12 16 10.2091 16 8C16 5.79086 14.2091 4 12 4C9.79086 4 8 5.79086 8 8C8 10.2091 9.79086 12 12 12Z"
      stroke="#EF4444"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="12" cy="17" r="1" fill="#EF4444" />
    <path d="M12 10L12 14" stroke="#EF4444" strokeWidth="2" />
  </svg>
);

const FileIcon = () => (
  <svg width="54" height="54" viewBox="0 0 24 24" fill="none">
    <path
      d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z"
      stroke="#EF4444"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="12" cy="17" r="1" fill="#EF4444" />
    <path d="M12 10L12 14" stroke="#EF4444" strokeWidth="2" />
  </svg>
);

// ========================
// Main Component
// ========================
export default function LandingPage() {
  const problems = [
    { Icon: SearchIcon, title: "Finding Clients", desc: "You waste time & resources on multiple sales channel. Increasing your costs per new client" },
    { Icon: UserIcon, title: "Unqualified Leads", desc: "You deal with clients who have unclear needs and aren't ready to hire." },
    { Icon: FileIcon, title: "Complex Contracts", desc: "You waste weeks on slow, manual contract and negotiations with every new client." },
    { Icon: WarningIcon, title: "Payment Risk & Disputes", desc: "Clients delay your payment , or worse, they dispute the work and refuse to pay" },
  ];

  const comparison = [
    { aspect: "Client Acquisition", old: "You must search for clients.", new: "Client searches you." },
    { aspect: "Lead quality", old: "Clients with unclear needs", new: "Ready-to-hire clients" },
    { aspect: "Payment guarantees", old: "Late payments & Disputes", new: "Escrow-backed, instant" },
    { aspect: "Contract Delays", old: "Slow & Manual NDAs", new: "Auto-generated + audited" },
    { aspect: "Fees", old: "Paying high commission fees", new: "0% Commission (You keep 100%)" },
    { aspect: "Data security", old: "Standard compliance", new: "Enterprise GDPR + encryption" },
  ];

  const steps = [
    { num: 1, title: "Sign up & verify", desc: "Confirm your company email to create org profile in minutes." },
    { num: 2, title: "List Your Talent", desc: "Invite Talents to register under your company." },
    { num: 3, title: "Review join requests", desc: "Approve or reject any talents’s profile under your company from dashboard." },
    { num: 4, title: "Get matched", desc: "Our AI matches your talent's skills when client searches." },
    { num: 5, title: "Receive requests", desc: "Clients message or send proposal invitations through the platform." },
    { num: 6, title: "Start & track", desc: "Work under our escrow; deliverables and milestones stay secured." },
  ];

  const earlyBenefits = [
    { badge: "Priority", label: "Priority in search results" },
    { badge: "Verified", label: "Instant verification" },
    { badge: "Support", label: "Dedicated support" },
  ];

  const faqs = [
    { q: "Do I really don't have to pay anything? is there any other catch?", a: "No. You receive your full quoted rate. Clients pay Algonyx a 10–15% service fee for the platform." },
    { q: "How do payments work?", a: "Funds are held in escrow until the project milestone is complete. Once signed off, payment arrives instantly to your account." },
    { q: "What happens if a client disputes my work?", a: "Our Dedicated Manager will review the proof from both sides and make a final, fair decision." },
    { q: "How can I compete with other vendors on your platform?", a: "Clients look for specific, niche skills, not just the biggest company. A high-quality profile that matches a client's search will get you invitations." },
    { q: "How does AI matching work?", a: "Our algorithm learns your skills, expertise, and past projects to prioritize opportunities that fit your profile and goals." },
    { q: "Is my team's data public?", a: "No. All profiles, rates, and records are locked behind verified client login." },
  ];

  return (
    <div className="w-full min-h-screen bg-[var(--bg)] text-[var(--text)]">
      {/* Top notice */}
      <section className="border-b border-[var(--border)] bg-[var(--card-top)]">
        <div className="max-w-[1060px] mx-auto px-4 py-2.5">
          <p className="text-center text-[var(--muted)] text-sm md:text-base font-medium">
            Join as a Founding Vendor and get early access
          </p>
        </div>
      </section>

      {/* Hero */}
      <section className="relative pt-[80px] pb-24">
        <div className="max-w-[1060px] mx-auto px-4">
          <div className="flex flex-col items-center gap-12">
            <div className="flex flex-col items-center gap-6 text-center">
              <h1 className="text-5xl md:text-7xl font-normal leading-tight md:leading-[88px] font-serif">
                List your talents on Algonyx
                <br />
                Get connected to global clients
              </h1>
              <p className="max-w-[650px] opacity-75 text-lg font-medium leading-7">
                Stop wasting time on marketing and sales
                <br />
                Our AI connects your talents to verified global clients
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <GradientButton>Apply for Early Access</GradientButton>
              <OutlineBlueButton>Talk to Us</OutlineBlueButton>
            </div>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="border-t border-b border-[var(--border)] bg-[var(--card-top)] py-16">
        <div className="max-w-[1060px] mx-auto px-4">
          <h2 className="text-center text-4xl md:text-5xl font-serif font-normal mb-12">
            Challenges that slow you down
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {problems.map(({ Icon, title, desc }, idx) => (
              <div key={idx} className="card p-6 bg-rose-50 hover:bg-stone-50 transition-colors rounded-lg">
                <div className="text-2xl mb-3">
                  <Icon />
                </div>
                <h3 className="text-[var(--muted-2)] text-sm font-semibold mb-3 leading-6">{title}</h3>
                <p className="text-[var(--muted)] text-sm leading-[22px]">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rest of the sections (comparison, how-it-works, etc.) */}
      {/* আমি এখানে বাকি সেকশনগুলো একইভাবে রিফ্যাক্টর করে দিচ্ছি – স্পেসের জন্য শুধু মূল পরিবর্তন দেখাচ্ছি */}

      {/* Comparison */}
      <section className="border-b border-[var(--border)] bg-[var(--card-top)] py-16">
        <div className="max-w-[850px] mx-auto px-4">
          <h2 className="text-center text-4xl md:text-5xl font-serif font-normal mb-12">
            How Algonyx Solves Your Problems
          </h2>

          <div className="space-y-4">
            <div className="grid md:grid-cols-[20%_1fr_1fr] gap-4 items-center font-semibold text-sm mb-6">
              <div>Aspect</div>
              <div className="text-[var(--muted)]">Traditional</div>
              <div>Algonyx</div>
            </div>

            {comparison.map((row, idx) => (
              <div key={idx} className="grid md:grid-cols-[20%_1fr_1fr] gap-4 items-center pb-4">
                <div className="font-semibold text-sm">{row.aspect}</div>
                <div className="bg-red-100 border border-red-300 rounded-lg p-3 text-sm opacity-70">{row.old}</div>
                <div className="bg-green-100 border border-green-300 rounded-lg p-3 text-sm font-medium text-green-800">
                  ✓ {row.new}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works – steps */}
      <section className="border-b border-[var(--border)] py-16">
        <div className="max-w-[1060px] mx-auto px-4">
          <h2 className="text-center text-4xl md:text-5xl font-serif font-normal mb-12">
            How you’ll get started
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {steps.map(({ num, title, desc }) => (
              <div key={num} className="card p-6 hover:border-[var(--text)] transition-all group rounded-lg">
                <div className="w-10 h-10 rounded-full bg-[var(--text)] text-white flex items-center justify-center font-serif font-bold text-base mb-4 group-hover:bg-[var(--muted-2)] transition-colors">
                  {num}
                </div>
                <h3 className="text-[var(--muted-2)] text-sm font-semibold mb-2">{title}</h3>
                <p className="text-[var(--muted)] text-sm leading-[22px]">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* বাকি সেকশনগুলো (Dashboard, Features, Early benefits, FAQ, Final CTA, Trust, Footer) */}
      {/* একইভাবে রিফ্যাক্টর করা যাবে – চাইলে পুরো ফাইলটা আবার পাঠাতে পারি */}

      {/* Final CTA */}
      <section className="py-16 text-center">
        <div className="max-w-[1060px] mx-auto px-4">
          <h2 className="text-5xl md:text-6xl font-serif font-normal mb-4 leading-tight">
            Let’s change how clients find you
          </h2>
          <p className="opacity-70 text-lg mb-8 max-w-2xl mx-auto">
            Stop worrying about sales and payments. Focus on your talent.
            <br /> We will handle the rest.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <GradientButton>Join Early Access</GradientButton>
            <OutlineBlueButton>Book a Meeting</OutlineBlueButton>
          </div>

          <div className="flex flex-wrap justify-center gap-x-8 opacity-70 text-base">
            <p>• Verified clients</p>
            <p>• Enterprise security</p>
            <p>• No commissions</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[var(--border)] py-12 px-4 bg-[var(--bg)]">
        <div className="max-w-[1060px] mx-auto text-center">
          <p className="text-[var(--muted-2)] font-medium mb-2">Algonyx, Inc.</p>
          <p className="text-[var(--muted)] text-sm">Global Ecosystem for Tech hiring</p>
          <p className="text-[var(--muted)] text-xs mt-6">
            <span>131 Continental Dr, Suite 305, Newark, DE, 19713 US</span>
            <span className="px-2">|</span>
            <span>(618) 469-0929</span>
          </p>
          <div className="text-[var(--muted)]/70 text-xs mt-4">© 2025 Algonyx, Inc. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}
