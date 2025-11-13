module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    "bg-[var(--bg)]",
    "text-[var(--text)]",
    "border-[var(--border)]",
    "from-[var(--primary-500)]",
    "to-[var(--primary-800)]",
    "outline-[var(--primary-500)]",
    "ring-[var(--primary-500)]/40",
    "ring-[var(--brand-600)]/30",
    "hover:border-[var(--text)]",
    "hover:border-[var(--text)]/20",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Bricolage Grotesque"', "ui-serif", "Georgia", "serif"],
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
}
