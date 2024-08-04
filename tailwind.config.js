/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "brand-east-bay": "var(--brand-east-bay)",
        "brand-steel-blue": "var(--brand-steel-blue)",
        "brand-black-pearl": "var(--brand-black-pearl)",
      },
      fontFamily: {
        "acumin-sc": "var(--font-acumin-sc)",
        "acumin-reg": "var(--font-acumin-reg)",
        playfair: "var(--font-playfair)",
      },
      backgroundImage: {
        "hero-bg-image": "url('../assets/images/image.png')",
        "contact-image": "url('../assets/images/ocean.jpg')",
      },
    },
  },
  plugins: [],
};
