/**@type {import('tailwindcss').Config} */
import withMT from "./tailwind.config";
export default withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    // Add other paths to your content files here
  ],
  theme: {
    extend: {},
  },
  plugins: [],
});
