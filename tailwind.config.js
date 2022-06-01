module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  themes: [
    {
      mytheme: {
        primary: "#fff",

        secondary: "#FDE68A",

        accent: "#4B5563",

        neutral: "#F3F4F6",

        "base-100": "#1F2937",

        info: "#98A8DD",

        success: "#1BBB70",

        warning: "#F59E0B",

        error: "#FB7185",
      },
    },
  ],
  plugins: [require("daisyui")],
};
