/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      // // Using modern `rgb`
      // primary: 'rgb(var(--color-primary) / <alpha-value>)',
      // secondary: 'rgb(var(--color-secondary) / <alpha-value>)',

      // Using modern `hsl`
      primary: "hsl(var(--color-primary) / <alpha-value>)",
      secondary: "hsl(var(--color-secondary) / <alpha-value>)",
      third: "hsl(var(--color-third) / <alpha-value>)",

      // // Using legacy `rgba`
      // primary: 'rgba(var(--color-primary), <alpha-value>)',
      // secondary: 'rgba(var(--color-secondary), <alpha-value>)',
    },
  },
  plugins: [],
};
