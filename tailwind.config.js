/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        democratic: {
          blue: {
            50: "#E6E8FF",
            100: "#C7CBFF",
            200: "#9EA5FF",
            300: "#757FFF",
            400: "#4C59FF",
            500: "#0015BC", // Primary Democratic blue
            600: "#001099",
            700: "#000C75",
            800: "#000852",
            900: "#00042E",
          },
          red: {
            50: "#FFE9EC",
            100: "#FFCCD3",
            200: "#FF99A7",
            300: "#FF667B",
            400: "#FF334F",
            500: "#E31C3D", // Democratic red
            600: "#B61631",
            700: "#891125",
            800: "#5C0B19",
            900: "#2F060C",
          },
        },
      },
    },
  },
  plugins: [],
};
