// /**@type {import('tailwindcss').Config} */
// import withMT from "./tailwind.config";
// export default withMT({
//   content: [
//     "./src/**/*.{js,jsx,ts,tsx}",
//     // Add other paths to your content files here
//   ],
//   theme: {
//     extend: {
//       acentColor: "#FF014F",
//     },
//   },
//   plugins: [],
// });

import withMT from "@material-tailwind/react/utils/withMT";

export default withMT({
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
});
